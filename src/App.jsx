import Crud from "./CRUD/Crud"
import Readpage from "./CRUD/Readpage"
import Editpage from "./CRUD/Editpage"
import Add from "./CRUD/Add"


import Table from "./List/Table"

import CakeList from "./MethodProps/CakeList"
import PageNotFound from "./PageNotFound"

import { createBrowserRouter,RouterProvider } from "react-router-dom"
import UseState from "./UseState/UseState"

const router=createBrowserRouter([
  {
    path:'/',element:<Crud/>,errorElement:<PageNotFound/>,
    children:[
      {
        path:'',element:<Readpage/>
    },
    {
        path:'edit',element:<Editpage/>
    },
    {
        path:'add',element:<Add/>
    }]
  },
  {path:"/table",element:<Table/>},
  {path:'/method',element:<CakeList/>},
  {path:'/state',element:<UseState/>}
])

function App() {
 
  return (
    <>
    
    <RouterProvider router={router}/>
    </>
  )
}

export default App
