const mongoose = require("mongoose");

const connectDB = async() => {
	try
	{
		const db = "mongodb+srv://yamuna:My272933@cluster0.loqzc4x.mongodb.net/?retryWrites=true&w=majority";
		await mongoose.connect(db);
		console.log("MongoDB connected...");
	}
	catch(err)
	{
		console.log(err);
		process.exit(1);
	}
} 

module.exports = connectDB;