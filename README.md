## Cypress Cucumber - basics

#### This is a whole Cypress test suite for OrangeHRM made for presentation and learning purposes. It was made from scratch using my own Cypress Cucumber template I created. This readme includes some of my notes in order to remind myself on how to set some things.


### Install Cypress

#### How to install Cypress (install only if you are not able to run cypress):
- `npm install`
*or*
- `npm install cypress --save-dev`


### How to run Cypress:

#### Run Cypress via UI app
- `npx cypress open`

#### Run Cypress with tags:
- `npx cypress run -e TAGS='@login' --headed`
- `npx cypress run -e TAGS='@login or @contact-us' --headed`
- `npx cypress run -e TAGS='@smoke' --headed`
- `npx cypress run -e TAGS='(@login or @contact-us) and not @smoke' --headed`

#### How to run Cypress with specific browser:
- Add the option `--browser chrome` to the running command

#### How to run Cypress with scripts (scripts are located in package.json document):
- `npm run full-regression-headed-chrome`


### Reports
It is important to mention that these reports are not mandatory, but rather optional. It's recommended to use at least **HTML Reports** and **JSON Reports**.  Multiple Reports are optional

#### HTML reports:
- Setup in **package.json** nested in **cypress-cucumber-preprocessor/html**
- Reports work only with `npm run` command, not with `npx cypress open`

#### JSON Reports:
1. Download the **Cucumber Standalone JSON Formatter** and follow [these instructions](https://github.com/cucumber/json-formatter?tab=readme-ov-file#readme)
2. Move it to a directory that's on your PATH; meaning that you need to add a PATH to **environmental variables** that points to the file you downloaded.
3. Rest is in **package.json** file nested in **cypress-cucumber-preprocessor/json**

#### Multiple HTML Reports:
Install by running this command:
- `npm install multiple-cucumber-html-reporter --save-dev`
Line **"multiple-cucumber-html-reporter"** will become visible in **package.json** file

More on *Multiple Cucumber HTML Reports* is available [here](https://www.npmjs.com/package/multiple-cucumber-html-reporter).

#### Screenshots for reports
- `npm install --save-dev cypress-cucumber-attach-screenshots-to-failed-steps`