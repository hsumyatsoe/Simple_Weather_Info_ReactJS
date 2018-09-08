import React from 'react';

class Form extends React.Component{

    render(){

        return(
                <form onSubmit = {this.props.loadWeather}>
                    <input type="text" className="form-item" name="city" placeholder="City..."/>
                    <br/>
                    <input type="text" className="form-item" name="country" placeholder="Country..."/>
                    <br/>
                    <br/>
                    <button className="button1">Get Weather</button>
                </form>
           
        )
    }
}

export default Form;