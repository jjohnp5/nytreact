import React, {Component} from 'react';
import CardHeader from './CardHeader';



class SearchComponent extends Component {


    render(){
        return (
            
                    this.props.articles.map(art=>{
                        return (
                            
                        <div className="card results" key={art._id}>
                            <CardHeader web_url={art.web_url} headline={art.headline.main} byline={art.byline} />
                            <div className="card-body">
                                {new Date(art.pub_date).toDateString()}
                                <p>{art.snippet}</p>
                                <button className="btn btn-info" onClick={()=>{this.props.handleSave(art);}}>Save Article</button>
                            </div>
                            
                        </div>
                        )
                    })

          
            
        )
    }
}

export default SearchComponent;