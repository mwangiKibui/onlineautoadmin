import React,{useState} from 'react';

//third-party
import {Card,CardContent,CardActions,IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import {ScaleLoader} from 'react-spinners';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
//components
import url from '../../utils/url';
import {deleteVehicle} from '../../store/vehicles';

const VehicleCard = ({data}) => {

    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch();

    const removeVehicle = slug => {
        setLoading(true);
        dispatch(deleteVehicle(slug));
        setTimeout( () => {
            return setLoading(false);
        },1000);
    };

    return (
        <Card className="vehicle-card">
            <img 
            src={`${url}${data.images[0]}`}
            className="vehicle-card-img"
            alt=""
            />
            <CardContent>
                <div className="vehicle-card-details">
                <Link to={`/vehicle/${data.slug}`} className="vehicle-card-name">{data.name}</Link>
                </div>
                <CardActions className="vehicle-card-actions">
                    <IconButton onClick={ () => removeVehicle(data.slug)}>
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

export default VehicleCard;