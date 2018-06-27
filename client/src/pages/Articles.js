import React, {Component} from 'react';
import FormComponent from '../components/FormComponent';
import SearchComponent from '../components/SearchComponent';
import runNYTQuery from '../utils/nytAPI';


class Article extends Component {
    constructor(props){
        super(props);
        this.state = {
            searched: [],
            saved: []
        }
    }
    handleSubmit = (term) => {
        runNYTQuery(term, '2008', '2018').then(data=>{
          this.setState({searched: data.data})
          console.log(this.state);
        }).catch(err=>{
          console.log(err);
        })
      }
    


    render(){
        return (
            <React.Fragment>


                <FormComponent handleSubmit={this.handleSubmit} />
                <SearchComponent articles={this.state.searched} />

            </React.Fragment>
        )
    }

}

export default Article