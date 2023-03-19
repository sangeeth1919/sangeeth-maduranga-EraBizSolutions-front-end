import React, { useState, useEffect } from "react";
import { Col, Row, Radio, Input,Button } from 'antd';

import { Hint } from "../../../elements/public/Hint"
import { FormLable } from "../../../elements/form/FormLable"

import './style.scss';

export function MakeTreatMent(props) {

    const [selectPerson, setSelectPerson] = useState(1)

    useEffect(() => {

    }, [props]);



    return (

        <div className="treatment-inquery">
            <Row>
                <Col md={9} lg={9} xl={7}>
                    <div >
                        <div className="upper alight-end">
                            <Hint hint='Only For Medical Treatments' />
                        </div>
                        <div className="lower alight-end">
                            Treatment  Inquiry For  <span style={{ marginLeft: 5 }}> </span>
                            <Radio.Group onChange={(e) => { setSelectPerson(e.target.value) }} value={selectPerson}>
                                <Radio value={1}>MySelf</Radio>
                                <Radio value={2}>SomeOne</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                </Col>
                <Col md={6} lg={6} xl={7}>

                    <div className="horizontal-form-item">
                        <div className="upper">
                            <FormLable title='Name' required={true} />
                        </div>
                        <div className="lower">
                            <Input className="input-custom" size="large" placeholder="Name" />

                        </div>
                    </div>
                </Col>
                <Col md={6} lg={6} xl={7}>
                    <div className="horizontal-form-item">
                        <div className="upper">
                            <FormLable title='Phone or Email' required={true} />
                        </div>
                        <div className="lower">
                            <Input  className="input-custom" size="large" placeholder="Phone or Email" />
                        </div>
                    </div>
                </Col>
                <Col md={3} lg={3} xl={3}>
                <div className="horizontal-form-item">
                        <div className="upper">
                           
                        </div>
                        <div className="lower">
                        <Button className="btn-custom-submit" size="large" type="primary">SUBMIT</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>

    );
}