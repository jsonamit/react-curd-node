const mongoose =require('mongoose');
const users=require('../../models/userModel/user.model');
const Address=require('../../models/userModel/address.model');
const ObjectId = mongoose.Types.ObjectId;

module.exports.getuser = (req,res) => {
    var response={};
    try    {

        
            users.find({},(error,data)=>{
                if(error){
                    response.message= "failed";
                    response.status= 404;
                    res.send(response);
                }
                else
                {
                    response.message= "successfully";
                    response.status= 200;
                    response.data= data;
                    res.send(response);
                }
            });

    }
    catch(error)
    {
        response.message= "server error";
        response.status= 500;
        response.data= error;
        res.send(response);
    }

}
module.exports.adduser = (req,res) => {
    var response={};
    try    {
            

        if(req.body.name && req.body.product && req.body.email)
        {
            
            var user={name:req.body.name,product:req.body.product,email:req.body.email};
            users.create(user,(error,data)=>{
                if(error){
                    response.message= "Registration failed";
                    response.status= 404;
                    res.send(response);
                }
                else
                {
                    response.message= "user successfully added";
                    response.status= 200;
                    res.send(response);
                }
            });

        }
        else
        {
            response.message= "some data missing";
            response.status= 404;
            res.send(response);
        }
    }
    catch(error)
    {
        response.message= "server error";
        response.status= 500;
        response.data= error;
        res.send(response);
    }

}
module.exports.deleteuser = (req,res) => {
    var response={};
        if(req.body.id)
        {
            users.deleteOne({_id:req.body.id},(error,data)=>{
                if(error){
                    response.message= "failed";
                    response.status= 404;
                    res.send(response);
                }
                else
                {
                    response.message= "Deleted successfully";
                    response.status= 200;
                    res.send(response);
                }
            });

        }
        else
        {
            response.message= "some data missing";
            response.status= 404;
            res.send(response);
        }

}

module.exports.getuserById = (req,res) => {
    var response={};
        if(req.body.id)
        {
            users.find({_id:req.body.id},(error,data)=>{
                if(error){
                    response.message= "failed";
                    response.status= 404;
                    res.send(response);
                }
                else
                {
                    response.message= "successfully";
                    response.status= 200;
                    response.data= data; 
                    res.send(response);
                }
            });

        }
        else
        {
            response.message= "some data missing";
            response.status= 404;
            res.send(response);
        }
}

