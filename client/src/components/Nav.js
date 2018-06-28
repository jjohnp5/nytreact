import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Nav extends Component{

    
    render(){
        console.log(this.props.currentPage);
        return(
            <ul className="nav nav-tabs justify-content-center">
  <li className="nav-item">
    <Link className={this.props.currentPage === 'Home' ? 'nav-link active' : 'nav-link'} to="/" onClick={()=>{this.props.updateCurrentPage('Home')}}>Home</Link>
  </li>
  <li className="nav-item">
    <Link className={this.props.currentPage === 'Saved' ? 'nav-link active' : 'nav-link'} to="/saved" onClick={()=>{this.props.updateCurrentPage('Saved')}}>Saved Articles</Link>
  </li>
  
</ul>
        )
    }
}
export default Nav;