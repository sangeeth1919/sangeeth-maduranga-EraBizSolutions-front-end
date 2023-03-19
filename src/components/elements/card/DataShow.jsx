import React, { useState, useEffect } from "react";

export function DataShow(props) {


    const [value, setValue] = useState(null)
    const [lable, setLable] = useState(null)
    const [isOpesit, setPassive] = useState(false)
    useEffect(() => {
        setLable(props.lable ? props.lable : null);
        setValue(props.value ? props.value : null);
        setPassive(props.isOpesit ? props.isOpesit : false)
    }, [props]);



    return (

        <div className='data-show'>
           
            <div className={`${isOpesit?"lable-opesit":"lable"}`}>
            {lable ? lable : null}
            </div>
            <div className={`${isOpesit?"value-opesit":"value"}`} >
            {value ? value : null}
            </div>
          
        </div>

    );
}