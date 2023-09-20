import { Selector } from 'testcafe';

fixture('Validate Error Messages for Invalid Login Attempts')
  .page('dev.deepthought.education/login'); // Replace with your login page URL

test('Check Error Messages for Invalid Login Attempts', async (test) => {
  // Selectors for login page elements
  const usernameInput = Selector('#username');
  const passwordInput = Selector('#password');
  const loginButton = Selector('#login');
  const errorMessage = Selector('#login-error-notify'); 
 
  // Test data - provide invalid credentials
  //enter invalid username & password
  const invalidUsername = 'raju';
  const invalidPassword = '571'; 

  // Perform the login with invalid credentials
  await test
    .typeText(usernameInput, invalidUsername)
    .typeText(passwordInput, invalidPassword)
    .click(loginButton);

 
  await test
    .expect(errorMessage.exists).ok()
    

 
});
