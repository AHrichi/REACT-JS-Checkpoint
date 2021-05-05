
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Carousel, Navbar, Nav, NavDropdown, Form, Button, Col, Container } from "react-bootstrap";



function App() {
  return (

    <div className="App">

      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Ahmed-Hrichi</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
      </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="my-5">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Hrichi St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
  </Button>
        </Form>
      </Container>
      <Container className="my-5">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://cdn.wallpapersafari.com/34/29/8NpjeV.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>1</h3>
              <p>ANIME</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://wallpapercave.com/wp/wp5277659.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>2</h3>
              <p>ANIME</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/f1/6f/ed/f16fedc86686146624897737cf4338d8.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>3</h3>
              <p>ANIME</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Card className="text-center mt-5"><Card.Footer className="text-muted"><h1>/|Think You|\</h1></Card.Footer></Card>
      

    </div>
  );
}

export default App;
