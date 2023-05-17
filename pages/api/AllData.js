import fs from 'fs/promises';

export default async function handler(req, res) {
  try {
    const data = await fs.readdir('AllData');
    const alldata = [];

    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const mydata = await fs.readFile(`AllData/${item}`, 'utf-8');
      const parsedData = JSON.parse(mydata);
      alldata.push(parsedData);
    }

    res.status(200).json(alldata);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
