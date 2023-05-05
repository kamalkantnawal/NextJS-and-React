import * as fs from "fs";
//valid slug http://localhost:3000/api/blogdata?slug=test1
//invalid slug http://localhost:3000/api/blogdata?slug=qwrqefqe

export default async function handler(req, res) {
  let data = await fs.promises.readdir("AllData");
  let mydata
  let alldata = []
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    mydata = await fs.promises.readFile(('AllData/' + item), 'utf-8')
    console.log(mydata)
    alldata.push(JSON.parse(mydata))
    console.log(alldata)
  }
  res.status(200).json(alldata)
 
  // fs.readFile(`blogpostdata/${req.query.slug}.json`, 'utf8', (err, data) => {
  //   if (err) {
  //     res.status(500).json( "Blog not found" )
  //     return;
  //   }
  //   console.log(req.query.slug);
  //   res.status(200).json( JSON.parse(data) )
  // });

  //read all directory
  // fs.readdir("AllData", (err, data)=> {
  //   console.log(data)
  //   let alldata = []
  //   data.forEach(item=> {

  //     console.log(item)
  //     fs.readFile(('AllData/' + item), (data)=> {
  //       alldata.push(data)
  //     })
  //   })
  //   res.status(200).json(alldata)
  // })
}
