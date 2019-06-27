const { expect } = require('chai');
const { orderedJobs } = require('../orderedJobs')

describe('orderedJobs', () => {
  it('Returns an empty array when no job is passed in a string', () => {
    const actual = orderedJobs('');
    const expected = [];
    expect(actual).to.eql(expected)
    expect(expected.length).to.equal(0);
  })
  it('Returns a single array when one job is passed with no dependancies are passed', () => {
    const actual = orderedJobs('a =>');
    const expected = ['a'];
    expect(actual).to.eql(expected)
    expect(expected.length).to.equal(1);
  });
  it('Returns an array in the correct order when multiple jobs are passed with no dependencies', () => {
    const actual = orderedJobs('a =>, b => , c =>');
    const expected = ['a', 'b', 'c'];
    expect(actual).to.eql(expected)
    expect(expected.length).to.equal(3);
  });
  it('Returns error message `Error: Jobs can`t depend on themselve`s` if it depends on itself', () => {
    const actual = 'a => a';
    expect(function () { orderedJobs(actual) }).throw();
  });
  it('Returns an array in the correct order if one job has dependencies', () => {
    const actual = orderedJobs('a =>, b => c, c => ');
    const expected = ['a', 'c', 'b'];
    expect(actual).to.eql(expected)
    expect(expected.length).to.equal(3);
    expect(actual.indexOf('a')).to.not.equal(-1);
    expect(actual.indexOf('b')).to.not.equal(-1);
    expect(actual.indexOf('c')).to.not.equal(-1);
    expect(actual.indexOf('c')).to.be.lessThan(actual.indexOf('b'));
  });
});