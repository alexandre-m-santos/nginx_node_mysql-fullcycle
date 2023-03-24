import express from 'express';
import mysql from 'mysql'

const app = express()
const port = process.env.APP_PORT || 3000

const config = {
  host: 'mysql_node_app',
  user: 'root',
  password: 'root',
  database: 'db_node',
}

const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
  connection.query(`insert into people (name) select CONCAT("PERSON ",convert(count(*)+1, char)) from people;`)
  connection.query("select * from people", (err, persons) => {
    if (err) throw err;
    var listOfPersons = persons.map(person => person.name)
    var ret = "<h1>Full Cycle Rocks!<h1><br>"
    listOfPersons.forEach(person => {
      ret += "- " + person + "<br>"
    });
    res.send(ret)
  }) ;
})

app.listen(port, () => {
  console.log('Up on:', port);
})