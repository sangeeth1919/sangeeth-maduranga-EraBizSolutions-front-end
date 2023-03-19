import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { viewDoctor } from '../../../../actions/doctorActions';

import  ActiveCard  from "./ActiveCard"
import  PassiveCard  from "./PassiveCard"

function DoctorCard(props) {


    const [data, setData] = useState({})

    const viewDoctorFunction = () => {
        props.viewDoctor(data.id)
    }
    useEffect(() => {
        if (props.details) {
            setData(props.details)
        }

    }, [props]);





    return (
        <>
            {
                props.selectedDoctor === data.id ? 
                <div >
                   <ActiveCard details={data} />
                </div>
                 : 
                 <div onClick={viewDoctorFunction}>
                <PassiveCard details={data} />
                </div>
            }
        </>


    );
}

const mapStateToProps = state => ({
    selectedDoctor: state.doctors.selectedDoctor
})

export default connect(mapStateToProps, { viewDoctor })(DoctorCard);