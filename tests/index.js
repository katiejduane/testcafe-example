import {
  Selector
} from 'testcafe';

fixture('Getting Started')
  .page('https://github.com');

test('Find "testcafe-example" repo on GitHub', async (t) => {
  const repo = Selector('.repo-list > li > div');
  // search github
  await t
    .typeText('form[action="/search"]', 'testcafe-example user:mjhea0')
    .pressKey('enter');
  // check li for results
  await t
    .expect(repo.innerText).contains('mjhea0/testcafe-example');
});