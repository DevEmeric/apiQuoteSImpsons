import React from "react"

const Apisimpson = ({handle, quote}) => {
return(
    <div style={{width:"300px",margin:"auto",textAlign:"center"}}>
        <button onClick={handle}>Get Quote</button>
        <img src={quote.image} />
        <p>{quote.character}</p>
        <p>{quote.quote}</p>
    </div>
)
}

export default Apisimpson