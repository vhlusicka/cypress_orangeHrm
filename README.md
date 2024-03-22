## Cypress Cucumber automation for OrangeHRM

#### This is a whole Cypress test suite for OrangeHRM made for presentation and learning purposes. It was made from scratch using my own Cypress Cucumber template I created. This readme includes some of my notes in order to remind myself on how to set some things.

- Author: Vilim Hlušička 
- Contact: vilim.hlusicka@gmail.com

---

### How to run Cypress tests

#### Install Cypress (node_modules folder should appear after installation):
- `npm install`
*or*
- `npm install cypress --save-dev`

#### Run Cypress via UI app
- `npx cypress open`

#### Run Cypress with tags:
- Run with one tag: `npx cypress run -e TAGS='@login' --headed`
- Run with two tags: `npx cypress run -e TAGS='@login or @contact-us' --headed`
- Run by excluding a tag: `npx cypress run -e TAGS='(@login or @contact-us) and not @smoke' --headed`

#### How to run Cypress with specific browser:
- Add the option `--browser chrome` to the running command

#### How to run Cypress with scripts (scripts are located in package.json document):
- `npm run full-regression-headed-chrome`

---

### Folder structure

#### Basic folder structure

Using a Cypress with a Cucumber framework makes it possible for non-QA personel to understand the logic of testing procedure and what kind of testing is being performed.

Majority of testing logic is contained in two types of files:

- **.feature** files which are located within **e2e** folder
    - These files contain a **description** of test scenarios which are written in human-readable format called Gherkin, and it defines the login and order in which the tests are executed. These steps can be reused whenever and wherever needed and it is encouraged for steps to be reused if possible. <br>
    Example of step: `Given I navigate to the OrangeHRM Login page`

- **.js** files which are located within **support/step_definitions** folder
    - These files are called **spec files** (or test files). They contain an actual test code written in Cypress and are based on Javascript. <br>
    By executing the step `Given I navigate to the OrangeHRM Login page`, all the code defined in the .js spec file within that step will be executed. <br>
    It can consist of only one command, and it can become rather complex - it all depends on how the author of these tests defined it. <br>
    Example of command in spec file for mentioned step:
    ```js
    Given('I navigate to the OrangeHRM Login page', () => {
        cy.visit(url);
    })
    ```

---

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