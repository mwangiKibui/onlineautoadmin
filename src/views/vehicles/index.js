import React,{Component} from 'react';

//third-party
import {connect} from 'react-redux';
import {ClipLoader} from 'react-spinners';
import {Link} from 'react-router-dom';
//components
import {fetchVehicles} from '../../store/vehicles';
import VehicleCard from '../shared/vehiclecrd';

class Vehicles extends Component {
    state = {
        loading:true,
        vehicles:[]
    };

    async componentDidMount(){
        await this.props.fetchVehicles().catch(console.log);
    };

    componentDidUpdate(prevProps){
        if(this.props.vehicles !== prevProps.vehicles){
            this.setState({vehicles:this.props.vehicles,loading:false});
        }
    };

    render(){
    const {loading,vehicles} = this.state;
    return (
        <section className="dashboard-vehicles">
            <div className="row">
            {
                loading ? (
                    <div className="col-12 col-sm-12 col-md-12 text-center">
                        <ClipLoader color="#009933" size={35} />
                    </div>
                ) : (
                    <>
                    {
                        vehicles.map((vehicle,index) => (
                            <div className="col-12 col-sm-3 col-md-3" key={index}>
                                <VehicleCard data={vehicle} />
                            </div>
                        ))
                    }
                    <div className="col-12 col-sm-12 col-md-12 mb-2">
                        <Link to="/vehicles/add" className="btn btn-success">add vehicle</Link>
                    </div>
                    </>
                )
            }
            </div>
        </section>
    )
    }
};


const mapToProps = state => ({
    vehicles:state.vehicles.vehicles
});
const dispatchToProps = {
    fetchVehicles
};
export default connect(mapToProps,dispatchToProps)(Vehicles);