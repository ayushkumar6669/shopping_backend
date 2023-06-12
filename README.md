# Node Project API Documentation

This documentation provides an overview of the APIs available in the Node project.

## Table of Contents
- [User Registration](#user-registration-post-apiauthregister)
- [User Login](#user-login-post-apiauthlogin)
- [Create Product](#create-product-post-apiproducts)
- [Search Products](#search-products-get-apiproductssearch)

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

This API allows authenticated users to create a new product by providing a name, description, and price.

### Request
- Method: POST
- Endpoint: /api/products
- Authentication: JWT token in the request headers.

#### Request Body
- `name` (string): The name of the product. (Required)
- `description` (string): The description of the product.
- `price` (number): The price of the product. (Required)

### Response
- Status Code: 201 (Created)
- Body: The newly created product object.

## Search Products (GET /api/products/search)

This API allows users to search for products by providing a query string `q`. The products with names that match the query string (case-insensitive) are returned.

### Request
- Method: GET
- Endpoint: /api/products/search

#### Query Parameters
- `q` (string): The query string for searching products. (Required)

### Response
- Status Code: 200 (OK)
- Body: An array of products that match the search query.

---


