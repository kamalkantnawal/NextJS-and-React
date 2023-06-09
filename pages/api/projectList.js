import { createConnection } from 'mysql';
import cors from 'cors';

// Configure MySQL connection
const connection = createConnection({
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: '1234',
  database: 'mariaschema',
});

// Initialize CORS middleware
const corsHandler = cors({ origin: true });

export default async function handler(req, res) {
  return new Promise((resolve, reject) => {
    // Apply CORS middleware
    corsHandler(req, res, (error) => {
      if (error) {
        return reject(error);
      }

      if (req.method === 'GET') {
        // Perform your MySQL query here
        const query = 'SELECT * FROM projects';

        // Execute the query
        connection.query(query, (error, results) => {
          if (error) {
            console.error(error);

            res.status(500).json({ error: 'Error fetching data from MySQL' });
          } else {
            res.status(200).json(results);
          }
        });
      } else if (req.method === 'POST') {
        const { projectName } = req.body;

        // Perform your MySQL insert query here
        const query = `INSERT INTO projects (projectName) VALUES ('${projectName}')`;

        // Execute the query
        connection.query(query, (error) => {
          if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error inserting data into MySQL' });
          } else {
            res.status(200).json({ message: 'Data inserted successfully' });
          }
        });
      } else {
        res.status(405).json({ error: 'Method Not Allowed' });
      }
    });
  });
}
