import { Selector } from 'testcafe';

fixture('Unsuccessful Login Attempts')
  .page('dev.deepthought.education/login');

test('Login with Invalid Credentials', async (test) => {
  // Selectors for login page elements
  const usernameInput = Selector('#username');
  const passwordInput = Selector('#password');
  const loginButton = Selector('#login');
  const errorMessage = Selector('#login-error-notify'); 

  // Test data - provide incorrect credentials
  //enter before testing
  const invalidUsername = 'invalid username';
  const invalidPassword = 'invalid password';

  // Perform the login with invalid credentials
  await test
    .typeText(usernameInput, invalidUsername)
    .typeText(passwordInput, invalidPassword)
    .click(loginButton);


  await test.expect(errorMessage.exists).ok();

  
});
