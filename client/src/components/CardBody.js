import React, {Component} from 'react';


class CardBody extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="card-body">
                                <p>{this.props.snippet}</p>
                            </div>
        )
    }
}

export default CardBody;