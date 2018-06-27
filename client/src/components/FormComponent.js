import React, {Component} from 'react';


class FormComponent extends Component {
    constructor(props){
        super(props);
    }

    

    render(){
        return (
            <div>
                <form>
                <input type="text" placeholder="Search Keyword" ref={(term) => {this.term = term;}} />
                <button type="submit" onClick={(e)=>{
                    e.preventDefault()
                    console.log(this.term)
                    this.props.handleSubmit(this.term.value)}}>Submit</button>
                </form>
            </div>
        )
    }
}

export default FormComponent;