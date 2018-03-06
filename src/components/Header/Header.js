import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom'
import './Header.css';
import {sleep,conditionalRender} from '../../util/util';


class HEADER extends Component {
  state = {
    isOpen:false
  }
  toggle = async () =>  {
    await this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onClick = async (time = 1000) => {
    this.setState({onClickTriggered:true})
    await sleep(time)
    this.setState({isOpen:!this.state.isOpen})
  }


  renderDropDown = () => {
    const options =   <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Options
        </DropdownToggle>
        <DropdownMenu >
          <DropdownItem>
            Option 1
          </DropdownItem>
          <DropdownItem>
            Option 2
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            Reset
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>;
    return conditionalRender(this.props.dropdown,options )
  };


  render() {
    return (
      <div className='HEADER'>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">{this.props.logo}</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={() => this.onClick(this.props.toggleTime)}>{this.props.link1}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => this.onClick(this.props.toggleTime)}>{this.props.link2}</NavLink>
              </NavItem>
              {this.renderDropDown()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default HEADER;
