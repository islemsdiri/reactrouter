import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import logo from './logo.jpg';
export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing>
         <Link to="/Home">
         
            <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          />
           </Link> 
            <Link to="/TourList">
          
          <Menu.Item
            name='Our Tours'
            active={activeItem === 'Our Tours'}
            onClick={this.handleItemClick}
          />
          </Link>
          <Link to="/AddForm">
         
          <Menu.Item
            name='Add New Tour'
            active={activeItem === 'Add New Tour'}
            onClick={this.handleItemClick}
          />
          </Link> 
          <Menu.Menu position='right'>
          
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
           
          </Menu.Menu> 
        </Menu>

        <Segment>
          <img src={logo} />
        </Segment>
      </div>
    )
  }
}