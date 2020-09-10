import React,{Component} from 'react';

//third-party
import {connect} from 'react-redux';
import {Alert} from '@material-ui/lab';
//components
import {addVehicle} from '../../store/vehicles';

class AddVehicle extends Component {

    state = {
        name:'',
        engine_size:'',
        brand:'',
        fuel:'',
        model:'',
        number_of_seats:'',
        price:'',
        img:'',
        error:'',
        message:'',
        action:'Add Vehicle'
    };
    componentDidUpdate(prevProps){
        if(this.props.message !== prevProps.message){
            this.setState({message:this.props.message});
        };
        if(this.props.error !== prevProps.error){
            this.setState({error:this.props.error});
        }
    }

    onChange = e => this.setState({ [e.target.name] : e.target.value });
    imgUpload = e => {

        let img = e.target.files[0];

        //we check the file type
        let accepted_types = ['image/jpg','image/jpeg','image/png','image/webp'];
        if(accepted_types.indexOf(img.type) < 0) {
            this.setState({error:'Only image files are accepted for logo'});
            return e.target.value = null;
        };

        //we check the size
        if(img.size > 5000000){
            this.setState({error:'Minimum 5mb for logo'});
            return e.target.value = null
        };

        this.setState({img});
        
    };
    onSubmit = async e => {
        e.preventDefault();
        this.setState({error:'',message:''});

        //validating data
        let {name,engine_size,brand,fuel,model,number_of_seats,price,img} = this.state;
        if(!name || !engine_size || !brand || !fuel || !model || !number_of_seats || !price || !img) return this.setState({
            error:'All fields are required'
        });
        let obj = {name,engine_size,brand,fuel,model,number_of_seats,price};
        let data = new FormData();
        for(const key of Object.keys(obj)){
            data.append(key,obj[key]);
        };
        data.append('images',img);

        //send the data to server
        this.setState({action:'Loading...'});
        await this.props.addVehicle(data).catch(console.log);
        if(this.props.error) return this.setState({action:'Add Vehicle'});
        return this.setState({
            name:'',engine_size:'',brand:'',fuel:'',model:'',number_of_seats:'',price:'',
            img:'',error:'',action:'Add Vehicle'
        });

    }

    render(){
        const {name,engine_size,brand,fuel,model,number_of_seats,price,action,error,message} = this.state;
        return (
            <div className="add-vehicle-form">
                <div className="add-vehicle-form-content">
                    <form onSubmit={this.onSubmit}>
                        {
                            error ? (
                                <div className="form-group">
                                    <Alert severity="error">{error}</Alert>
                                </div>
                            ) : null
                        }
                        {
                            message ? (
                                <div className="form-group">
                                    <Alert severity="success">{message}</Alert>
                                </div>
                            ) : null
                        }
                        <div className="form-group">
                            <label htmlFor="name">Name of vehicle</label>
                            <input type="text"
                            name="name"
                            value={name}
                            className="form-control"
                            onChange={this.onChange}
                            placeholder="name of vehicle"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="engine size">Engine size of vehicle</label>
                            <input type="text"
                            name="engine_size"
                            value={engine_size}
                            className="form-control"
                            onChange={this.onChange}
                            placeholder="engine size of vehicle"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="brand">Brand of vehicle</label>
                            <input type="text"
                            name="brand"
                            value={brand}
                            className="form-control"
                            onChange={this.onChange}
                            placeholder="brand of vehicle"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fuel">Fuel of vehicle</label>
                            <input type="text"
                            name="fuel"
                            value={fuel}
                            className="form-control"
                            onChange={this.onChange}
                            placeholder="fuel of vehicle"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="model">Model of vehicle</label>
                            <input type="text"
                            name="model"
                            value={model}
                            className="form-control"
                            onChange={this.onChange}
                            placeholder="model of vehicle"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Number of seats of vehicle</label>
                            <input type="text"
                            name="number_of_seats"
                            value={number_of_seats}
                            className="form-control"
                            onChange={this.onChange}
                            placeholder="number of seats of vehicle"
                            />
                        </div>
                        <>
                            <label htmlFor="price">Price of vehicle</label>
                            <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">KSHS</span>
                            </div>
                            <input type="number"
                            name="price"
                            value={price}
                            className="form-control"
                            onChange={this.onChange}
                            placeholder="price of vehicle"
                            />
                            </div>
                        </>
                        <div className="form-group">
                            <label htmlFor="image">Vehicle image</label>
                            <input type="file"
                            className="form-control"
                            onChange={this.imgUpload}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-success btn-block" value={action} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

const mapToProps = state => ({
    error:state.vehicles.error,
    message:state.vehicles.message
});

const dispatchToProps = {
    addVehicle
};

export default connect(mapToProps,dispatchToProps)(AddVehicle);