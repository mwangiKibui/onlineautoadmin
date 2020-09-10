import React,{Component} from 'react';

//third-party
import {connect} from 'react-redux';
import {ClipLoader} from 'react-spinners';
import {Link} from 'react-router-dom';
//components
import {fetchBrand} from '../../store/brands';
import url from '../../utils/url';

class Brand extends Component {

    state = {
        loading:true,
        brand:{}
    };

    async componentDidMount(){
        await this.props.fetchBrand(this.props.match.params.brand).catch(console.log);
    };

    componentDidUpdate(prevProps){
        if(this.props.brand !== prevProps.brand){
            this.setState({loading:false,brand:this.props.brand})
        }
    };

    render(){
    const {loading,brand} = this.state;
    return (
        <section className="dashboard-brand">
            <div className="row">
                {
                    loading ? (
                        <div className="col-12 col-sm-12 col-md-12 text-center">
                            <ClipLoader size={35} color="#009933" />
                        </div>
                    ) : (
                        <div className="col-12 col-sm-12 col-md-12">
                            <div className="dashboard-brand-content">

                                <div className="dashboard-brand-content-img">
                                    <img src={`${url}${brand.logo}`}
                                    className="dashboard-logo-img"
                                    alt=""
                                    />
                                </div>
                                <div className="dashboard-brand-content-details">
                                    <h5>
                                        Name : {brand['name']}
                                    </h5>
                                    <h5>
                                        Url : {brand['url']}
                                    </h5>
                                    <Link className="btn btn-success mt-2 mb-2" to="/brands">
                                        Back to brands
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
    brand:state.brands.brand
})
const dispatchToProps = {
    fetchBrand
};
export default connect(mapToProps,dispatchToProps)(Brand);