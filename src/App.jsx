import Crud from "./CRUD/Crud"
import Readpage from "./CRUD/Readpage"
import Editpage from "./CRUD/Editpage"
import Add from "./CRUD/Add"


import Table from "./List/Table"

import CakeList from "./MethodProps/CakeList"
import PageNotFound from "./PageNotFound"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UseState from "./UseState/UseState"
import Home from "./Home"
import OnChange from "./props/OnChange"

const router = createBrowserRouter([
  {
    path: '/', element: <Home />, errorElement: <PageNotFound />,
    children: [
      {
        path: '', element: <Crud />,
        children: [
          {
            path: '', element: <Readpage />
          },
          {
            path: 'edit', element: <Editpage />
          },
          {
            path: 'add', element: <Add />
          }]

      }
      ,
      { path: "table", element: <Table /> },
      { path: 'method', element: <CakeList /> },
      { path: 'state', element: <UseState /> },
      { path: 'onChange', element: <OnChange/> }
    ]
  }
])

function App() {

  return (
    <>
      {/* <nav className="flex w-full p-2 bg-black text-white">
      <Link to='/table'>Table</Link>
    </nav> */}


      <RouterProvider router={router} />
    </>
  )
}

export default App
