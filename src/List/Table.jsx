import { Link } from "react-router-dom";
function Table(){
    const list =[{id: 1, course:'MEAN',name: 'Mani',city: 'Namakkal',tk: 'Tiruchengode',post: 'Vattur',age: 22,education: 'UG'},
                 {id: 2, course:'React',name: 'Arun',city: 'Salem',tk: 'Attur',post: 'Thammampatti',age: 23,education: 'PG'},
                 {id: 3, course:'Node',name: 'Karthi',city: 'Erode',tk: 'Perundurai',post: 'Kanjikovil',age: 21,education: 'UG'},
                 {id: 4, course:'Angular',name: 'Suresh',city: 'Coimbatore',tk: 'Pollachi',post: 'Anaimalai',age: 24,education: 'UG'},
                 {id: 5, course:'MeRN',name: 'Vijay',city: 'Karur',tk: 'Kulithalai',post: 'Vaigainallur',age: 22,education: 'Diploma'},
                 {id: 6, course:'JS',name: 'Ajith',city: 'Trichy',tk: 'Manapparai',post: 'Vaiyampatti',age: 25,education: 'PG'}

    ]
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Education</th>
                        <th>Post</th>
                        <th>Tk</th>
                        <th>City</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    { list.map((i)=>(
                        <tr key={i.id}>
                        
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>{i.education}</td>
                            <td>{i.post}</td>
                            <td>{i.tk}</td>
                            <td>{i.city}</td>
                            <td>{i.course   }</td>
                    </tr>
                    ))}
                </tbody>
            </table>

            {/* <br />
            <Link to='/'>home</Link> */}
        </>
    );
}

export default Table;