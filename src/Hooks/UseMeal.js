import { useEffect, useState } from "react"


const UseMeal=()=>{
    const [meal,setMeal]=useState([]);
    useEffect(()=>{
        fetch("./fakedata.json")
        .then(res=>res.json())
        .then(data=>setMeal(data));
    },[])
    

    return [meal,setMeal];
}
export default UseMeal;