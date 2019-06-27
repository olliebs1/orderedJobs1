
const orderedJobs = (jobs) => {
  if (!jobs) return [];

  let jobArray = jobs.split(',').map(job => {
    return job.replace(/\W/g, '')
  })
  let dependantJobsArray = [];
  let nonDependantJobsArray = [];

  for (let i = 0; i < jobArray.length; i++) {
    if (jobArray[i].length > 1) {
      let nonDependantJob = jobArray[i][0]
      let dependantJob = jobArray[i][1]
      if (dependantJob === nonDependantJob) throw Error('Jobs can`t depend on themselve`s');
    }
  }
  return jobArray
}

module.exports = { orderedJobs };