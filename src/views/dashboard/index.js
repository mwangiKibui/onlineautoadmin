import React,{Component} from 'react';
//third-party
import {connect} from 'react-redux';
import {ClipLoader} from 'react-spinners';
//components
import {fetchGenerals} from '../../store/general';
import BrandCard from '../shared/BrandCard';
import UserCard from '../shared/UserCard';
import VehicleCard from '../shared/VehicleCard';

class Dashboard extends Component {

    state = {
        loading:true,
        data:{}
    };

    async componentDidMount(){
        await this.props.fetchGenerals().catch(console.log);
    };

    componentDidUpdate(prevProps){
        if(this.props.data !== prevProps.data){
            this.setState({data:this.props.data,loading:false});
        }
    }

    render(){
    const {loading,data} = this.state;
    return (
        <section className="dashboard-data">
            <div className="row">
                {
                    loading ? (
                        <div className="col-12 col-md-12 col-sm-12 text-center">
                            <ClipLoader color="#009933" size={35} />
                        </div>
                    ) : (
                        <>
                        <div className="col-12 col-sm-4 col-md-4">
                            <UserCard users={data.users} />
                        </div>
                        <div className="col-12 col-sm-4 col-md-4">
                            <VehicleCard vehicles={data.vehicles} />
                        </div>
                        <div className="col-12 col-sm-4 col-md-4">
                            <BrandCard brands={data.brands} />
                        </div>
                        </>
                    )
                }
            </div>
        </section>
    );

    }
};

const mapToProps = state => ({
    data:state.general.data
});
const dispatchToProps = {
    fetchGenerals
}

export default connect(mapToProps,dispatchToProps)(Dashboard);