# My-Bookstore-Ratings
<h2>Full Stack : Project 1 🥷🏻</h2>

-> This project involves about inserting image and storing it in Postgres Database. 

<h4>Tools Used:<br></h4>
-Node<br>
-Postgres Database in local computer<br>
-Embedded JavaScript , CSS , Javascript to handle Server<br>


How to run -><br>
1.git clone <url of this repository> ,in ur terminal<br>
2.Change your directory of the file cd /..<br>
3.npm i for installing packages<br>
4.Run your postgres Database<br>
5.Setup ur .env file with ur database detailes<br>
6.Use nodemon index.js to run <br>
7.Go to ur browser and search ur localhost:3000/<br>


The image will get converted into bytes and get stored in the database<br>
To Create the Schema follow this steps:<br>
<strong>
    CREATE TABLE booklist (<br>
        id SERIAL PRIMARY KEY,<br>
        title VARCHAR(50),<br>
        ratings decimal(4,2),<br>
        image_data BYTEA<br>
    );<br>
</strong>
<hr>

Here is the image of Database<br>
<img src="images/Screenshot1.png" alt="database" width="300"/><br>




Add ur favorite book with image and rating <br>
Here is sample record of Bookstore<br>
<img src="images/Screenshot2.png" alt="List of books" width="300"/><br>
<img src="images/Screenshot3.png" alt="Add new book" width="300"/>

<hr>
*** Do upgrade this project and give a PULL REQUEST to contribute!!😁<br>
I want this project to be more interactive and design I hope a Frontend Engineer will contribute to this Open project



Thank You!!


