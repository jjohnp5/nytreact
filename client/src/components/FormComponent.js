import React, {Component} from 'react';


class FormComponent extends Component {
 
    

    render(){
        return (
            <div className="card ">
                <div className="card-header bg-info">
                    <h2 className="text-white"><strong><i className="fa fa-newspaper-o"></i></strong> Search Articles</h2>
                </div>
                <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="term">Keyword</label>
                        <input type="text" className="form-control" id="term" placeholder="Search Keyword" ref={(term) => {this.term = term;}} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="start">Year start: </label>
                        <input type="text" className="form-control" id="start" placeholder="Start Year" ref={(startYear) => {this.startYear = startYear}} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="end">Year End:</label>
                        <input className="form-control" type="text" id="end" placeholder="End Year" ref={(endYear) => {this.endYear = endYear}} />
                    </div>
                <button className="btn btn-success" type="submit" onClick={(e)=>{
                    e.preventDefault()
                    console.log(this.term)
                    this.props.handleSubmit(this.term.value, this.startYear.value, this.endYear.value)}}>Submit</button>
                </form>
                </div>
            </div>
        )
    }
}

export default FormComponent;