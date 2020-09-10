import React from 'react';

const VehicleCard = ({vehicles}) => {
    return (
        <div className="card">
            <img src="/images/no_of_vehicles.webp"
            alt=""
            className="card-img-top card-img"
            />
            <div className="card-body">
                <h5 className="text-center card-body-number">
                    <b>{vehicles}</b>
                </h5>
                <p className="card-body-text text-center">
                    <b>Number of vehicles</b>
                </p>
            </div>
        </div>
    )
};

export default VehicleCard;