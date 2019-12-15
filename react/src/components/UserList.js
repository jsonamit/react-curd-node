import React, { Component } from 'react';
import './User.css';
import Axios from 'axios';

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: [],
            edituser:true
        }

     }

   
    
    componentWillMount() {
        Axios.get('http://localhost:4000/api').then(res => {
            this.setState({ user: res.data.data });
        });
    }

    userDelete(id) {
        var id = { id: id }
        Axios.post('http://localhost:4000/api/deleteuser', id).then(res => {
            this.componentWillMount();
        });
    }

    userEdit(id) {
        this.setState({
            edituser : true
        })
        console.log('toggleEditUser',this.state);
        //var id = { id: id }
        // Axios.post('http://localhost:4000/api/getuserById',id).then(res => {
        //       this.componentWillMount();
        //   });
    }
    toggleEditUser() {
        console.log('toggleEditUser',this.state);
        this.setState({
            edituser : true
        });
    }

    render() {

        let users = this.state.user.map((user) => {
            return <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.product}</td>
                <td>{user.email}</td>
                <td>
                    <button type="buttion" onClick={this.userEdit.bind(this, user._id)} className="btn btn-success">Edit</button>&nbsp;&nbsp;
                    <button type="buttion" onClick={this.userDelete.bind(this, user._id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        });

        return (
             
            <div className="row mainrow">
                <div className="col-md-8 usrForm">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Product</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users}
                        </tbody>
                    </table>
                </div>
            </div>

        )

    }



}

export default UserList;