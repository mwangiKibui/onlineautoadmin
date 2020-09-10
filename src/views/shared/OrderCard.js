import React,{useState} from 'react';

//third-party
import {Card,CardContent,CardMedia} from '@material-ui/core';
//components
import url from '../../utils/url';

const OrderCard  = ({data}) => {

    const [loaded,setLoaded] = useState(false);

    return (
        <div className="order-card">
            <Card className="order-card-root">
                <CardMedia className="order-card-cover">
                    <div className="order-card-cover-preloader" style={{display:loaded ? 'none' : 'block'}} />
                    <img
                    onLoad={ () => setLoaded(true)}
                    style={{display:loaded ? 'block' : 'none'}}
                    src={`${url}${data.vehicle.images[0]}`}
                    className="order-card-cover-img"
                    alt=""
                    />
                </CardMedia>
                <div className="order-card-details">
                    <CardContent>
                        <h4 className="order-card-vehicle-name">{data.vehicle.name}</h4>
                        <h5 className="order-card-buyer">
                            Purchased By {data.user.name}
                        </h5>
                        <p className="order-card-text">
                            On {new Date(data.createdAt).toLocaleDateString()}
                        </p>
                        <a href={`${url}${data.invoice}`}  className="btn btn-success">
                            view invoice
                        </a>
                    </CardContent>
                </div>
            </Card>
        </div>
    )
};

export default OrderCard;