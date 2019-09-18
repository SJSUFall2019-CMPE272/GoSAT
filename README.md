# ProjectGroup-25


###Urban Health Data Inventory

https://data.world/health/big-cities-health/workspace/file?filename=Big_Cities_Health_Data_Inventory.csv

https://bchi.bigcitieshealth.org/indicators/1827/searches/34444

Description: Perform a linear analysis on urban health indexes to determine significant factors in the prevalence of disease in a city

Goals:
	1. Improve public health in cities
	2. Insights in how to prevent disease

Technology stack:
	1. Postgres: https://aws.amazon.com/rds/postgresql/
	2. AWS Glue (data processing): https://aws.amazon.com/glue/
	3. Python (API)
	4. ReactJs
	5. AWS (deployment) 

About the data:
26 cities
34 health indicators
9 diseases
13 years worth of data

Challenges
Mostly categorical data, will need to do extra feature processing to make sense of the attributes



###CalSATScores

https://www.cde.ca.gov/ds/sp/ai/

Project Title: Visualize Historic SAT Benchmark Performance in California by County

Description: Create a web-based geovisualization displaying the SAT benchmark performance(s) of various counties in California from 1998 - 2018.

Goals:
	1. Assist California residents in understanding the educational performance of various counties
	
	2. Assist policy makers in understanding which counties require educational funding

Technology stack:
	1. Postgres: https://aws.amazon.com/rds/postgresql/
	2. AWS Glue (data processing): https://aws.amazon.com/glue/
	3. Python (API)
	4.  Googla Maps / D3 / (any other good geovisualization libraries?)
	5. AWS (deployment)

The data format: https://www.cde.ca.gov/ds/sp/ai/reclayoutsat17.asp

###Restaurant Decider

There are numerous sources such as Yelp that give us recommendations on where to eat, but there are still too many choices for us. Recommendation services based on user preferences and eating habits are better tailored to the user and will create a better experience.

Goals:
	1. To make a recommendation based on the user preferences and their eating habits.
	2. Track their bills for understanding their eating preference better.

Data:

https://www.yelp.com/dataset/documentation/main

6,685,900 reviews
Review Id
Review Text
Business Id

Technology Stack:
	1. Tensorflow
	2. AWS

Challenges/ Things to consider:
	1. Data model.
		a. Extracting sentiment from reviews
		b. Finding similar businesses from sentiment
		c. Scale of the data
		d. Aggregating the data for each reviewer
		e. Ensuring there are a large amount of reviews per person

