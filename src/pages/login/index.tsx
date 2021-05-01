import { Button, Col, Divider, Input, Row, Space } from "antd";
import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export function Login() {

    const borderStyle = { border: '1px solid palevioletred' };
    const rowStyle = { ...borderStyle, width: '100%', padding: 10 };
    
    return (
        <div className="App">
        <Divider orientation="center" className="divider" style={{color: "white"}}>Sign In</Divider>
        <Row justify="space-between" style={rowStyle} >
          <Col lg={12}>
            <label className="Label">UserId: </label>
          </Col>
          <Col lg={12}>
            <Input placeholder="UserId" className="Label" />
          </Col>
        </Row>
        <Row justify="space-between" style={rowStyle}>
          <Col lg={12}>
            <label className="Label">Password: </label>
          </Col>
          <Col lg={12}>
            <Space direction="vertical">
              <Input.Password
                placeholder="input password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Space>
          </Col>
        </Row>
        <Button type="primary" shape="round" size="large" style={{margin: "10px"}}>
          Login
        </Button>
      </div>
    )
}