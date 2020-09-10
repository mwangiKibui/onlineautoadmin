import React,{Component} from 'react';

//third-party
import {connect} from 'react-redux';
import {Alert} from '@material-ui/lab';
//components
import {addBrand} from '../../store/brands';

class AddBrand extends Component {

    state = {
        name:'',
        url:'',
        logo:'',
        error:'',
        message:'',
        action:'Add Brand'
    };

    componentDidUpdate(prevProps){
        if(this.props.message !== prevProps.message){
            this.setState({message:this.props.message});
        };
        if(this.props.error !== prevProps.error){
            this.setState({error:this.props.error})
        }
    };

    onChange = e => this.setState({ [e.target.name] : e.target.value});

    logoUpload = e => {

        let logo = e.target.files[0];

        //we check the file type
        let accepted_types = ['image/jpg','image/jpeg','image/png','image/webp'];
        if(accepted_types.indexOf(logo.type) < 0) {
            this.setState({error:'Only image files are accepted for logo'});
            return e.target.value = null;
        };

        //we check the size
        if(logo.size > 5000000){
            this.setState({error:'Minimum 5mb for logo'});
            return e.target.value = null
        };

        this.setState({logo});
        
    };

    onSubmit = async e => {
        e.preventDefault();
        this.setState({error:''});

        //validating data
        let {name,url,logo} = this.state;
        if(!name || !url || !logo) return this.setState({error:'All fields are required'});
        let data = new FormData();
        data.append('name',name);
        data.append('url',url);
        data.append('logo',logo);

        //sending data to server
        this.setState({action:'Loading....'});
        await this.props.addBrand(data).catch(console.log);
        if(this.props.error) return this.setState({action:'Add Brand'});
        return this.setState({
            name:'',url:'',logo:'',error:'',action:'Add Brand',message:this.props.message
        })

    }

    render(){
        const {name,url,error,message,action} = this.state;
        return (
            <div className="add-brand-form">
                <div className="add-brand-form-content">

                    <form onSubmit={this.onSubmit}>
                        {
                            error ? (
                                <div className="form-group">
                                    <Alert severity="error">{error}</Alert>
                                </div>
                            ) : null
                        }
                        {
                            message ? (
                                <div className="form-group">
                                    <Alert severity="success">{message}</Alert>
                                </div>
                            ) : null
                        }
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text"
                            className="form-control"
                            name="name"
                            value={name}
                            onChange={this.onChange}
                            placeholder="Name of brand" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="url">Url</label>
                            <input type="text"
                            className="form-control"
                            name="url"
                            value={url}
                            onChange={this.onChange}
                            placeholder="e.g /brands/name-of-the-brand" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="logo">Logo</label>
                            <input type="file"
                            onChange={this.logoUpload}
                            className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-success btn-block" value={action} />
                        </div>
                    </form>

                </div>
            </div>
        )
    }
};
const mapToProps = state => ({
    message:state.brands.message,
    error:state.brands.error
});
const dispatchToProps = {
    addBrand
}
export default connect(mapToProps,dispatchToProps)(AddBrand);