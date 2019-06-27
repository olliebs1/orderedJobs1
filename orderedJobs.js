
const orderedJobs = (jobs) => {
  if (!jobs) return [];

  let jobArray = jobs.split(',').map(job => {
    return job.replace(/\W/g, '')
  })
  let dependantJobsArray = [];
  let nonDependantJobsArray = [];

  return jobArray

}

module.exports = { orderedJobs };