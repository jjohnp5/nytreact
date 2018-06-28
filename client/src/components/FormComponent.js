import React, {Component} from 'react';


class FormComponent extends Component {
 
      state = {
          start: 1970,
          end: 2000
      }
      onChange = (id, value) => {
          this.setState({[id]: value})
      }  

    render(){
        return (
            <div className="card ">
                <div className="card-header bg-info">
                    <h5 className="text-white"><i className="fa fa-list-alt"></i> Search Articles</h5>
                </div>
                <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="term">Keyword</label>
                        <input type="text" className="form-control" id="term" placeholder="Search Keyword" ref={(term) => {this.term = term;}} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="start">Year start: {this.state.start}</label>
                        <input type="range" min="1970" max={new Date().getFullYear()} className="form-control" id="start" placeholder="Start Year" value={this.state.start}
                            ref={(startYear) => {this.startYear = startYear}} 
                            onChange={()=>this.onChange("start", this.startYear.value)}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="end">Year End: {this.state.end}</label>
                        <input className="form-control" type="range" min="1970" max={new Date().getFullYear()} id="end" placeholder="End Year" value={this.state.end}
                            ref={(endYear) => {this.endYear = endYear}} 
                            onChange={()=>this.onChange("end", this.endYear.value)} 
                        />
                    </div>
                <button className="btn btn-success" type="submit" onClick={(e)=>{
                    e.preventDefault()
                    console.log(this.term)
                    this.props.handleSubmit(this.term.value, this.state.start, this.state.end)}}>Submit</button>
                </form>
                </div>
            </div>
        )
    }
}

export default FormComponent;