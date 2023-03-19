import React, { useState, useEffect } from "react";

import './title.scss';

export function Title(props) {

 
    const [value, setValue] = useState(null)
    const [weight, setWeight] = useState(null)
    
    useEffect(() => {

        setValue(props.title?props.title:null);
        setWeight(props.weight?props.weight:null)
    }, [props]);



    return (

        <div className={`${weight} title`}>
           {value?value:null}
        </div>

    );
}