import React, {Component} from 'react';

class SavedComponent extends Component{

    getData = () =>{
        
    }
    render(){
        console.log(this.props)
        return (
            <React.Fragment>
                {this.props.saved.map(art=>{
                    return <h1>{art._id}</h1>
                })}
            </React.Fragment>
        )
    }
}

export default SavedComponent;