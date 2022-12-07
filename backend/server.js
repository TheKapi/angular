import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const port = process.env.PORT;
const app = express();

const dbConnect = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
});

dbConnect.connect((err) => {
	if (err) console.log("failed to connect database");
	else console.log("connected to database");
});

app.listen(port, () => {
	console.log(`app is runnig on port ${port}`);
});
