import express from "express";
import mongoose from "mongoose";
import route from "./routes/route.js";
import cors from "cors";

const app = express();

mongoose.connect("mongodb://localhost:27017/resful_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', ()=> console.log('Terhubung ke database resful_db.'));

app.use(cors());
app.use(express.json());
app.use('/product', route);

app.listen('3000', console.log('Server berjalan dengan baik di port 3000!'));
