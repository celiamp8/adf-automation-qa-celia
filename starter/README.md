## Prerequisites
- install Node 
- `npm install -g protractor` to install protractor
- `npm install` to install the project dependencies
- Optional: run `webdriver-manager update`

## Description
- run tests: `protractor conf.js`

## Explanation

The specs file contains 3 main tests:
* Successfully creating a folder
* Failing case for trying to create a folder with a duplicate name
* Deleting the previously created folder

To be executed, the two last tests depend on the successful run of the first test, but the spec file itself is atomic.

Before the three tests run, there are two main actions performed:
* The settings are updated to change Provider to ECM
* The user logs in as guest

I have not considered these actions to be part of the main set of tests due to its nature as prerequisites. If needed, the tests could be extended to include more actions and these could still run before all tests. 
Since navigation to the files directory is not automatic after login and applies only to the 3 main tests, I have included it as part of the beforeAll() as well.

Note: Credentials for the login have been hardcoded. This is only due to this being a sample project where I'm logging in as guest but would be bad practice in any other scenario.


The page objects have been divided into three files:
* Settings page
* Login page
* Files page

Corresponding to each of the pages we visit while testing.