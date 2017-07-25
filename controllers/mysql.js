var mysql = require('mysql');
var conn = "";
var m = module.exports = {
    connectdb: () => {
        conn = mysql.createConnection({
            host: 'www.thaicarecloud.org',
            user: 'electron',
            password: '',
            database: 'electron'
        });
        conn.connect();
    },
    query: (sql) => {
        m.connectdb();
        conn.query(sql, function (error, results, fields) {
            if (error) throw error;
            console.log(results);
        });
        conn.end();
    }
}