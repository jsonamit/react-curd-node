import React, { Component } from 'react';
import './User.css';
import Axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

class UserList extends Component {

    constructor(props,context) {
        super(props,context);
        
    // this.setShow = this.setShow.bind(this);
    this.setHide = this.setHide.bind(this);
    this.state = {
        user: [],
        edituser:[],
        show: false
        
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

    

    toggleEditUser() {
        console.log('toggleEditUser', this.state);
        
    }

    setShow(uid) {
        var id = {id:uid};
        this.setState({
          show:true
        });
        Axios.post('http://localhost:4000/api/getuserById',id).then(res => {
              this.setState(
                     { edituser: res.data.data[0] }
                  );
        });
        
    }
    setHide() {
         this.setState({
           show:false
         });
    }

    updateUser() {
        var user = {
            id: this.state.edituser._id,
            name: this.refs.name.value,
            product: this.refs.product.value,
            email: this.refs.email.value
        }
        Axios.post('http://localhost:4000/api/updateuser',user).then(res => {
            this.componentWillMount();
            this.setState({
                show:false
              });
        });
    }

    render() {

        let users = this.state.user.map((user) => {
            return <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.product}</td>
                <td>{user.email}</td>
                <td>
                    <button type="buttion" onClick={this.setShow.bind(this,user._id)} className="btn btn-success">Edit</button>&nbsp;&nbsp;
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

            
                <Modal
                    show={this.state.show}
                    onHide={this.setHide}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Edit User
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    
                    <form >
                       
                         <div className="form-group">
                             <input type="text" className="form-control" defaultValue={this.state.edituser.name}  ref="name" placeholder="name" id="pwd" />
                         </div>
                         <div className="form-group">
                             <input type="text" className="form-control" defaultValue={this.state.edituser.product} ref="product" placeholder="product"  id="prod" />
                         </div>
                         <div className="form-group">
                             <input type="email" className="form-control" defaultValue={this.state.edituser.email} ref="email" placeholder="email"  id="email" />
                         </div>
                         <button type="button" onClick={this.updateUser.bind(this)} className="btn btn-success">Submit</button>
                     </form>
                    </Modal.Body>
                </Modal>


            </div>


        )

    }



}

export default UserList;