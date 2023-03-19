import React, { useState } from 'react';
import { Title } from "../../elements/public/Title"
import { MakeTreatMent } from "./treatment/MakeTreatMent"
import  Filter  from "./filter/Filter"
import  DoctorList  from "./DoctorList"

import  AddAppoiment  from "../../layout/appoiment/AddAppoiment"
import { Col, Row } from 'antd';
function Doctor() {

  const title1 = 'Search Doctor, Make an Appoiment'
  const title2 = 'Discover the best doctors, clinic & hospital the city neatrest to you.'

  return (
    <>
      <div className='doctor-header'>
        <Title title={title1} weight='header-1' />
        <Title title={title2} weight='header-3' />
        <MakeTreatMent />
      </div>
      <div className='doctor-body'>
        <Row>
          <Col className='p1' xs={24} sm={24} md={24} lg={6} xl={6}>
            <Filter />
          </Col>
          <Col className='' xs={24} sm={24} md={24} lg={18} xl={18}>
            <DoctorList />
          </Col>

        </Row>
      </div>
      <AddAppoiment />

    </>
  );
}

export default Doctor;
