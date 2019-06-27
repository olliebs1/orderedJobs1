const { expect } = require('chai');
const { orderedJobs } = require('../orderedJobs')

describe('orderedJobs', () => {
  it('Returns an empty array when no job is passed in a string', () => {
    const actual = orderedJobs('');
    const expected = [];
    expect(actual).to.eql(expected)
  })
});