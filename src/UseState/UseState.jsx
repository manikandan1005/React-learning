import { useEffect, useState } from "react"
function UseState(){
    //use state to update the state of component for rerender the ui
    const[list,setList]=useState([])
    //use effect get the data in fetch
    useEffect(()=>{
            fetch("http://localhost:3000/api/user")
            .then((res)=>{return res.json()})
            .then((data)=>setList(data))
            .catch((err)=>{
                console.log(err);
                setList([]);
            })
        },[])

    function remove(ID){
    console.log(`${ID} removed `)
    let newList=list.filter((i)=>i.id !=ID)
    setList(newList)
    
}

    return(
       
        <>
     

    {/* table */}
    <div className="flex items-center justify-center">
        <table className=" mx-4">
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>NameD</th>
                    <th>Education</th>
                    <th>City</th>
                    <th>Joined course</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {list.map((i)=>(
                    <tr key={i.id}>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.education}</td>
                        <td>{i.city}</td>
                        <td>{i.course}</td>
                        <td>
                            <button className=" mx-1 bg-red-500 p-2 rounded" onClick={()=>remove(i.id)}> Remove</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
    )
}
export default UseState;