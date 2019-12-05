
# coding: utf-8

# In[ ]:

import numpy as np
import pandas as pd
import pickle

from sklearn.linear_model import LogisticRegression
from sklearn import metrics
from sklearn.model_selection import train_test_split
from sklearn import preprocessing
from sklearn.metrics import plot_confusion_matrix


# In[ ]:

"""
Transform input data for model
Lowercase all strings in the dataset
One-hot encode categorical columns such as Ethnicity and Gender
Return the one-hot encoder and combined numpy array
"""
def transform_input(df):
    df.applymap(lambda s: s.lower() if type(s) == str else s)
    df = df.drop(['Campus'], axis=1)

    encoder = preprocessing.OneHotEncoder(handle_unknown='ignore')
    categorical_cols = ['Ethnicity', 'Gender', 'County']
    categorical = df[categorical_cols].values

    non_categorical_cols = ['GPA', 'AvgScrRead', 'AvgScrMath', 'AvgScrWrit']
    intermediate = df[non_categorical_cols]

    categoricl_transformed = encoder.fit_transform(categorical).toarray()
    features = np.hstack((intermediate.values, categoricl_transformed))

    return encoder, features


# In[ ]:

df = pd.read_csv('../data/applicant_admissions_data.csv').drop(['Unnamed: 0', 'Status'], axis=1)
df.head()


# In[ ]:

# transform the data for the model
# return the encoder as it is used in predictions
encoder, X = transform_input(df)

print ("X dimensions {0}".format(X.shape))

le = preprocessing.LabelEncoder()
y = le.fit_transform(df['Campus'])

print ("y dimensions {0}".format(y.shape))

# split data into 80% train 20% test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=1000)

print ("X train dimensions {0}".format(X_train.shape))
print ("y train dimensions {0}".format(y_train.shape))

# train model
clf = LogisticRegression(
    random_state=50,
    solver='lbfgs',
    multi_class='multinomial',
    max_iter=295)

clf.fit(X_train, y_train)

# upload mode and encoder to AWS for prediction
pickle.dump(clf, open('models/gosat_logistic_regression', 'w'))
pickle.dump(encoder, open('models/gosat_logistic_encoder', 'w'))


# In[ ]:

# train model
clf = LogisticRegression(random_state=50, solver='lbfgs', multi_class='multinomial',max_iter=295)
clf.fit(X_train, y_train)

y_pred = clf.predict(X_test)
print ("predicted dimensions {0}".format(y_pred.shape))
print ("y test dimensions {0}".format(y_test.shape))

print (y_pred)
print (y_test)

disp = plot_confusion_matrix(clf, X_test, y_test,
                                 display_labels=list(df['Campus'].unique()),
                                 cmap=plt.cm.Blues,
                                 normalize=true)

print(disp.confusion_matrix)

# upload mode and encoder to AWS for prediction
#pickle.dump(clf, open('models/gosat_random_forest', 'w'))
#pickle.dump(encoder, open('models/gosat_random_forest_encoder', 'w'))



