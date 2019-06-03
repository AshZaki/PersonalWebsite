import React, {Component, Fragment} from 'react'
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends Component {

   
    render(){
        return (
            <Fragment>
                <Navbar bg="light">
                    <Navbar.Brand>Ashley Zaki</Navbar.Brand>
                </Navbar>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav>
                
               
            </Fragment>
        )
    }
}

export default NavBar;