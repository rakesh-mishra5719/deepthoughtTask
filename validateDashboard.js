import { Selector } from 'testcafe';

fixture('Successful Login and Dashboard Redirect')
  .page('dev.deepthought.education/login');

test('Login and Redirect to Dashboard', async (t) => {
  // Selectors for login page elements.
  const usernameInput = Selector('#username');
  const passwordInput = Selector('#password');
  const loginButton = Selector('#login');

  // Selectors for dashboard page elements.
  const dashboardTitle = Selector('head > title'); 

  // Test data - provide valid credentials
  //enter username and password before testing
  const validUsername = 'valid-username'; 
  const validPassword = 'valid-password';

  // Perform the login with valid credentials 
  await t
    .typeText(usernameInput, validUsername)
    .typeText(passwordInput, validPassword)
    .click(loginButton);

  // Assertion: Check if the user is redirected to the dashboard page
  await t.expect(dashboardTitle.exists).ok();

  
});
