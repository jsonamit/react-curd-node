import React, { Component } from 'react';
import './User.css';
import Axios from 'axios';


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
         name: '',
         product: '',
         email: ''
     }
     }
     
     componentWillMount() {
         
     }
 
     userFormData(e) {
 
         var user = {
             name: this.refs.name.value,
             product: this.refs.product.value,
             email: this.refs.email.value
         }
         console.log('user', user);
         Axios.post('http://localhost:4000/api/adduser',user).then(res => {
             this.componentWillMount();
             window.location.reload(false);
         });
     }
 
 
 
 
     render() {
 
         return (
         <div className="container">
             <div className="row mainrow">
                 <div className="col-md-6 usrForm">
                     <form >
                         <div className="form-group">
                             <input type="text" className="form-control" ref="name" placeholder="name" id="pwd" />
                         </div>
                         <div className="form-group">
                             <input type="text" className="form-control" ref="product" placeholder="product"  id="prod" />
                         </div>
                         <div className="form-group">
                             <input type="email" className="form-control" ref="email" placeholder="email"  id="email" />
                         </div>
                         <button type="button" onClick={this.userFormData.bind(this)} className="btn btn-success">Submit</button>
                     </form>
                 </div>
             </div>
 
 
         </div>
         )
 
 
 
     }
}

export default User;