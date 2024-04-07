import dotenv from 'dotenv';

dotenv.config();

export const URL = process.env.URL || "https://www.saucedemo.com/";

export const TIMEOUT = {
    HIGH: 20000,
    MEDIUM: 15000,
    LOW: 10000
}

export const CREDTENTIAL = {
    username: process.env.USERID || "standard_user",
    password: process.env.PASSWORD || "secret_sauce"
}

export const CUSTOMER_INFO = {
    firstName: process.env.CUST_FIRSTNAME || "Asikul",
    lastName: process.env.CUST_LASTNAME || "Ansary",
    zipCode: process.env.CUST_ZIPCODE || 750035
}