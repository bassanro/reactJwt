import { Button, Col, Divider, Input, Row, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { authenticationService } from "../../services/auth.service";


export function Register() {

  const [userName, setuserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [, setMessage] = useState<string|undefined>();
  const history = useHistory();

    const borderStyle = { border: '1px solid palevioletred' };
    const rowStyle = { ...borderStyle, width: '100%', padding: 10 };

    
    const handleSubmitButton = async () => {
      authenticationService.register(userName, password).then((response : any)  => {
        setMessage(response.data.message)
        history.push('/login');
        window.location.reload();
      }, 
        (error: any) => { console.error(error) }
      )
    }
    
    return (
        <div className="App">
        <Divider orientation="center" className="divider" style={{color: "white"}}>Register</Divider>
        <Row justify="space-between" style={rowStyle} >
          <Col lg={12}>
            <label className="Label">userName Id </label>
          </Col>
          <Col lg={12}>
            <Input placeholder="userName" className="Label" value={userName} onChange={e => setuserName(e.target.value)}/>
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