import express from 'express'
import cors from "cors"
const app=express();
const PORT=3000;
const list = [
    {id: 1, course:'MEAN', name: 'Mani', city: 'Namakkal', tk: 'Tiruchengode', post: 'Vattur', age: 22, education: 'UG'},
    {id: 2, course:'React', name: 'Arun', city: 'Salem', tk: 'Attur', post: 'Thammampatti', age: 23, education: 'PG'},
    {id: 3, course:'Node', name: 'Karthi', city: 'Erode', tk: 'Perundurai', post: 'Kanjikovil', age: 21, education: 'UG'},
    {id: 4, course:'Angular', name: 'Suresh', city: 'Coimbatore', tk: 'Pollachi', post: 'Anaimalai', age: 24, education: 'UG'},
    {id: 5, course:'MeRN', name: 'Vijay', city: 'Karur', tk: 'Kulithalai', post: 'Vaigainallur', age: 22, education: 'Diploma'},
    {id: 6, course:'JS', name: 'Ajith', city: 'Trichy', tk: 'Manapparai', post: 'Vaiyampatti', age: 25, education: 'PG'},
    {id: 7, course:'Python', name: 'Ramesh', city: 'Erode', tk: 'Gobichettipalayam', post: 'Chennimalai', age: 23, education: 'UG'},
    {id: 8, course:'Java', name: 'Deepak', city: 'Salem', tk: 'Omalur', post: 'Tharamangalam', age: 24, education: 'PG'},
    {id: 9, course:'C++', name: 'Raja', city: 'Coimbatore', tk: 'Kinathukadavu', post: 'Madukkarai', age: 22, education: 'UG'},
    {id: 10, course:'Django', name: 'Kumar', city: 'Karur', tk: 'Kadavur', post: 'Vengamedu', age: 21, education: 'PG'},
    {id: 11, course:'Vue', name: 'Manoj', city: 'Trichy', tk: 'Lalgudi', post: 'Pullambadi', age: 23, education: 'UG'},
    {id: 12, course:'Flutter', name: 'Anbu', city: 'Salem', tk: 'Idappadi', post: 'Pethanaickenpalayam', age: 24, education: 'Diploma'}
];

app.use(cors())

app.listen(PORT,()=>console.log(`server start in port ${PORT}`));

app.get("/api/user",(req,res)=>{
    res.send(list)
})