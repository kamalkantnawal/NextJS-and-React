import Banner from "@/components/Banner.js"
import Header from "../components/Header.js"
import App from "../components/App.js"
import Hm from "../components/Hm.js"
import DatafrommariaDB from "../components/DatafrommariaDB.js"
import DeleteDataFromMariaDb from "@/components/DeleteDataFromMariaDb.js"




export default function Home() {

  return (
   <>
   <Header/>
   <Banner/>
   <App/>
   <Hm/>
   <DatafrommariaDB/>
   <DeleteDataFromMariaDb/>
   
   </>
  )
}
