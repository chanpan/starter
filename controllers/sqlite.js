var sqlite = require('sqlite-cipher');
const path = require('path');

var conn = "";
var m = module.exports = {
    connectdb: () => {
        
        return conn = sqlite.connect("./assets/db.enc", 'Q2hhbnBhbjA3', 'aes-256-ctr');
    },
    query: (sql) => {
        return conn.run(sql,(res) => {
             if (res.error)  console.error("ERROR " + res.error); 
             console.log(res);

        })
    },
    create:(table="",data)=>{
         conn.insert(table,data,(res)=>{
            if (res.error)  console.error("ERROR " + res.error); 
             console.log(res);
         });
    },
    update:(table="",data, wheres)=>{
         conn.insert(table,data,wheres,(res)=>{
            if (res.error)  console.error("ERROR " + res.error); 
             console.log(res);
         });
    }
}