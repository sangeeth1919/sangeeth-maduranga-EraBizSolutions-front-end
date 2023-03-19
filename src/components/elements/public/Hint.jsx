import React, { useState, useEffect } from "react";

import './hint.scss';

export function Hint(props) {

 
    const [value, setValue] = useState(null)
    
    useEffect(() => {

        setValue(props.hint?props.hint:null);
    }, [props]);



    return (

        <div className={`hint`}>
           ({value?value:null})
        </div>

    );
}