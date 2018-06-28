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
import io from 'socket.io-client';
const socket = io.connect('/', {forceNew: true});
class App extends Component {

  state = {
    searched: [],
    saved: [],
    currentPage: "Home",
    event: ''
  }
  componentWillMount() {

    if (!localStorage.getItem('currentPage')) {
      localStorage.setItem('currentPage', this.state.currentPage)
    }
    this.updateStateToLocal(localStorage.getItem('currentPage'));
    this.updateSavedStateFromDB();


  }
  componentDidMount() {
    socket.on('deleted', (data) => {
      this.updateSavedStateFromDB();
      this.setState({ event: data.deleted })
      
    })
  }
  updateStateToLocal = (page) => {
    this.setState({ currentPage: page })
  }

  updateCurrentPage = (page) => {
    localStorage.setItem('currentPage', page)
    this.updateStateToLocal(localStorage.getItem('currentPage'))
    this.setState({ event: '' })
    this.updateSavedStateFromDB();
  }

  handleSubmit = (term, beginYear, endYear) => {
    if (!beginYear) {
      beginYear = 2018;
    }
    if (!endYear) {
      endYear = 2018
    }
    runNYTQuery(term, beginYear, endYear).then(data => {
      this.setState({ ...this.state, searched: data.data })

    }).catch(err => {
      console.log(err);
    })
  }
  updateSavedStateFromDB = () => {
    API.getAllArticles().then(data => {
      console.log(data);
      this.setState({ saved: data.data })

    })
  }
  handleSave = (article) => {

    API.saveArticle(article)
      .then(data => {
        this.updateSavedStateFromDB();


      }).catch(err => {
        console.log(err);
      })
    // this.setState({...this.state, saved: saved});

  }
  handleDeleteArticle = (id) => {
    
    API.removeArticle(id).then(() => {

      socket.emit('delete', { deleted: `Article - ${id} has been deleted.` });
      this.updateSavedStateFromDB();
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    console.log(this.state);
    
  
    return (


      <Router>
        <div className="container">
          <Jumbotron />
          <Nav currentPage={this.state.currentPage} updateCurrentPage={this.updateCurrentPage} />
          {
            
            this.state.event ? <div className="alert alert-warning" id="event">{this.state.event}</div> : <div></div>
            
          }
          
          <Switch>
            <Route exact path="/" render={(props) => (
              <Articles {...props} articles={this.state} handleSubmit={this.handleSubmit} handleSave={this.handleSave} />
            )} />
            <Route exact path="/saved" render={(props) => (
              <SavedComponent {...props} saved={this.state} handleDeleteArticle={this.handleDeleteArticle} />
            )} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
