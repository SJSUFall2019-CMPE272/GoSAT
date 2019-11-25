
# coding: utf-8

# In[ ]:

import boto3
import numpy as np
import pandas as pd


# In[ ]:

# import data by ethnicity
ethnicities = pd.read_csv('../data/fr-applicants-by-ethnicity.csv')
ethnicities = ethnicities.rename(columns={'County/State/ Territory': 'County', 'Count': 'Status', 'Uad Uc Ethn 6 Cat': 'Ethnicity', 'Pivot Field Values': 'Count'})
ethnicities = ethnicities[['Status', 'Fall Term', 'County', 'Ethnicity', 'Count']]
# keep only admitted student data
ethnicities = ethnicities[ethnicities['Status'] == 'Adm']
ethnicities = ethnicities[ethnicities['Fall Term'] == 2016]
ethnicities.drop(['Status', 'Fall Term'], axis=1, inplace=True)
ethnicities = ethnicities.groupby(['County', 'Ethnicity']).sum().reset_index()


# In[ ]:

ethnicities.head()


# In[ ]:

ethnicities.size


# In[ ]:

# import data by gender
genders = pd.read_csv('../data/fr-applicants-by-gender.csv')
genders = genders.rename(columns={'Count': 'Status', 'Pivot Field Values': 'Count', 'County/State/ Territory': 'County'})
genders = genders[['Status', 'Fall Term', 'County', 'Gender', 'Count']]
genders = genders[genders['Status'] == 'Adm']
genders = genders[genders['Fall Term'] == 2016]
genders.drop(['Status', 'Fall Term'], axis=1, inplace=True)
genders = genders.groupby(['County', 'Gender']).sum().reset_index()


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
# only keep admitted applicant data
gpas = gpas[gpas['Measure Names'] == 'Adm GPA']
gpas = gpas[gpas['Fall Term'] == 2016]
# rename columns
gpas = gpas.rename(columns={'Measure Values': 'GPA', 'School Name': 'School'})
gpas = gpas[['County', 'GPA', 'Campus']]


# In[ ]:

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
result['NumStudentsAccepted'] = result['Count_x'] + result['Count_y']
result.drop(['Count_x', 'Count_y'], axis=1, inplace=True)
result.drop_duplicates(inplace=True)


# In[ ]:

result.head()


# In[ ]:

result.size


# In[ ]:

result.describe()


# In[ ]:

counts = result[['NumStudentsAccepted', 'Campus', 'County']].groupby(['Campus', 'County']).sum().reset_index()
counts.rename(columns={'NumStudentsAccepted': 'TotalStudentsAcceptedInTerm'}, inplace=True)
counts.drop(['County'], axis=1, inplace=True)


# In[ ]:

counts.head()


# In[ ]:

# merge with dataset
combined = pd.merge(result, counts, on=['Campus'])
combined.head()


# In[ ]:

combined.size


# In[ ]:

combined.describe()


# In[ ]:

# caluclate the predicted column
combined['ProbabilityOfAcceptance'] = (combined['NumStudentsAccepted'] / combined['TotalStudentsAcceptedInTerm']) * 100
combined.drop(['NumStudentsAccepted', 'TotalStudentsAcceptedInTerm'], axis=1, inplace=True)


# In[ ]:

combined.head()


# In[ ]:

# fill these columns in later
combined['ACT'] = 0.0


# In[ ]:

combined.head().to_csv('../data/sample-data.csv')


# In[ ]:

combined.describe()


# In[ ]:

S3 = boto3.client('s3', region_name='eu-central-1')
S3.upload_file('../data/sample-data.csv', 'gosat-data', 'sample-data.csv')


# In[ ]:

for campus in combined['Campus'].unique():
    print(campus)


# In[ ]:



