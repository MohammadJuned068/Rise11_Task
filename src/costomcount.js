import { useState } from "react";

function useCostomcount(){
    const [count,setCount]=useState(0);
    const handleClick=()=>{
        setCount(count+1);
    };

    return {
        count,
        handleClick
    }
}

export default useCostomcount;