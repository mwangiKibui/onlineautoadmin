import React, { useState } from 'react';

//third-party
import {Card,CardContent,CardActions,IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {useDispatch} from 'react-redux';
import {ScaleLoader} from 'react-spinners';
import {Link} from 'react-router-dom';
//components
import url from '../../utils/url';
import {deleteBrand} from '../../store/brands';

const BrandCard = ({data}) => {

    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch();

    const removeBrand = name => {
        setLoading(true);
        dispatch(deleteBrand(name));
        setTimeout( () => {
            return setLoading(false);
        },1000);
    };

    return (
        <Card className="brand-card">
            <img 
            src={`${url}${data.logo}`}
            className="brand-card-logo"
            alt=""
            />
            <CardContent>
                <div className="brand-card-details">
                <Link to={`/brand/${data.name}`} className="brand-card-name">{data.name}</Link>
                </div>
                <CardActions className="brand-card-actions">
                    <IconButton onClick={ () => removeBrand(data.name)}>
                        <Delete />
                    </IconButton>
                    {
                        loading ? (
                            <IconButton>
                                <ScaleLoader color="#009933" width={2} height={15} margin={2} radius={2} />
                            </IconButton>
                        ) : null
                    }
                </CardActions>
            </CardContent>
        </Card>
    )
};

export default BrandCard;