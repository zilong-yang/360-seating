/**
 * dev data seeding script
 * 
 * descriptions: import/delete all development data at once
 * usage: from command line, type: node test/data/dev_data_seeding.js --[action]
 * actions: 
 *   --import: import all data
 *   --delete: delete all data
 */

 const fs = require('fs');
 const Order = require('../models/Order');
 const Theater = require('../models/Theater');
 const mongoose = require('mongoose');
 require('dotenv').config();
 
 // Database config URI key
const db = process.env.DB_URI;

// Connect to MongoDB database
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB")
})
.catch((err) => {
    console.log(err)
});
mongoose.set('useFindAndModify', false);
 
 //Get data
 const orders = JSON.parse(
     fs.readFileSync(`${__dirname}/orders.json`, 'utf-8')
 );
 const theater = JSON.parse(
     fs.readFileSync(`${__dirname}/theater.json`, 'utf-8')
 );
 
 //Insert all data to DB
 const importData = async function(){
     try{
         await Order.create(orders);
         await Theater.create(theater);
         console.log('Data successfully loaded')
     } catch(err){
         console.log(err)
     }
     process.exit();
 }
 
 //Delete all data from DB
 const deleteData = async function(){
     try{
         await Order.deleteMany();
         await Theater.deleteMany();
         console.log('Data successfully deleted');
         process.exit();
     }catch(err){
         console.log(err);
     }
     process.exit();
 }
 
 //geting cl arguments
 const _action = process.argv[2];
 
 if(_action === '--import') importData();
 else if(_action === '--delete') deleteData();
 