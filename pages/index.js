import Banner from '@/components/Banner.js';
import Header from '../components/Header.js';
import App from '../components/App.js';
import Hm from '../components/Hm.js';
import DatafrommariaDB from '../components/DatafrommariaDB.js';
import DeleteDataFromMariaDb from '@/components/DeleteDataFromMariaDb.js';

export default function Home(props) {
  //console.log("*************************", props)

  return (
    <>
      <Header />
      <Banner />
      <App />
      <Hm />
      <DatafrommariaDB />
      <DeleteDataFromMariaDb />
    </>
  );
}
// export async function getServerSideProps(context) {
//   let data  = await fetch('http://localhost:3000/api/projectList')
//   let myprops = await data.json()
//   return {
//     props: {myprops}, // will be passed to the page component as props
//   };
// }
