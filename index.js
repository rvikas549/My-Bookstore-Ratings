//Packages
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import multer from "multer";
import env from "dotenv";

env.config();
//Data Base Connection
const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
  });
  db.connect();
  

//Local Host
const app = express();
const port = 3000;


//Img to binary code
const storage = multer.memoryStorage();
const upload = multer({ storage });

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

//Function to get all Books
async function getList() {
    let list =[];
    const result = await db.query("SELECT * FROM booklist");
    result.rows.forEach(book => {
        if (book.img) {
          // Convert binary image data to base64
          book.img = `data:image/jpeg;base64,${book.img.toString('base64')}`;
        }
        list.push(book);
      }); 
    return list; 
}

//Home route R
app.get("/", async (req,res)=>{
    try{
        let list = await getList();
        console.log(list);
        res.render("index.ejs",{
        date : 'Top rated in',
        List : list
    });}
    catch(err){
        console.log(err);}   
});


//Add route C
app.post("/add", upload.single("image"), async (req,res)=>{
    try {
        const imageData = req.file.buffer;
        const newbook = req.body["newbook"];
        const newrating = req.body["newrating"];
        await db.query(
          "INSERT INTO booklist (title, ratings, img) VALUES ($1, $2, $3)", 
          [newbook, newrating, imageData]
        );
        res.redirect("/");
      } 
    catch(err)
    {
        console.log(err);
        res.status(500).send('Server error');
    }
});


//Edit route U
app.post("/edit", async (req,res)=>{
    let editTitle = req.body["edittitle"];
    let editRating = req.body["editrating"]
});


//Delete route D
app.post("/delete", async (req,res)=>{
    try{
        const deleteBook = req.body["deletebook"];
        await db.query("DELETE FROM booklist WHERE id = ($1);",[deleteBook]);
        res.redirect("/"); }
    catch(err){
        console.log(err);}
});


//Server Start
app.listen(port,()=>{
    console.log(`Listening on Port ${port}`);
});