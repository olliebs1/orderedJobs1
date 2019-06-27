
const orderedJobs = (jobs) => {
  if (!jobs) return [];

  let jobArray = jobs.split(',').map(job => {
    return job.replace(/\W/g, '')
  })
  console.log(jobArray)
  let dependantJobsArray = [];
  let nonDependantJobsArray = [];

}

module.exports = { orderedJobs };