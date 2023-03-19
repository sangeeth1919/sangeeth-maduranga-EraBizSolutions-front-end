import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { viewDoctor } from '../../../../actions/doctorActions';
import { ImageLarge } from "../../../elements/doctor/ImageLarge"
import { Title } from "../../../elements/public/Title"
function PassiveCard(props) {


    const [data, setData] = useState({})

    useEffect(() => {
        if (props.details) {
            setData(props.details)
        }

    }, [props]);





    return (

        <div className="card-container">
            {
                data.image ? <ImageLarge image={data.image} status={data.status} /> : null
            }
            <div className="center-font doctor-name">
                <span>
                    {
                        data.firstName ? data.firstName : '-'
                    }
                </span> <span>
                    {
                        data.lastName ? data.lastName : '-'
                    }
                </span>
            </div>
            <Title title={data.Speciality} weight='header-4' />

        </div>



    );
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, { viewDoctor })(PassiveCard);