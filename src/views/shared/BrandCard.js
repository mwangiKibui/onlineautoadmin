import React from 'react';

const BrandCard = ({brands}) => {
    return (
        <div className="card">
            <img src="/images/no_of_brands.webp"
            alt=""
            className="card-img-top card-img"
            />
            <div className="card-body">
                <h5 className="text-center card-body-number">
                    <b>{brands}</b>
                </h5>
                <p className="card-body-text text-center">                    
                    <b>Number of brands</b>
                </p>
            </div>
        </div>
    )
};

export default BrandCard;