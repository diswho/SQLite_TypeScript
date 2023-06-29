import { Database } from 'sqlite3';
import fs from 'fs';

const db = new Database('test.db');

db.exec(fs.readFileSync(__dirname + './../sql/articles.sql').toString());

db.get('SELECT RANDOM() % 100 as result', (_, res) => console.log(res));
db.close();
