require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 1000;
app.use(cors());
app.use(express.json());
app.get("/weather",async(req,res)=>{
    const city = req.query.city;
    if(!city){
        return res.status(400).json({error:"Provide an appropriate city"})
    }
    try{
        const apikey=process.env.api-key;  
        const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
        
        const responce = await fetch(apiurl);
        const data = await response.json();
        
        res.json(data)
    }
    catch (error) {
        console.error("Error fetching weather data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
app.listen(PORT, () => {
    console.log(`My Server is running on http://localhost:${port}`);
});
