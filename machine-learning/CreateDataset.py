
# coding: utf-8

# In[ ]:

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

join_cols = ['School', 'Fall Term']


# In[ ]:

# join the datasets
result = pd.merge(ethnicities, genders, on=join_cols).drop_duplicates()
result['NumStudentsAccepted'] = result['Count_x'] + result['Count_y']
result.drop(['Count_x', 'Count_y'], axis=1, inplace=True)
result.drop_duplicates(inplace=True)


# In[ ]:

result.head()


# In[ ]:

result.size


# In[ ]:

# calculate total students accepted by year
counts = result[['Fall Term', 'NumStudentsAccepted']].groupby('Fall Term').count().reset_index()
counts.rename(columns={'NumStudentsAccepted': 'TotalStudentsAcceptedInTerm'}, inplace=True)


# In[ ]:

counts.head()


# In[ ]:

# merge with dataset
combined = pd.merge(result, counts, on='Fall Term')
combined.head()


# In[ ]:

combined.size


# In[ ]:

# caluclate the predicted column
combined['ProbabilityOfAcceptance'] = (combined['NumStudentsAccepted'] / combined['TotalStudentsAcceptedInTerm']) * 100


# In[ ]:

combined.head()


# In[ ]:



