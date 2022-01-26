const express = require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "pis",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/readclass',(req,res)=>{
    const sqlRead="select * from class;"
    db.query(sqlRead,(err,result)=>{
        if(err)
            console.log(err);
        res.send(result);
        
    });
});


app.post('/insertclass', (req, res) => {
     
     const sqlInsert="INSERT INTO class(ID,class_name_nepali,short_name_nepali,class_name_english,salary_scale,class_order,class_status,created_by,class_action)VALUES(DEFAULT,?,?,?,?,?,?,?,?);";
     
     db.query(sqlInsert,[req.body.class_name_nepali,req.body.short_name_nepali,req.body.class_name_english,req.body.salary_scale,100,"OK",req.body.created_by,"verified"],(err,res)=>{
         if(err)
        {
            console.log(err);
        }
     });
    //console.log(req.body);
    
});
app.put('/updating',(req,res)=>{
    const sqlquery="UPDATE class SET class_name_nepali=?,short_name_nepali=?,class_name_english=?,salary_scale=?,created_by=? where id=?;";
    db.query(sqlquery,[req.body.class_name_nepali,req.body.short_name_nepali,req.body.class_name_english,req.body.salary_scale,req.body.created_by,req.body.id],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})

app.delete('/deleteclass/:id',(req,res)=>{
    const sqlInsert=`Delete from class where class.id=${req.params.id};`; 
    db.query(sqlInsert,(err,res)=>{
        if(err)
        {
            console.log(err);
        }
       
    })
});
app.get('/getbyid/:id',(req,res)=>{
    const sqlInsert=`SELECT * FROM class WHERE class.id=${req.params.id};`; 
    db.query(sqlInsert,(err,result)=>{
        if(err)
        {
            console.log(err);
        }
       res.send(result);
    })
});
app.listen(3001, () => {
    console.log('Running on port 3001');
})