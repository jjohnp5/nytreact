import React, { Component } from "react";

import "./App.css";
import Jumbotron from './components/Jumbotron';
import Nav from './components/Nav';
import NoMatch from './components/NoMatch';
import Articles from './pages/Articles';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedComponent from './components/SavedComponent';
import runNYTQuery from './utils/nytAPI';
import API from './utils/proxyAPI';

class App extends Component {

  state = {
    searched: [],
    saved: [],
    currentPage: "Home"
  }
  componentWillMount(){
    if(!localStorage.getItem('currentPage')){
      localStorage.setItem('currentPage', this.state.currentPage)
    }
    this.updateStateToLocal(localStorage.getItem('currentPage'));
    this.updateSavedStateFromDB();
  }
  updateStateToLocal = (page)=>{
    this.setState({currentPage: page})
  }

    updateCurrentPage = (page)=>{
      localStorage.setItem('currentPage', page)
      this.updateStateToLocal(localStorage.getItem('currentPage'))
    }

    handleSubmit = (term, beginYear, endYear) => {
      if(!beginYear){
          beginYear = 2018;
      }
      if(!endYear){
          endYear = 2018
      }
      runNYTQuery(term, beginYear, endYear).then(data=>{
          console.log(data.data)
          console.log(this.state);
        this.setState({...this.state, searched: data.data})
        console.log(this.state);
      }).catch(err=>{
        console.log(err);
      })
    }
    updateSavedStateFromDB = () => {
      API.getAllArticles().then(data=>{
        console.log(data);
        this.setState({saved: data.data})
        console.log(this.state);
      })
    }
    handleSave = (article)=>{

      API.saveArticle(article)
      .then(data=>{
        this.updateSavedStateFromDB();
      }).catch(err=>{
        console.log(err);
      })
      // this.setState({...this.state, saved: saved});

    }

  render() {
    return (
      
    <Router>
            <div className="container">
                <Jumbotron />
                <Nav currentPage={this.state.currentPage} updateCurrentPage={this.updateCurrentPage}/>
                <Switch>
                <Route exact path="/" render={(props)=>(
                  <Articles {...props} articles={this.state.searched} handleSubmit={this.handleSubmit} handleSave={this.handleSave} />
                )} />
                <Route exact path="/saved" render={(props)=>(
                  <SavedComponent {...props} saved={this.state.saved} />
                )}  />
                <Route component={NoMatch} />
                </Switch>
            </div>
            </Router>
    
    );
  }
}

export default App;
