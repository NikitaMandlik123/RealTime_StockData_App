// Write your Slider component here
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Slider =()=>{
    const [data, setData] = useState(null)
    const apiKey = "3rn42XHfo91nxexrBI6Fk8b4QS7YPccC6CzOQUbH"

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const options ={
                    method : "GET",
                    url: 'https://yfapi.net/v6/finance/quote/marketSummary',
                    headers : {
                        'x-api-key' : apiKey
                    }
                };
            const response = await axios.request(options);
            setData(response.data.marketSummaryResponse.result);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchData();
    }, [apiKey]);

    return(
        <>
            {
                data ? (
                    <div className='slider'>
                        <div>
                        {
                            data.map((item, index) => {
                                return item.regularMarketChange.raw > 0 ? 
                                (
                                    <span className='slider-market-raw' key={index}>
                                        <span className='slider-name'>{ item.shortName }</span>  
                                            {" "}
                                            {item.regularMarketPrice.fmt}
                                        <span style={{ color: "green" }}>{" "} +{item.regularMarketChange.fmt} {" "} (+{item.regularMarketChangePercent.fmt})</span>
                                    </span>
                                ) : 
                                (
                                    <span className='slider-market-raw' key={index}>
                                        <span className='slider-name'>{ item.shortName }</span>  
                                            {" "}
                                            {item.regularMarketPrice.fmt}
                                        <span style={{ color: "red" }}>{" "} {item.regularMarketChange.fmt} {" "} ({item.regularMarketChangePercent.fmt})</span>  
                                    </span>
                                )
                            })
                        }
                        </div>
                    </div>
                )
                : (
                    <div>Loading...</div>
                )
            }
        
        </>
    )
}

export default Slider;