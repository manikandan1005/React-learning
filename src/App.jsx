import Table from "./List/Table"
import Component2 from "./List/component2"
import PageNotFound from "./PageNotFound"
import Props from "./props/Props"
import { createBrowserRouter,RouterProvider } from "react-router-dom"

const router=createBrowserRouter([
  {path:'/',element:<Props/>,errorElement:<PageNotFound/>},
  {path:"/table",element:<Table/>}
])

function App() {
 
  return (
    <>
    <h1>hello</h1>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
