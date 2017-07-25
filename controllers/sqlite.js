var sqlite = require('sqlite-cipher');
 
var conn = "";
var m = module.exports = {
    connectdb: () => {
        conn = sqlite.connect("./assets/db.enc", 'Q2hhbnBhbjA3', 'aes-256-ctr');
        return conn;
    },
    query: (sql) => {
        return conn.run(sql,(res) => {
             if (res.error)  console.error("ERROR " + res.error); 
             console.log(res);

        })
    },
    create:(table="",data)=>{
         conn.insert(table,data,(res)=>{ //{fname:'demo', lname:'demo'}
            if (res.error)  console.error("ERROR " + res.error); 
             console.log(res);
         });
    },
    update:(table="",data, wheres)=>{
         conn.update(table,data,wheres,(res)=>{
            if (res.error)  console.error("ERROR " + res.error); 
             console.log(res);
         });
    }
}