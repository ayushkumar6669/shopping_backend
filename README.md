# Online Marketplace Node Project
This Node project consists of an online marketplace where users can buy and sell products. The application includes user authentication, input validation, secure API endpoints, error handling, and scalability considerations. Users can register, login, buy and sell products within the application.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [User Registration](#user-registration-post-apiauthregister)
- [User Login](#user-login-post-apiauthlogin)
- [Create Product](#create-product-post-apiproducts)
- [Search Products](#search-products-get-apiproductssearch)
- [Buy Product](#buy-product-post-apiproductsbuy)

## Features

The project includes the following features:

### User Registration and Authentication

- Implement user registration and login functionality.
- Employ secure password storage techniques like hashing and salting.
- Apply input validation and sanitization to prevent malicious inputs.

### Product Listing Search and Buy

- Allow users to list products for sale.
- Implement search functionality to help users find specific products.
- Validate and sanitize user inputs when creating product listings.
- Allow users to buy listed products.

### Secure API Endpoints

- Develop API endpoints to handle user registration, authentication, and product management.
- Implement secure authentication mechanisms like JSON Web Tokens (JWT) for API authorization.
- Apply input validation and sanitization to prevent injection attacks.

## Installation

To run this project locally, please follow these steps:

### Clone the repository:
```bash
git clone https://github.com/ayushkumar6669/shopping_backend.git
```

### Navigate to the project directory:
```bash
cd shopping_backend
```

### Install the required dependencies:
```bash
npm install
```

### Start the local server:
```bash
npm start
```
The server should now be running locally on **http://localhost:3000**.

## User Registration (POST /api/auth/register)

This API allows users to register by providing a username, email, and password.

### Request
- Method: POST
- Endpoint: /api/auth/register

#### Request Body
- `username` (string): The username of the user. (Required)
- `email` (string): The email of the user. (Required)
- `password` (string): The password of the user. (Required)

### Response
- Status Code: 201 (Created)
- Body:
  - `token` (string): JWT token for the registered user.

## User Login (POST /api/auth/login)

This API allows users to log in by providing their email and password.

### Request
- Method: POST
- Endpoint: /api/auth/login

#### Request Body
- `email` (string): The email of the user. (Required)
- `password` (string): The password of the user. (Required)

### Response
- Status Code: 200 (OK)
- Body:
  - `token` (string): JWT token for the authenticated user.

## Create Product (POST /api/products)

This API allows authenticated users to create a new product by providing a name, description, price and quantity.

### Request
- Method: POST
- Endpoint: /api/products
- Authentication: JWT token in the request headers.

#### Request Body
- `name` (string): The name of the product. (Required)
- `description` (string): The description of the product. (Required)
- `price` (number): The price of the product. (Required)
- `quantity` (number): The total number of products. (Required)

### Response
- Status Code: 201 (Created)
- Body: The newly created product object.

## Search Products (GET /api/products/search)

This API allows users to search for products by providing a query string `q`. The products with names that match the query string (case-insensitive) are returned.

### Request
- Method: GET
- Endpoint: /api/products/search

#### Query Parameters
- `q` (string): The query string for searching products. (Optional)

### Response
- Status Code: 200 (OK)
- Body: An array of products that match the search query.

## Buy Product (POST /api/products/buy)

This API allows authenticated users to buy product by providing a name and quantity.

### Request
- Method: POST
- Endpoint: /api/products/buy
- Authentication: JWT token in the request headers.

#### Request Body
- `name` (string): The name of the product. (Required)
- `quantity` (number): The number of products to be bought. (Required)

### Response
- Status Code: 200 (OK)
- Body: Success message and updated product quantity

---


