import React from 'react';

const UserCard = ({users}) => {
    return (
        <div className="card">
            <img src="/images/no_of_users.webp"
            alt=""
            className="card-img-top card-img"
            />
            <div className="card-body">
                <h5 className="text-center card-body-number">
                    <b>{users}</b>
                </h5>
                <p className="card-body-text text-center">
                    <b>Number of active users</b>
                </p>
            </div>
        </div>
    )
};

export default UserCard;