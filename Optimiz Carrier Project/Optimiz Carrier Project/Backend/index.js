const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

app.use(cors());
app.use(bodyparser.json());

// Connect MySql Database
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'optizecarrier',
    port:3306,
    headers: {
        'Content-Type': 'text/plain'
      },
});

db.connect(err=>{
    if(err){
        console.log(err,"error Come")
    } else{
        console.log('DataBase Connect Succesfully')
    }
});

// Get Dashboard Table Data
app.get('/table',(req,res)=>{
    let qrr = `SELECT * FROM  dashboardtable`;
    db.query(qrr,(err,results)=>{
        if(err){
            console.log("Something Wrong");
        } if(results.length>0){
            res.send({
                data:results 
            });
        };
    })
    
});

// Get Staff Management Data

app.get('/staffManagement',(req,res)=>{
    let qrr = `SELECT * FROM  staffmanagement`;
    db.query(qrr,(err,results)=>{
        if(err){
            console.log("Something Wrong");
        } if(results.length>0){
            res.send({
                data:results 
            });
        };
    })
});

// Get Staff Details By ID
app.get('/staffManagement/:id',(req,res)=>{
    // console.log(req.params.id);
    let qrId = req.params.id;
    let qr = `SELECT * FROM  staffmanagement where id = ${qrId}`;
    db.query(qr,(err,results)=>{
        if(err){
            console.log(err,"Something Wrong With Id");
        } else if(results.length>0){
            res.send({
                data:results
            })
        } else{
            res.send({
                message:"Data Not Found"
            });
        };
    });
});


// Post StaffManagement Details

app.post("/staffManagement",(req, res) => {
    const data = req.body;
    db.query("INsert INTO staffmanagement SET ? ", data, (error, result, fields) => {
        if (error) {
            console.log(error);
        } else {
            res.send(result);
        }
    });
});

// Get Login Data
app.get('/loginData',(req,res)=>{
    let qrr = `SELECT * FROM  logindata`;
    db.query(qrr,(err,results)=>{
        if(err){
            console.log("Something Wrong");
        } if(results.length>0){
            res.send({
                data:results 
            });
        };
    })
});
// Post Sign Up Data
app.post("/loginData",(req, res) => {
    const data = req.body;
    db.query("INsert INTO logindata SET ? ", data, (error, result, fields) => {
        if (error) {
            console.log(error);
        } else {
            res.send(result);
        }
    });
});


// Get Signup Data

app.get('/loginData',(req,res)=>{
    let qrr = `SELECT * FROM  logindata`;
    db.query(qrr,(err,results)=>{
        if(err){
            console.log("Something Wrong");
        } if(results.length>0){
            res.send({
                data:results 
            });
        };
    })
});

// Post Cluster Data

app.post("/cluster",(req, res) => {
    const data = req.body;
    db.query("INsert INTO clusters SET ? ", data, (error, result, fields) => {
        if (error) {
            console.log(error);
        } else {
            res.send(result);
        }
    });
});

// Get Cluster Data

app.get('/cluster',(req,res)=>{
    let qrr = `SELECT * FROM  clusters`;
    db.query(qrr,(err,results)=>{
        if(err){
            console.log("Something Wrong");
        } if(results.length>0){
            res.send({
                data:results 
            });
        };
    })
});

app.listen(4000,()=>{
    console.log("Server is Running on 4000 port");
});