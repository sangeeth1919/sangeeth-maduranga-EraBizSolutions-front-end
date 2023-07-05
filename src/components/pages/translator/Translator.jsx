import React, { useState } from 'react';
import { Title } from "../../elements/public/Title"
import { Col, Card, Row, Button } from 'antd';
import { useNavigate,useLocation } from "react-router-dom";

function Translator() {

  const navigate = useNavigate();

  const moveTotranslate = (type) => {
    navigate('/translator-page');
  }


  return (
    <>
      <div className='doctor-header'>
        <Title title='Select template to translate' weight='header-1' />
      </div>

      <div className='body-container'>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="NIC" bordered={false}>
              <Row>
                <Col lg={12}>
                  Card content
                </Col>
                <Col lg={12}>
                  <div className='create-new-template'>
                    <Button type="primary" size="small" onClick={() => { moveTotranslate('NIC') }}>
                      create
                    </Button>
                  </div>

                </Col>
              </Row>

            </Card>
          </Col>
        </Row>
      </div>


    </>
  );
}

export default Translator;
