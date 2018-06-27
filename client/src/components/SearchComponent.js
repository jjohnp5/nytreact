import React, {Component} from 'react';



class SearchComponent extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="row">
                {
                    this.props.articles.map(art=>{
                        return <div className="col-12" key={art._id}>
                            <h1>{art.headline.main}</h1>

                        </div>
                    })

                }
            </div>
        )
    }
}

export default SearchComponent;