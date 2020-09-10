import React,{Component} from 'react';

//third-party
import {connect} from 'react-redux';
import {ClipLoader} from 'react-spinners';
//components
import {fetchOrders} from '../../store/orders';
import OrderCard from '../shared/OrderCard';

class PurchasedOrders extends Component {
    state = {
        loading:true,
        orders:[]
    };

    async componentDidMount(){
        await this.props.fetchOrders().catch(console.log);
    };

    componentDidUpdate(prevProps){
        if(this.props.orders !== prevProps.orders){
            this.setState({orders:this.props.orders,loading:false});
        }
    };

    render(){
    const {loading,orders} = this.state;
    return (
        <section className="dashboard-orders">
            <div className="row">
            {
                loading ? (
                    <div className="col-12 col-sm-12 col-md-12 text-center">
                        <ClipLoader color="#009933" size={35} />
                    </div>
                ) : (
                    orders.length > 0 ? (
                        orders.map((order,index) => (
                            <div className="col-12 col-sm-6 col-md-6" key={index}>
                                <OrderCard data={order} /> 
                            </div>
                        ))
                    ) : (
                        <div className="col-12 col-sm-12 col-md-12">
                        <h5 className="text-center">
                            <b>
                                Sorry, we got no invoices yet!!
                            </b>
                        </h5>
                        </div>
                    )
                )
            }
            </div>
        </section>
    )
    }
};


const mapToProps = state => ({
    orders:state.orders.orders
});
const dispatchToProps = {
    fetchOrders
};
export default connect(mapToProps,dispatchToProps)(PurchasedOrders);