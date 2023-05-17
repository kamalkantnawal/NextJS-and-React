import * as fs from 'fs';
export default async function handler(req, res) {
  let data = await fs.promises.readdir('PostAllDataset');

  if (req.method === 'POST') {
    console.log('---------------' + data);
    fs.promises.writeFile(
      `PostAllDataset/Dataset-${data.length + 1}.json`,
      JSON.stringify(req.body)
    );
    // Process a POST request
    res.status(200).json(req.body);
  } else {
    // Handle any other HTTP method
    res.status(200).json({ data });
  }
}
