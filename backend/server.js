require("dotenv").config();
const express = require("express");
const axios = require("axios")
const app = express();
const PORT = 1000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.get("/weather",async(req,res)=>{
    const city = req.query.city;
    if(!city){
        return res.status(400).json({error:"Provide an appropriate city"})
    }
    try{
        const apikey=process.env.api_key;  
        const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=yes`;
        
        const response = await axios.get(apiUrl);
        const data = response.data;

        
        res.json(data)
    }
    catch (error) {
        console.error("Error fetching weather data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
app.listen(PORT, () => {
    console.log(`My Server is running on http://localhost:${PORT}`);
});
