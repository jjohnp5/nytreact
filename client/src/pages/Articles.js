import React, {Component} from 'react';
import FormComponent from '../components/FormComponent';
import SearchComponent from '../components/SearchComponent';


class Article extends Component {

        
    


    render(){
        return (
            <React.Fragment>
            <FormComponent  handleSubmit={this.props.handleSubmit} />
            <SearchComponent articles={this.props.articles} handleSave={this.props.handleSave} />
            </React.Fragment>
        )
    }

}

export default Article