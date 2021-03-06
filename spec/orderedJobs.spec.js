const { expect } = require('chai');
const { orderedJobs } = require('../orderedJobs')

describe('orderedJobs', () => {
  it('Returns an empty array when no job is passed in a string', () => {
    const actual = orderedJobs('');
    const expected = [];
    expect(actual).to.eql(expected)
    expect(expected.length).to.equal(0);
  })
  it('Returns a single array when one job is passed with no dependancies', () => {
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
  it('Returns an error when a job cant depend on itself', () => {
    const actual = 'a => , b => , c => c';
    const expected = 'Error: Jobs can`t depend on themselve`s';
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
  it('Returns an array in the correct order if more than one job has a dependency', () => {
    const actual = orderedJobs('a => d, b => c, c =>');
    const expected = ["c", "d", "a", "b"];
    expect(actual).to.eql(expected)
    expect(expected.length).to.equal(4);
    expect(actual.indexOf('a')).to.not.equal(-1);
    expect(actual.indexOf('b')).to.not.equal(-1);
    expect(actual.indexOf('c')).to.not.equal(-1);
    expect(actual.indexOf('d')).to.not.equal(-1);
    expect(actual.indexOf('c')).to.be.lessThan(actual.indexOf('b'));
    expect(actual.indexOf('d')).to.be.lessThan(actual.indexOf('a'));
  });
  it('Returns an array in the correct order if many jobs have a dependency', () => {
    const actual = orderedJobs('a =>, b => c, c => f, d => a, e => b, f =>');
    const expected = ['a', 'f', 'c', 'b', 'd', 'e'];
    expect(actual).to.eql(expected)
    expect(expected.length).to.equal(6);
    expect(actual.indexOf('a')).to.not.equal(-1);
    expect(actual.indexOf('b')).to.not.equal(-1);
    expect(actual.indexOf('c')).to.not.equal(-1);
    expect(actual.indexOf('d')).to.not.equal(-1);
    expect(actual.indexOf('e')).to.not.equal(-1);
    expect(actual.indexOf('f')).to.not.equal(-1);
    expect(actual.indexOf('c')).to.be.lessThan(actual.indexOf('b'));
    expect(actual.indexOf('f')).to.be.lessThan(actual.indexOf('c'));
    expect(actual.indexOf('a')).to.be.lessThan(actual.indexOf('d'));
    expect(actual.indexOf('b')).to.be.lessThan(actual.indexOf('e'));
  });
  it('Returns error message `Jobs can’t have circular dependencies` if the jobs order is circular', () => {
    const actual = 'a =>, b => c, c => f, d => a, e => b, f => b';
    // const expected = 'Error: Jobs can`t have circular dependencies';
    expect(function () { orderedJobs(actual) }).throw();
  });
});