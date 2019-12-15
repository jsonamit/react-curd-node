const bodyParser=require('body-parser');
const cors=require('cors');
const routes=require('../routes/index');

module.exports=(app)=>{
    app.use(bodyParser.json());
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    routes(app);
};
