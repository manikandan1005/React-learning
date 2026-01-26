import { useState } from "react";
function OnChange(){

    const [password,setPassWord]=useState('');
    const[conformPW,setConformPW]=useState("")

    function PassWord(event){
        
        
        setPassWord(event.target.value)

    }
    function conformPassWord(event){
        setConformPW(event.target.value)
        
    }
    function Login(){
        if(password===conformPW){
            console.log("go to home ")
        }
        else console.log("wrong user")
    }
  
    

    return(
        <div className="flex items-center flex-col justify-center w-full min-h-screen">
            
            <form   className="flex flex-col gap-3"
            // onSubmit={(e) => e.preventDefault()}
            >
                <label htmlFor="NameD">Name</label>
                <input  type="text" className="border border-gray-300 rounded px-3 py-2 w-ful"/>

                <label htmlFor="passWord">Pass word</label>
                <input maxLength={10} onChange={PassWord} type="password" className="border border-gray-300 rounded px-3 py-2 w-ful" />

                <label htmlFor="conformPassWord">Conform Pass word</label>
                <input onChange={conformPassWord} type="password" className="border border-gray-300 rounded px-3 py-2 w-ful" />

                {/* <label htmlFor="course">course</label>
                <input onChange={getCourse} type="text" className="border border-gray-300 rounded px-3 py-2 w-ful" /> */}
                
                <div className=" items-center mt-2 ">
                    <button type="button" className="text-white w-24 p-4 bg-blue-400 rounded" onClick={Login}>Add</button>
                </div>

            </form>
            
        </div>
    );
}
export default OnChange;