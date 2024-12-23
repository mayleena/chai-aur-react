import { use } from "react";
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/0da71f6773c5c90f70b753f6/latest/USD`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
        
    }, [currency])
    console.log(data);
    
    return data
}

export default useCurrencyInfo;

// customHooks designeds