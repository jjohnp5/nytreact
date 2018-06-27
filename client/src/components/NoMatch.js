import React, {Component} from 'react';

class NoMatch extends Component{

    render(){
        return (
            <div>
                <h1>How did you get here? This page does not exist.</h1>
                <p>404 NOT FOUND</p>

                Click <a href="/">here</a> to go back to home page.
                
            </div>
        )
    }

}

export default NoMatch;