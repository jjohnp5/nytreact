import React, {Component} from 'react';

export default (props) =>{
    return(
        <React.Fragment>
            {props.form}
            {props.results}
        </React.Fragment>
    )
}