import React, { useState, useEffect } from "react";

import './style.scss';

export function FormLable(props) {

 
    const [value, setValue] = useState(null)
    const [required, setRequired] = useState(false)
    const [lableClass, setLableClass] = useState(' ')
    const [additional, setAdditional] = useState(null)
    useEffect(() => {

        setValue(props.title?props.title:null);
        setRequired(props.required?props.required:false)
        setLableClass(props.lableclasee?props.lableclasee:' ')
        setAdditional(props.additional?props.additional:null)
        
    }, [props]);



    return (

        <div className={`field-title ${lableClass}`}>
           {value?value:null} 
           {
            required?<span> *</span>:null
           }
           {
            additional?<span className={`additional-note ${additional.type}`}>{additional.msg}</span>:null
           }
           
        </div>

    );
}