import React, {Component} from 'react';
import request from 'superagent';


export default class App extends Component{
    constructor(){
        super();
        this.state = {
            users: []
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
    render(){
        var users = this.state.users.map((user, i) => {
            return <li key={i}>{user.nombre}</li>
        });
        return(
            <div>
                <h1>Consumiendo API express con React</h1>
                <ul>
                    {users}
                </ul>
            </div>
        )
    }
}
