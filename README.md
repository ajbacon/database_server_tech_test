# Database Server Tech Test

## The brief

"Before your interview, write a program that runs a server that is accessible on `http://localhost:4000/`. When your server receives a request on `http://localhost:4000/set?somekey=somevalue` it should store the passed key and value in memory. When it receives a request on `http://localhost:4000/get?key=somekey` it should return the value stored at `somekey`. Store the data in memory, not in a database, but bear in mind that you will later need to add a database to this code."

## Installation

- ```git clone https://github.com/ajbacon/database_server_tech_test.git```
- ```cd database_server_tech_test```
- ```npm install```

## Usage

In a terminal, start the server by entering:

```npm start```

In a browser, enter a url of the form:

```http://localhost:4000/set?somekey=somevalue```

Where, ```somekey``` and ```somevalue``` are a key/value pair of your choosing.

To retrieve the stored value enter:

```http://localhost:4000/get?key=somekey```

Where ```somekey``` is the same key as entered to set the value.




