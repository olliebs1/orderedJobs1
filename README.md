
Order of Jobs

The aim is to build and test a function, that takes a string which contains jobs/tasks, of which some of these jobs rely on other jobs/tasks to be completed first before itself can be completed and so will return the correct order of jobs to be completed.

For example 'a =>, b => c, c => ' will return the correct order of jobs as ['a', 'c', 'b']

Getting started: 

You will need the latest version of Node installed. To check if you have Node already installed by running the command:

node -v
If node is already installed your command line will return a version number. eg v8.0.0

You will need to clone the repositary. To do this copy the link, navigate to your local directory on the terminal and run command:

git clone https://github.com/olliebs1/orderedJobs1.git

Then run:

npm install


This project uses Chai and Mocha for testing purposes. To install these dependencies run the following command:

npm install chai 


To run the tests in this repositary:

npm test