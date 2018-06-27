import React, {Component} from 'react';


class Nav extends Component{

    
    render(){
        console.log(this.props.currentPage);
        return(
            <ul className="nav nav-tabs justify-content-center">
  <li className="nav-item">
    <a className={this.props.currentPage === 'Home' ? 'nav-link active' : 'nav-link'} href="/" onClick={()=>{this.props.updateCurrentPage('Home')}}>Home</a>
  </li>
  <li className="nav-item">
    <a className={this.props.currentPage === 'Saved' ? 'nav-link active' : 'nav-link'} href="/saved" onClick={()=>{this.props.updateCurrentPage('Saved')}}>Saved Articles</a>
  </li>
  
</ul>
        )
    }
}
export default Nav;