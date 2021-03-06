import React, {Component} from 'react';

class SavedComponent extends Component{

    
    render(){
        console.log(this.props)
        return (
            <React.Fragment>
                {this.props.saved.saved.map((art,i)=>{
                    return (
                        <div className="card results" key={i}>
                            <div className="card-header bg-secondary">
                            <h1 className="text-info"><strong>{art.title}</strong></h1>
                            <p className="text-white-50">{new Date(art.date).toDateString()}</p>
                            </div>
                            <div className="card-body bg-light" >
                            <h5>{art.author}</h5>
                            <p>{art.snippet}</p>
                            <a href={art.web_url}><button className="btn btn-info">Go to Article</button></a>
                            <button className="btn btn-danger" onClick={()=>{this.props.handleDeleteArticle(art._id)}}>Delete Article</button>
                            </div>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default SavedComponent;