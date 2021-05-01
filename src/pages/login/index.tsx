import { Alert, Button, Col, Divider, Input, Row, Space } from "antd";
import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import AuthService from "../../services/auth.service";
import { useHistory } from "react-router";

export function Login(props : any) {

    const [emailId, setEmailId] = useState<string>();
    const [password, setPassword] = useState<string>();
    const history = useHistory();

    const borderStyle = { border: '1px solid palevioletred' };
    const rowStyle = { ...borderStyle, width: '100%', padding: 10 };

    const handleSubmitButton = async () => {
      // Validate ID and password from backend.
      AuthService.login(emailId, password).then(() => {
        <Alert message="Login Successfull" type="success" showIcon/>
        history.push('/loggedIn');
        window.location.reload();
      }, 
        (error: any) => { console.error(error) }
      )
    }
    
    return (
        <div className="App">
        <Divider orientation="center" className="divider" style={{color: "white"}}>Sign In</Divider>
        <Row justify="space-between" style={rowStyle} >
          <Col lg={12}>
            <label className="Label">EmailId: </label>
          </Col>
          <Col lg={12}>
            <Input placeholder="EmailId" className="Label" value={emailId} onChange={e => setEmailId(e.target.value)}/>
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
                value={password} onChange={e => setPassword(e.target.value)}
              />
            </Space>
          </Col>
        </Row>
        <Button type="primary" shape="round" size="large" style={{margin: "10px"}} onClick={handleSubmitButton}>
          Login
        </Button>
      </div>
    )
}