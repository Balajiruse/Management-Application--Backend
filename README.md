# Management And Billing Application

## Packages : 

* cors
* dotenv
* express
* mongodb
* mongoose
* nodemon
* bcrypt
* jsonwebtoken
* nodemailer

## Features : 

### Users:

* /register - to register user
* /login - to login user
* /forgot - to send reset password link to mail
* /reset - to reset password
* /activation/:id - to activate account
* /addProduct - to add product to the database
* /editProduct - to edit product in the database
* /deleteProduct - to delete product from the database
* /allProduct - to get all products of the particular user
* /billProduct - to decrease the quantity of the product in the database

## Steps:

### /register :

* finding if user already registered with the emailid
* encrypting user password
* creating object with user details
* adding user to the db
* composing mail
* creating transport to send mail
* sending mail to activate account

### /login :

* checking is user email is registered 
* validating password with email
* checking if account is active or not
* token is generated and passed as response
* if account is not active
* composing mail
* creating transport to send mail
* sending mail to activate account

### /forgot :

* checking user email is registered or not
* creating expiry token
* adding token to the database
* composing mail
* creating transport to send mail
* sending mail to reset password

### /reset :

* finding user
* verifying token
* encrypting user password
* updating password

### /activation/:id :

* finding user and updating account status
* activating account and updating it in the database

### /addProduct :

* checking if theres already a product with the same name
* if theres no product with the same name it will add product as a new one or else it will update the quantity and price alone
* creating a new object with the details
* finding the object data with the same product name and updating the object details

### /editProduct :

* filtering the data to be updated and adding the updated object as a new data into the filteredData
* creating new object and passing it to the filteredData

### /deleteProduct :

* filtering data and delete the object
* updating the remaining data

### /allProduct :

* getting all product details by the unique user id

### /billProduct :

* reducing the product quantity after billing by finding the productName and updating the fields
* updating the data
