import React, { useState, useEffect } from "react";
import { Col, Row, Spin } from 'antd';
import { connect } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { getDoctors } from '../../../actions/doctorActions';
import { Title } from "../../elements/public/Title"
import DoctorCard from "./doctor-card/DoctorCard"

const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 24,
        }}
        spin
    />
);

function DoctorList(props) {

    useEffect(() => {

        props.getDoctors();
    }, []);



    useEffect(() => {
        if (props.selectedDoctor) {
        }

    }, [props.selectedDoctor]);


    return (

        <div>
            {props.loading
                ? <div className="loading-div"><Spin indicator={antIcon} /></div> :
                <div>
                    {
                        props.doctors ?
                            <Row>
                                {
                                    props.doctors.length == 0 ?
                                        <div className="not-found">
                                            <Title title={`Ops... We are out of resources`} weight='header-2' />
                                        </div>

                                        : null
                                }
                                {
                                    props.doctors.map((doctor) => (
                                        <>
                                            {
                                                doctor.id === props.selectedDoctor ?
                                                    <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                                                        <DoctorCard details={doctor} />
                                                    </Col> :
                                                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                                                        <DoctorCard details={doctor} />
                                                    </Col>
                                            }

                                        </>




                                    ))
                                }
                            </Row>
                            : null
                    }

                </div>

            }



        </div>

    );
}

const mapStateToProps = state => ({
    loading: state.doctors.loading,
    doctors: state.doctors.doctors,
    selectedDoctor: state.doctors.selectedDoctor
})

export default connect(mapStateToProps, { getDoctors })(DoctorList);