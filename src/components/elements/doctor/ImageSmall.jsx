import React, { useState, useEffect } from "react";

export function ImageSmall(props) {


    const [image, setImage] = useState(null)
    const [status, setStatus] = useState(' ')

    useEffect(() => {

        setImage(props.image ? props.image : null);
        setStatus(props.status ? props.status : ' ')
    }, [props]);



    return (

        <div className="image-container">

            <div className="image-container-second">

                <img className={`${status} doctor-image-small`} src={image} />

            </div>


        </div>

    );
}