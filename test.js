const test = require('tape');
const electronGithubOauth = require('./');

test('it work!', t => {
  const result = electronGithubOauth();
  t.equal(result, 42);
  t.end();
});
