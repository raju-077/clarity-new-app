const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config({ path: './.backendenv' }); 

app.use(cors());

app.get("/", async (req,res)=>{
    try{
         const response_one = await fetch(`https://newsdata.io/api/1/latest?apikey=${process.env.FIRST_KEY}&size=1`);
         const response_two = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.SECOND_KEY}`);
         const response_three = await fetch(`https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${process.env.THIRD_KEY}`);
         const data_one = await response_one.json();
         const data_two = await response_two.json();
         const data_three = await response_three.json();
         return res.json({data_one : data_one.results,data_two : data_two.articles,data_three :data_three.articles});
    }catch(err){
        return res.status(500).json({ error: err.message }); 
    }
});

app.listen(3000);

