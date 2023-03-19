import React, { useState, useEffect } from "react";
import { Col, Row, Button, Modal, Input, DatePicker } from 'antd';
import { connect } from 'react-redux';
import { closeAppoimentModal, changeValue, submitAppoiment } from '../../../actions/appoimentActions';
import ActiveCard from "../../pages/doctor/doctor-card/ActiveCard"
import { FormLable } from '../../elements/form/FormLable';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function AddAppoiment(props) {


    const [isValidateSuccess, setValidateSuccess] = useState(false)
    const [doctorAvailableMessage, setDoctorCheckMsg] = useState({
        msg: '',
        type: 'info'
    })
    const valueChangeFunction = (data, field) => {

        props.changeValue({
            field: field,
            value: data,
            doctorId: props.selectedDoctor.id
        })
    }

    const submitAppoimentFunction = async () => {

        let data = {
            ...props.value,
            doctor: props.selectedDoctor.id
        }
       const res = await props.submitAppoiment(data)
       props.closeAppoimentModal()
       toast.success('Appoiment Created!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    }

    useEffect(() => {

        const data = props.value
        if (data.name == null || data.name == '' || data.mobile == null || data.mobile == '' || data.date == null || data.date == '' || !props.isAvilable) {
            if (data.date == null || data.date == '') {

                setDoctorCheckMsg({
                    msg: 'Select Date To Check Availablity',
                    type: 'error'
                })
            } else {
                if (!props.isAvilable) {
                    setDoctorCheckMsg({
                        msg: 'Not available!',
                        type: 'error'
                    })
                } else {
                    setDoctorCheckMsg({
                        msg: 'Available',
                        type: 'info'
                    })
                }
            }
            setValidateSuccess(false)
        } else {
            if (props.isAvilable) {
                setDoctorCheckMsg({
                    msg: 'Available',
                    type: 'info'
                })
            }
            setValidateSuccess(true)
        }

    }, [props.value]);




    return (

        <>
        <ToastContainer />
            <Modal
                open={props.isModalOpen}
                title="Make Appoiment"
                onOk={props.closeAppoimentModal}
                onCancel={props.closeAppoimentModal}
                footer={[
                    <Button className="btn-custom-squre" key="back" onClick={props.closeAppoimentModal}>
                        Return
                    </Button>,
                    <Button className="btn-custom-squre" key="submit" type="primary"
                        loading={props.loading}
                        disabled={isValidateSuccess ? false : true}
                        onClick={submitAppoimentFunction}>
                        Submit
                    </Button>,
                ]}
            >
                <Row className="appoiment-form">
                    <Col md={24} lg={24} xl={24}>
                        <ActiveCard details={props.selectedDoctor} viewOnly={true} />
                    </Col>

                    <Col className="appoiment-form-field" md={24} lg={12} xl={12}>
                        <div className="horizontal-form-item">
                            <div className="upper">
                                <FormLable title='Patient name' required={true} lableclasee='small' />
                            </div>
                            <div className="lower">
                                <Input className="input-custom" value={props.value.name} onChange={(e) => { valueChangeFunction(e.target.value, 'name') }} size="large" placeholder="Patient name" />
                            </div>
                        </div>
                    </Col>
                    <Col className="appoiment-form-field" md={24} lg={12} xl={12}>
                        <div className="horizontal-form-item">
                            <div className="upper">
                                <FormLable title='Patient Mobile' required={true} lableclasee='small' />
                            </div>
                            <div className="lower">
                                <Input className="input-custom" value={props.value.mobile} onChange={(e) => { valueChangeFunction(e.target.value, 'mobile') }} size="large" placeholder="Patient Mobile" />
                            </div>
                        </div>
                    </Col>
                    <Col className="appoiment-form-field" md={24} lg={12} xl={12}>
                        <div className="horizontal-form-item">
                            <div className="upper">
                                <FormLable title='Patient Email' required={false} lableclasee='small' />
                            </div>
                            <div className="lower">
                                <Input className="input-custom" value={props.value.email} onChange={(e) => { valueChangeFunction(e.target.value, 'email') }} size="large" placeholder="Patient Email" />
                            </div>
                        </div>
                    </Col>
                    <Col className="appoiment-form-field" md={24} lg={12} xl={12}>
                        <div className="horizontal-form-item">
                            <div className="upper">
                                <FormLable title='Date' additional={doctorAvailableMessage} required={true} lableclasee='small' />
                            </div>
                            <div className="lower">
                                {
                                    <DatePicker className="input-custom"  style={{ width: '100%' }} onChange={(date, dateString) => { valueChangeFunction(dateString, 'date') }} format={'YYYY-MM-DD HH'} showTime size="large" />
                                }
                                
                                {/* <Input  value={props.value.date} onChange={(e)=>{valueChangeFunction(e.target.value,'date')}} size="large" placeholder="Date" /> */}
                            </div>
                        </div>
                    </Col>
                </Row>

            </Modal>
        </>

    );
}

const mapStateToProps = state => ({
    isModalOpen: state.appoiment.isModalOpen,
    selectedDoctor: state.appoiment.selectedDoctor,
    value: state.appoiment.value,
    isAvilable: state.appoiment.isAvilable,
    formErrors: state.appoiment.formErrors,
    loading: state.appoiment.loading
})

export default connect(mapStateToProps, {
    closeAppoimentModal,
    changeValue,
    submitAppoiment
})(AddAppoiment);