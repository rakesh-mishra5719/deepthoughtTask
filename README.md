** testcase.js ***
it is for test case 1 (Login Test) valid credentials

**unsuccessfultest.js **
it is for test case 2 unsuccesful login attempts with invalid creadentials

** validerrormessage.js **
it is for test case 3 to validate error message with invalid credentials

** validateDashboard.js**
it is for test case 4 on successful login, validate that the user is redirected to the dashboard screen.



**           IMPORTANT NOTE        ** 

 @ HERE is a bug 
________________________________________________________________________________________________________
valid email with valid password    expected result -> should login,  actual result -> unsuccessful Login 
________________________________________________________________________________________________________


**  Before testing 

1. set up local node js environment.
2. install testcafe by -- npm install testcafe


** for testing multiple browser

* on terminal -> 1. testcafe chrome fileName.js  // for chrome
                2. testcafe edge fileName.js   // for microsoft edge
                3. testcafe firefox fileName.js // for firefox




*************problem faced while testing -> email with password login not working.*****************



****************************  T H A N K  Y O U  *******************************