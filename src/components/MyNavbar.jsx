
        
        import { Navbar, Nav, Container } from 'react-bootstrap';
        import 'bootstrap-icons/font/bootstrap-icons.css'; 
        const Mynavbar = () => {
          return (
            <Navbar bg="dark" variant="dark" expand="lg" style={{ backgroundColor: '#221f1f' }}>
              <Container fluid>
                <Navbar.Brand href="#">
                  <img
                    src="assets/logo.png"
                    alt="Logo"
                    style={{ width: '100px', height: '55px' }}
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                  <Nav className="me-auto mb-2 mb-lg-0">
                    <Nav.Link href="#" className="fw-bold active">
                      Home
                    </Nav.Link>
                    <Nav.Link href="#" className="fw-bold">
                      TV Shows
                    </Nav.Link>
                    <Nav.Link href="#" className="fw-bold">
                      Movies
                    </Nav.Link>
                    <Nav.Link href="#" className="fw-bold">
                      Recently Added
                    </Nav.Link>
                    <Nav.Link href="#" className="fw-bold">
                      My List
                    </Nav.Link>
                  </Nav>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-search icons me-3"></i>
                    <div id="kids" className="fw-bold me-3">
                      KIDS
                    </div>
                    <i className="bi bi-bell icons me-3"></i>
                    <i className="bi bi-person-circle icons"></i>
                  </div>
                </Navbar.Collapse>
                
              </Container>
            </Navbar>
            
          );
        };
        
        export default Mynavbar;
        



        