const express = require('express');
const app = express();
const port = 8080
const config = {
    //nome do serviço que o docker-compose criou
    host: 'mysql-db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);
const dropTable = `drop table people`
const createTable = `create table people(id int not null auto_increment, name varchar(255), primary key(id));`
const sql = `INSERT INTO people(name) values ?`
var values = [
    ['Marcelo'],
    ['Thayssa'],
    ['Joao'],
    ['Gianni'],
    ['Gabriel'],
    ['William'],
    ['Wesley']
  ];
const select = `SELECT * FROM people`
var html = "<h1>Full Cycle</h1>";

connection.query(dropTable);
connection.query(createTable, function(err, result){
    if(err) {
        console.log("Err:", err);
        connection.end();
    }
    else {
        console.log("Tabela criada");
        connection.query(sql, [values], function(err, result) {
            if(err) {
                console.log("Err:", err);
                connection.end();
            }
            else {
                console.log("Num de registros adicionados: " + result.affectedRows);
                connection.query(select, function(err,result,fields) {
                    if(err) {
                        console.log("Err:", err);
                        connection.end();
                    }
                    else {
                        app.get('/', (req,res) => {
                            html += "</br></br>"
                            html += "<h1>Lista de Usuários</h1>"
                            html += "<ol>"
                            Object.keys(result).forEach(function(key) {
                                var row = result[key];                                
                                html += "<li>" + row.name + "</li>"                                
                                console.log(row.name)
                              });
                            html += "</ol>"
                              res.send(html)
                        })                        
                        connection.end();
                    }
                })
            }
        });
    }
});

app.listen(port, ()=> {
    console.log('Rodando na porta: '+ port);
})