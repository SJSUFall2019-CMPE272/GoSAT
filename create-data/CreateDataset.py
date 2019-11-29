
# coding: utf-8

# In[ ]:

import boto3
import numpy as np
import pandas as pd


# In[ ]:

def calculate_admittance_proba(df, category, year):
    df = df[df['Fall Term'] == year].drop(['Fall Term'], axis=1)
    
    # divide admitted by applied to get probability
    admitted = df[df['Status'] == 'Adm'].drop(['Status'], axis=1)
    admitted = admitted.groupby(['County', category]).sum().reset_index()
    applied = df[df['Status'] == 'App'].drop(['Status'], axis=1)
    applied = applied.groupby(['County', category]).sum().reset_index()
    
    result = pd.merge(admitted, applied, on=['County', category])
    result['Probability'] = result['Count_x'] / result['Count_y']
    return result.drop(['Count_x', 'Count_y'], axis=1)


# In[ ]:

# import data by ethnicity
ethnicities = pd.read_csv('../data/fr-applicants-by-ethnicity.csv')
ethnicities = ethnicities.rename(columns={'County/State/ Territory': 'County', 'Count': 'Status', 'Uad Uc Ethn 6 Cat': 'Ethnicity', 'Pivot Field Values': 'Count'})
ethnicities = ethnicities[['Status', 'Fall Term', 'County', 'Ethnicity', 'Count']]
ethnicities = calculate_admittance_proba(ethnicities, 'Ethnicity', 2016)


# In[ ]:

ethnicities.head()


# In[ ]:

ethnicities.size


# In[ ]:

# import data by gender
genders = pd.read_csv('../data/fr-applicants-by-gender.csv')
genders = genders.rename(columns={'Count': 'Status', 'Pivot Field Values': 'Count', 'County/State/ Territory': 'County'})
genders = genders[['Status', 'Fall Term', 'County', 'Gender', 'Count']]
genders = calculate_admittance_proba(genders, 'Gender', 2016)


# In[ ]:

genders.head()


# In[ ]:

genders.size


# In[ ]:

# import data by gpa
gpas = pd.read_csv('../data/fr-applicants-by-gpa.csv')
# filter any rows that do not have a GPA or school
gpas = gpas[pd.notnull(gpas['School Name'])]
gpas = gpas[pd.notnull(gpas['Measure Values'])]
# rename columns
gpas = gpas.rename(columns={'Measure Values': 'GPA', 'School Name': 'School'})

gpas = gpas[gpas['Fall Term'] == 2016].drop(['Fall Term'], axis=1)
    
# divide admitted by applied to get probability
admitted = gpas[gpas['Measure Names'] == 'Adm GPA'].drop(['Measure Names'], axis=1)
admitted = admitted.groupby(['County', 'Campus']).count().reset_index()
applied = gpas[gpas['Measure Names'] == 'App GPA'].drop(['Measure Names'], axis=1)
applied = applied.groupby(['County', 'Campus']).count().reset_index()

result = pd.merge(admitted, applied, on=['County', 'Campus'])
result = result[['County', 'Campus', 'Calculation1_x', 'Calculation1_y']]
result['Probability'] = result['Calculation1_x'] / result['Calculation1_y']
result = result.drop(['Calculation1_x', 'Calculation1_y'], axis=1)

gpas = pd.merge(result, gpas, on=['Campus', 'County'])[['County', 'Campus', 'GPA', 'Probability']].drop_duplicates()

len(gpas)
# In[ ]:

gpas.head()


# In[ ]:

sat_scores = pd.read_csv('../data/sat-report-2015-2016.csv')
# columns to keep
sat_scores = sat_scores[['AvgScrRead', 'AvgScrMath', 'AvgScrWrit', 'cname']]
# rename for join
sat_scores = sat_scores.rename(columns={'cname': 'County'})
# drop any rows that do not have a school
sat_scores = sat_scores[pd.notnull(sat_scores['County'])]
# convert score cols to ints
sat_scores['AvgScrRead'] = pd.to_numeric(sat_scores['AvgScrRead'], errors=coerce)
sat_scores['AvgScrMath'] = pd.to_numeric(sat_scores['AvgScrMath'], errors=coerce)
sat_scores['AvgScrWrit'] = pd.to_numeric(sat_scores['AvgScrWrit'], errors=coerce)
# drop null cols
sat_scores = sat_scores[pd.notnull(sat_scores['AvgScrRead'])]
sat_scores = sat_scores[pd.notnull(sat_scores['AvgScrMath'])]
sat_scores = sat_scores[pd.notnull(sat_scores['AvgScrWrit'])]
sat_scores = sat_scores.groupby('County').mean().reset_index()
sat_scores.head()


# In[ ]:

len(sat_scores)


# In[ ]:

join_cols = ['County']


# In[ ]:

# join the datasets
result = pd.merge(ethnicities, genders, on=join_cols)
result = pd.merge(result, gpas, on=join_cols).drop_duplicates()
result = pd.merge(result, sat_scores, on=join_cols).drop_duplicates()
result['Probability'] = (result['Probability_x'] + result['Probability_y'] + result['Probability']) / 3
result.drop(['Probability_x', 'Probability_y'], axis=1, inplace=True)
result.drop_duplicates(inplace=True)


# In[ ]:

result.head()


# In[ ]:

result.size


# In[ ]:

result.describe()


# In[ ]:

#counts = result[['NumStudentsAccepted', 'Campus', 'County']].groupby(['Campus', 'County']).sum().reset_index()
#counts.rename(columns={'NumStudentsAccepted': 'TotalStudentsAcceptedInTerm'}, inplace=True)
#counts.drop(['County'], axis=1, inplace=True)


# In[ ]:

#counts.head()


# In[ ]:

# merge with dataset
#combined = pd.merge(result, counts, on=['Campus'])
#combined.head()


# In[ ]:

#combined.size


# In[ ]:

#combined.describe()


# In[ ]:

# caluclate the predicted column
#combined['ProbabilityOfAcceptance'] = (combined['NumStudentsAccepted'] / combined['TotalStudentsAcceptedInTerm']) * 100
#combined.drop(['NumStudentsAccepted', 'TotalStudentsAcceptedInTerm'], axis=1, inplace=True)


# In[ ]:

#combined.head()


# In[ ]:

# fill these columns in later
result['ACT'] = 0.0


# In[ ]:

result.head().to_csv('../data/sample-data.csv')


# In[ ]:

result.describe()


# In[ ]:

S3 = boto3.client('s3', region_name='eu-central-1')
S3.upload_file('../data/sample-data.csv', 'gosat-data', 'sample-data.csv')


# In[ ]:

result.head()


# In[ ]:

result = result[['County', 'Ethnicity', 'Gender', 'Campus']].drop_duplicates()
result.to_csv('../data/uc-campus-categorical-data.csv')


# In[ ]:

result[['County', 'Gender', 'Campus', 'Ethnicity']].head()


# In[ ]:

len(result)


# In[ ]:



