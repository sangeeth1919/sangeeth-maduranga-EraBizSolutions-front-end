import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Col, Row } from 'antd';
import { viewDoctor } from '../../../../actions/doctorActions';
import { openAppoimentModal } from '../../../../actions/appoimentActions';
import { ImageSmall } from "../../../elements/doctor/ImageSmall"
import { Title } from "../../../elements/public/Title"
import { DataShow } from "../../../elements/card/DataShow"

import { CalendarOutlined, UserOutlined, WechatOutlined, ArrowRightOutlined } from '@ant-design/icons';
function ActiveCard(props) {


    const [data, setData] = useState({})
    const [viewOnly, setViewOnly] = useState(false)

    const openCreateAppoimentModel = () => {
        props.openAppoimentModal(data)
    }
    useEffect(() => {
        if (props.details) {
            setData(props.details)
        }

        if (props.viewOnly) {
            setViewOnly(props.viewOnly)
        } else {
            setViewOnly(false)
        }


    }, [props]);





    return (

        <div className="card-container-active">

            {
                !viewOnly ? <div className="card-header">
                    <button>view profile</button>
                </div> : null
            }

            <Row>
                <Col span={12}>
                    {
                        data.image ? <ImageSmall image={data.image} status={data.status} /> : null
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
                    <Title title={data.Speniality} weight='header-4-dark' />
                    <div className="profile-Action">
                        <div>
                            <CalendarOutlined />
                        </div>
                        <div>
                            <UserOutlined />
                        </div>
                        <div>
                            <WechatOutlined />
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="additional-data-container">
                        <div className="additional-data">
                            <DataShow value={data.degree} lable='Degree' />
                            <DataShow value={data.Speciality} lable='Speciality' />
                            <DataShow value={data.Chamber} lable='Chamber' isOpesit={true} />
                        </div>

                        {
                            !viewOnly ?  <div onClick={openCreateAppoimentModel} className="booking-link"> <span><ArrowRightOutlined /></span>  <span>Booking Avialable Online</span> </div> : null
                        }
                       
                    </div>
                </Col>
            </Row>


        </div>



    );
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, { viewDoctor, openAppoimentModal })(ActiveCard);