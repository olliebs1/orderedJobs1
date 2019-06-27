const { expect } = require('chai');
const { orderedJobs } = require('../orderedJobs')

describe('orderedJobs', () => {
  it('Returns an empty array when no job is passed in a string', () => {
    const actual = orderedJobs('');
    const expected = [];
    expect(actual).to.eql(expected)
  })
  it('Returns a collection of a single job when passed in a string', () => {
    const actual = orderedJobs('a =>');
    const expected = ['a'];
    expect(actual).to.eql(expected)
  });
});