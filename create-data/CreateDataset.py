
# coding: utf-8

# In[ ]:

import boto3
import numpy as np
import pandas as pd


# In[ ]:

# import data by ethnicity
ethnicities = pd.read_csv('../data/fr-applicants-by-ethnicity.csv')
ethnicities = ethnicities.rename(columns={'Count': 'Status', 'Uad Uc Ethn 6 Cat': 'Ethnicity', 'Pivot Field Values': 'Count'})
ethnicities = ethnicities[['Status', 'Fall Term', 'School', 'Ethnicity', 'Count']]
ethnicities = ethnicities[ethnicities['Status'] == 'Adm']
ethnicities.drop(['Status'], axis=1, inplace=True)


# In[ ]:

ethnicities.head()


# In[ ]:

ethnicities.size


# In[ ]:

# import data by gender
genders = pd.read_csv('../data/fr-applicants-by-gender.csv')
genders = genders.rename(columns={'Count': 'Status', 'Pivot Field Values': 'Count'})
genders = genders[['Status', 'Fall Term', 'School', 'Gender', 'Count']]
genders = genders[genders['Status'] == 'Adm']
genders.drop(['Status'], axis=1, inplace=True)


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
# rename columns
gpas = gpas.rename(columns={'Measure Values': 'GPA', 'School Name': 'School'})
gpas = gpas[['Fall Term', 'School', 'GPA', 'Campus']]


# In[ ]:

len(gpas)


# In[ ]:

gpas.head()


# In[ ]:

join_cols = ['School', 'Fall Term']


# In[ ]:

# join the datasets
result = pd.merge(ethnicities, genders, on=join_cols)
result = pd.merge(result, gpas, on=join_cols).drop_duplicates()
result['NumStudentsAccepted'] = result['Count_x'] + result['Count_y']
result.drop(['Count_x', 'Count_y'], axis=1, inplace=True)
result = result[result['Fall Term'] == 2016]
result.drop_duplicates(inplace=True)


# In[ ]:

result.head()


# In[ ]:

result.size


# In[ ]:

result.describe()


# In[ ]:

counts = result[['Fall Term', 'NumStudentsAccepted', 'Campus']].groupby(['Fall Term', 'Campus']).count().reset_index()
counts.rename(columns={'NumStudentsAccepted': 'TotalStudentsAcceptedInTerm'}, inplace=True)


# In[ ]:

counts.head()


# In[ ]:

# merge with dataset
combined = pd.merge(result, counts, on=['Fall Term', 'Campus'])
combined.head()


# In[ ]:

combined.size


# In[ ]:

combined.describe()


# In[ ]:

# caluclate the predicted column
combined['ProbabilityOfAcceptance'] = (combined['NumStudentsAccepted'] / combined['TotalStudentsAcceptedInTerm']) * 100
combined.drop(['NumStudentsAccepted', 'TotalStudentsAcceptedInTerm', 'Fall Term'], axis=1, inplace=True)


# In[ ]:

combined.head()


# In[ ]:

# fill these columns in later
combined['SAT'] = 1200
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



