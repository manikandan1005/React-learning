import { useState ,useEffect} from "react";
import {  Link } from "react-router-dom";

const Readpage=()=>{

const [newList,setList]=useState([]);

 useEffect(()=>{
    console.log("use effect call")
    fetch("http://localhost:3000/api/user")
    .then((res)=>{
        console.log(res)
        return res.json()}
    )
    .then((data)=>{
        console.log(data)
        setList(data)
    })

 },[])


//remove the row
function remove(ID){
    console.log(`${ID} removed `)
    let removedList=newList.filter((i)=>i.id !=ID)
    setList(removedList)
    
}
//view the row 
function view(ID){
    console.log(ID)
}
    return(
       
        <>
            <div className="flex my-4 justify-end gap-3">
        <input type="text"  className="border border-black rounded" />
        <Link to="/add" className="bg-red-500 px-3 mx-3 py-2 border-xl text-white">Add</Link>
    </div>

    {/* table */}
    <div className="flex items-center justify-center">
        <table className=" mx-4">
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>Education</th>
                    <th>City</th>
                    <th>Joined course</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {newList.map((i)=>(
                    <tr key={i.id}>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.education}</td>
                        <td>{i.city}</td>
                        <td>{i.course}</td>
                        <td><button className="bg-green-500 p-2 rounded mx-1" onClick={(event)=>view(i.id)}>View</button>
                        <button className=" mx-1 bg-red-500 p-2 rounded" onClick={()=>remove(i.id)}> Remove</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
    )
}
export default Readpage;