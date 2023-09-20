import { Selector } from 'testcafe';

fixture('Login Test')
  .page('dev.deepthought.education/login');
test('Successful Login with Valid Credentials', async (test) => {
  // Selectors for login page elements.
  const usernameInput = Selector('#username'); 
  const passwordInput = Selector('#password'); 
  const loginButton = Selector('#login');
  const welcomeMessage = Selector('#page-content-wrapper > nav');

//   // Test data for validate login
// enter bfore testing
  const username = 'username';
  const password = 'password';

  // Perform the login
  await test.typeText(usernameInput, username)
         .typeText(passwordInput, password)
         .click(loginButton);

  // Assertion: Check if the welcome message is displayed after login
  await test.expect(welcomeMessage.exists).ok();


});



