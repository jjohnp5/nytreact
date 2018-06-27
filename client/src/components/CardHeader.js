import React, {Component} from 'react';

class CardHeader extends Component{

    render(){
        return(
            <div className="card-header">
                <a href={this.props.web_url} target="_blank"><h2>{this.props.headline}</h2></a>
                <h4>{this.props.byline ? this.props.byline.original : "Public Subject"}</h4>

            </div>
        )
    }
}

export default CardHeader;