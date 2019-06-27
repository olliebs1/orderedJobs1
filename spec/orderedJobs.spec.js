const { expect } = require('chai');
const { orderedJobs } = require('../orderedJobs')

describe('orderedJobs', () => {
  it('Returns an empty array when no job is passed in a string', () => {
    const actual = orderedJobs('');
    const expected = [];
    expect(actual).to.eql(expected)
  })
  it('Returns a single array when one job is passed with no dependancies are passed', () => {
    const actual = orderedJobs('a =>');
    const expected = ['a'];
    expect(actual).to.eql(expected)
  });
});