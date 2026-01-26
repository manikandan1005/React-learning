import {Link, Outlet} from "react-router-dom"
function Home(){
    return (
        <>
         <nav className="flex w-full gap-4 p-2 bg-black text-white fixed z-10 l-0 top-0">
            <Link to="/">CRUD</Link>
        <Link to="/table">Table</Link>
        <Link to="/method">Method</Link>
        <Link to="/state">State</Link>
        <Link to="/onChange">onChange</Link>
      </nav>
      <div className="  mt-14">
        <Outlet/>
      </div>
        </>
    );

}
export default Home;