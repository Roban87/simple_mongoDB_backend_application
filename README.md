### Gamma Digital trial task

## Installing and Runnig the application

1. fork this repository
2. clone it to your local environment
    ```
    git clone <your repository link>
    ```
3. step into the backend folder
    ```
    cd backend
    ```
4. install dependencies
    ```
    yarn install
    ```
5. create .env file with the informations below
    - if you don't have MongoDB Atlas registration, please make one: https://www.mongodb.com/ and create a cluster
    - on the cluster choose CONNECT -> Connect your application
    - there you can find your data: mongodb+srv://< username>:< password>@< host>/?someOptions
    - give a port and database name of your choise
    ```
    PORT=
    MONGODB_HOST=
    MONGODB_USER=
    MONGODB_PASSWORD=
    MONGODB_DATABASE=
    ```
    (examples can be found in the .env.example)
6. to create database with starter data run script
    ```
    yarn starterdb
    ```
7. run the application
    ```
    yarn start
    ```

## User Guide
1. use a Postman or any other way to create your requests
2. to get all records: make a GET request on the /api/records endpoint
3. to get one record: make a GET request on the /api/records/:id endpoint
   - sample data contains ids from 1 to 10
4. to add a new record: make a POST request on the /api/records endpoint
   - the body should contain a JSON object with one _id data, that has to be a string, any other data is optional
5. to delete one record: make a DELETE request on the /api/records/:id endpoint