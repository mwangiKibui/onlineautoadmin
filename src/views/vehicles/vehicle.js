import React,{Component} from 'react';

//third-party
import {connect} from 'react-redux';
import {ClipLoader} from 'react-spinners';
import {Link} from 'react-router-dom';
//components
import {fetchVehicle} from '../../store/vehicles';
import url from '../../utils/url';

class Vehicle extends Component {

    state = {
        loading:true,
        vehicle:{}
    };

    async componentDidMount(){
        await this.props.fetchVehicle(this.props.match.params.slug).catch(console.log);
    };

    componentDidUpdate(prevProps){
        if(this.props.vehicle !== prevProps.vehicle){
            this.setState({loading:false,vehicle:this.props.vehicle})
        }
    };

    render(){
    const {loading,vehicle} = this.state;
    return (
        <section className="dashboard-vehicle">
            <div className="row">
                {
                    loading ? (
                        <div className="col-12 col-sm-12 col-md-12 text-center">
                            <ClipLoader size={35} color="#009933" />
                        </div>
                    ) : (
                        <div className="col-12 col-sm-12 col-md-12">
                            <div className="dashboard-vehicle-content">

                                <div className="dashboard-vehicle-content-img">
                                    <img src={`${url}${vehicle.images[0]}`}
                                    className="dashboard-vehicle-img"
                                    alt=""
                                    />
                                </div>
                                <div className="dashboard-vehicle-content-details">
                                    <h5>
                                        Name : {vehicle['name']}
                                    </h5>
                                    <h5>
                                        Engine size : {vehicle['engine_size']}
                                    </h5>
                                    <h5>
                                        Brand :  {vehicle['brand']}
                                    </h5>
                                    <h5>
                                        Fuel :  {vehicle['fuel']}
                                    </h5>
                                    <h5>
                                        Model : {vehicle['model']}
                                    </h5>
                                    <h5>
                                        Number of seats : {vehicle['number_of_seats']}
                                    </h5>
                                    <h5>
                                        Price :  Kshs. {parseInt(vehicle['price']).toLocaleString()}
                                    </h5>
                                    <Link className="btn btn-success mt-2 mb-2" to="/vehicles">
                                        Back to vehicles
                                    </Link>
                                </div>

                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}
};

const mapToProps = state => ({
    vehicle:state.vehicles.vehicle
})
const dispatchToProps = {
    fetchVehicle
};
export default connect(mapToProps,dispatchToProps)(Vehicle);