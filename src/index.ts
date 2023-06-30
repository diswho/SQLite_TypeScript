import { Database } from 'sqlite3';
import fs from 'fs';

const db = new Database('test.db');

// ===================== Reading data
// const delete_statement = db.prepare(`DELETE FROM articles WHERE id=?`);
// delete_statement.run(4);
// delete_statement.finalize();

// ===================== Reading data
// const statement = db.prepare(  `SELECT title FROM articles ORDER BY LENGTH(description) DESC LIMIT 5`);
// statement.run();
// statement.finalize();

// ===================== UPDATE data
// const statement = db.prepare(`UPDATE articles SET title=? WHERE id=?`);
// statement.run('Third article Edit', 3);
// statement.finalize();

// ===================== INSERT rows
// const insert_statement = db.prepare(
//   `INSERT OR REPLACE INTO articles VALUES(?,?,?)`
// );
// insert_statement.run(4, 'Four article', 'dolorem consectetur, adipisci velit');
// insert_statement.finalize();

// ===================== Updating rows
// db.exec(`UPDATE articles SET title='Troisième article' WHERE id=3`);
// db.get('SELECT title FROM articles WHERE id=3', (_, res) => console.log(res));

// db.all(  'SELECT title FROM articles ORDER BY LENGTH(description) DESC LIMIT 5',  (_, res) => console.log(res));
// db.exec(fs.readFileSync(__dirname + './../sql/articles.sql').toString());
// Insert the three example articles
// db.exec(fs.readFileSync(__dirname + './../sql/sample-articles.sql').toString());

db.close();
