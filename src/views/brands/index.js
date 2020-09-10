import React,{Component} from 'react';

//third-party
import {connect} from 'react-redux';
import {ClipLoader} from 'react-spinners';
import {Link} from 'react-router-dom';
//components
import {fetchBrands} from '../../store/brands';
import BrandCard from '../shared/brandcrd';

class Brands extends Component {

    state = {
        loading:true,
        brands:[]
    }

    async componentDidMount(){
        await this.props.fetchBrands().catch(console.log);
    };

    componentDidUpdate(prevProps){
        if(this.props.brands !== prevProps.brands){
            this.setState({brands:this.props.brands,loading:false});
        }
    }

    render(){
    const {loading,brands} = this.state;
    return (
        <section className="dashboard-brands">
            <div className="row">
                {
                    loading ? (
                        <div className="col-12 col-sm-12 col-md-12 text-center">
                            <ClipLoader color="#009933" size={35} />
                        </div>
                    ) : (
                        <>
                        {
                        brands.map((brand,index) => (
                            <div className="col-12 col-sm-3 col-md-3" key={index}>
                                <BrandCard data={brand} />
                            </div>
                        ))
                        }
                        <div className="col-12 col-sm-12 col-md-12 mt-3">
                        <Link to="/brands/add" className="btn btn-success">add brand</Link>
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
    brands:state.brands.brands
});
const dispatchToProps = {
    fetchBrands
}

export default connect(mapToProps,dispatchToProps)(Brands);