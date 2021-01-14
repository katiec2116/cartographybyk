import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import background from '../../pages/Home/KC.jpg'
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBFormInline,
    MDBBtn,
    MDBView,
    MDBContainer
  } from 'mdbreact';


  class Jumbotron extends React.Component {
    state = {
      collapsed: false
    };
  
    handleTogglerClick = () => {
      const { collapsed } = this.state;
  
      this.setState({
        collapsed: !collapsed
      });
    };
  
    componentDidMount() {
      document.querySelector('nav').style.height = '65px';
    }
  
    componentWillUnmount() {
      document.querySelector('nav').style.height = 'auto';
    }
  
    render() {
      const { collapsed } = this.state;
      const navStyle = { marginTop: '4rem' };
      const overlay = (
        <div
          id='sidenav-overlay'
          style={{ backgroundColor: 'transparent' }}
          onClick={this.handleTogglerClick}
        />
      );
    return (
        <div id='minimalistintro'>
        <Router>
          <div>
            <MDBNavbar
              color='primary-color'
            //   style={navStyle}
              dark
              expand='md'
              fixed='top'
              scrolling
              transparent
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className='white-text'>Cartography By K</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse  navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem >
                      <MDBNavLink to='#!'>Shop</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='#!'>Cart</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBFormInline waves>
                        <div className='md-form my-0'>
                          <input
                            className='form-control mr-sm-2'
                            type='text'
                            placeholder='Search'
                            aria-label='Search'
                          />
                        </div>
                      </MDBFormInline>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {collapsed && overlay}
          </div>
        </Router>
        <MDBView src={background}>
          <MDBMask className='rgba-black-strong' />
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '17rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                Cartography By K
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase mb-4 white-text '>
                  <strong>Maps & design</strong>
                </h5>
                {/* <MDBBtn outline color='white'>
                  portfolio
                </MDBBtn>
                <MDBBtn outline color='white'>
                  About me
                </MDBBtn> */}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    )
}}

export default Jumbotron
