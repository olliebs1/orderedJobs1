
const orderedJobs = (jobs) => {
  if (!jobs) return [];

  let jobArray = jobs.split(',').map(job => {
    return job.replace(/\W/g, '')
  })
  let dependantJobsArray = [];
  let nonDependantJobsArray = [];

  for (let i = 0; i < jobArray.length; i++) {
    if (jobArray[i].length === 1) {
      nonDependantJobsArray.push(jobArray[i])
    }
    else if (jobArray[i].length > 1) {
      let nonDependantJob = jobArray[i][0]
      let dependantJob = jobArray[i][1]
      if (dependantJob === nonDependantJob) throw Error('Jobs can`t depend on themselve`s');

      dependantJobsArray.push(dependantJob, nonDependantJob)
    }
  }
  let orderedJobsArray = nonDependantJobsArray.concat(dependantJobsArray)
  return orderedJobsArray.filter(function (item, pos) { return orderedJobsArray.indexOf(item) == pos })
}

module.exports = { orderedJobs };