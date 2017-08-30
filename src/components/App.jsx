import React, {Component} from 'react';
import request from 'superagent';
import { Button, Modal} from 'antd';


export default class App extends Component{
    constructor(){
        super();
        this.state = {
            users: [],
            visible: false
        }
    }
    componentDidMount(){
        request
            .get('http://localhost:3000/api/users/')
            .end((err, res) => {
                console.log(JSON.parse(res.text))
                const users = JSON.parse(res.text).users;
                this.setState({
                    users: users
                })
            });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
        visible: false,
        });
    } 
    showModal = () => {
        this.setState({
        visible: true,
        });
    }
    
    handleCancel = (e) => {
        console.log(e);
        this.setState({
        visible: false,
        });
    }

    render(){
        var users = this.state.users.map((user, i) => {
            return <li key={i}>{user.nombre}</li>
        });
        return(
            <div>
                <Button type="primary" onClick={this.showModal}>Abrir alv</Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}
