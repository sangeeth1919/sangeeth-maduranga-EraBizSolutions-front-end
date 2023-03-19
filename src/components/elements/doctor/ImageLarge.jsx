import React, { useState, useEffect } from "react";

export function ImageLarge(props) {

 
    const [image, setImage] = useState(null)
    const [status, setStatus] = useState(' ')
    
    useEffect(() => {

        setImage(props.image?props.image:null);
        setStatus(props.status?props.status:' ')
    }, [props]);



    return (

        <div className="image-container">
             <img className={`${status} doctor-image-large`} src={image} />
             
              </div>

    );
}