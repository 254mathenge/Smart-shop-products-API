## step 1: Set Up the Project
<ul>
<li>Create a project directory:</li>
<li>cd express-postgres-api</li>

<li>Initialize a Node.js project:</li>
npm init -y

<li>Install dependencies:</li>
npm install express pg dotenv
</ul>

## step 2:Set Up PostgreSQL Database
<ul>
<li>Create a new database:</li>
<li>createdb products </li>
<li>Create a table in the database "products"(optional, for example purposes):</li>
Example

POSTGRESQL

CREATE TABLE products<br>
    id SERIAL PRIMARY KEY,<br>
    name VARCHAR(100),<br>
    email VARCHAR(100) UNIQUE NOT NULL
</ul>

## Step 3: Create the Express Server
<ul>
<li>Create the main server file:index.js</li>
<li>Set up your environment variables: Create a .env file </li>
Example

DB_USER=your_db_user<br>
DB_PASSWORD=your_db_password<br>
DB_HOST=localhost<br>
DB_PORT=5432<br>
DB_DATABASE=mydatabase<br>
<li>Edit index.js to configure the Express server and connect to PostgreSQL :</li>
const express = require('express');<br>
const { Pool } = require('pg');<br>
const dotenv = require('dotenv');<br>
</ul>

## Step 4: Run the Server
<ul>
<li>Start the server :</li>
npm ru dev:watch

<li>Get all users :</li>

 GET http://localhost:3000/users
</ul>