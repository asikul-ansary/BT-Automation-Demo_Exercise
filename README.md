# BT-Automation-Demo_Exercise
A Webdriver IO project with a BDD framework using Typescript  to automate tests for demo website https://www.saucedemo.com. Ensure you have Webdriver IO, Typescript installed, a compatible browser driver, a testing framework, and a reporting library.
The project is designed to automate tests for the demo website [Sauce Demo](https://www.saucedemo.com).

## Setup Instructions

### Prerequisites
- Node.js installed on your machine
- Git installed on your machine
- Compatible browser installed (e.g., Chrome)
- Visual Studio Code or any preferred code editor installed

### Installation
1. Clone the repository:
   bash
   git clone https://github.com/cherry54/BT-Automation-Demo_Exercise
   cd BT-Automation-Demo_Exercise
   

2. Install dependencies:
   bash
   npm install
   

## Test Execution

To execute the automated tests, run the following command:
bash
- npm run wdio
To execute the automated tests with specific tag, run the following command:
- npm run test '@tag'

## Change Username, Password and Customer Details whenever need
If you want to run some scenario for specific username and password 
a. create .env file in root location by following the .env_sample file
b. update which field you think you want to update
c. run the script using the above command

## Test Scenarios

### Login Validations
- Verify successful login for "standard_user" and "performance_glitch_user".
- Verify login failure for "locked_out_user".

### Items Sort Order Validations
- Verify default sort order.
- Verify user can change sort order.

### Add Items to Cart and Complete Order
- Verify items in cart are retained after logout.
- Verify user can place order.

## Reporting

The project uses Allure for reporting. To view the generated report, run:
bash
- npm run report
- Note: You want find the applogs file inside logs folder to debug better in case of failure


## Folder Structure

- `features`: Contains the Gherkin feature files.
- `step-definitions`: Contains the TypeScript files with step definitions.
- `pages`: Contains the TypeScript files representing page objects.
- `utils`: Contains all helper functions and logger
- `data`: contains all the data which need to be updated at any point of time
- `wdio.conf.ts` contains wdio config details
