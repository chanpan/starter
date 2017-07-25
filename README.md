การเชื่มอต่อ mysql electron 
1. npm install --save mysql     // ติดตั้ง lib ของ mysql
2. สร้างไฟล์ mysql.js 
    var mysql = require('mysql'); //เรียกใช้ lib ของ mysql 
    var conn = ""; //ตัวแปรสำหรับ เก็บค่าที่เชื่อมต่อ mysql
    var m = module.exports = {
        connectdb: () => {
            conn = mysql.createConnection({
                host: 'www.thaicarecloud.org',
                user: 'electron',
                password: '',
                database: 'electron'
            }); //set ค่าของ mysql 
            conn.connect(); //เชื่อมต่อ 
        },
        query: (sql) => {
            m.connectdb();
            conn.query(sql, function (error, results, fields) { //query ข้อมูลผ่าน parameter sql
                if (error) throw error;
                console.log(results); //debug ดูผลลัพธ์
            });
            conn.end();
        }
    }
 3. มาที่ไฟล์ home.html 
    let mysql = require("./controllers/mysql.js"); //import mysql.js มาใช้งาน
    mysql.query(`SELECT * FROM demo_person`); //เรียกใช้ function ที่อยู่ใน mysql.js

