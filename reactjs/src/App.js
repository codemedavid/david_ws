
import './App.css';
import img1 from './images/img1.jpeg'
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FunctionalComponent from './components/FunctionalComponent';
import ClassBasedComponent from './components/ClassBasedComponent'
import {Button, Card, Container, Row, Col} from 'react-bootstrap'
function App(props) {
  let style = {
    background: 'red',
    color: 'blue'
  }
  const age = 16
 
    return (
    
      <div className='App'> 
        <Container className='bg-dark mt-5 pt-3 py-3'>
          <h1 className='text-white py-3'>Hello World</h1>
          <Row>
            <Col>
          <Card>
              <Card.Img variant='top' src={img1}/>

                <Card.Body>
                    <Card.Title>
                      New Meta
                    </Card.Title>
                    <Card.Text>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos fugit minima nam similique, sapiente nostrum at fuga doloremque animi, dolore vero facilis, error ipsam nesciunt aperiam. Quos, consequuntur nostrum!
                    </Card.Text>
                   <Button variant="primary">See More</Button>
                </Card.Body>
          </Card>
            </Col>

            <Col>
          <Card>
              <Card.Img variant='top' src={img1}/>

                <Card.Body>
                    <Card.Title>
                      New Meta
                    </Card.Title>
                    <Card.Text>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos fugit minima nam similique, sapiente nostrum at fuga doloremque animi, dolore vero facilis, error ipsam nesciunt aperiam. Quos, consequuntur nostrum!
                    </Card.Text>
                   <Button variant="primary">See More</Button>
                </Card.Body>
          </Card>
            </Col>


            <Col>
          <Card>
              <Card.Img variant='top' src={img1}/>

                <Card.Body>
                    <Card.Title>
                      New Meta
                    </Card.Title>
                    <Card.Text>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos fugit minima nam similique, sapiente nostrum at fuga doloremque animi, dolore vero facilis, error ipsam nesciunt aperiam. Quos, consequuntur nostrum!
                    </Card.Text>
                   <Button variant="primary">See More</Button>
                </Card.Body>
          </Card>
            </Col>

            <Col>
          <Card>
              <Card.Img variant='top' src={img1}/>

                <Card.Body>
                    <Card.Title>
                      New Meta
                    </Card.Title>
                    <Card.Text>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos fugit minima nam similique, sapiente nostrum at fuga doloremque animi, dolore vero facilis, error ipsam nesciunt aperiam. Quos, consequuntur nostrum!
                    </Card.Text>
                   <Button variant="primary">See More</Button>
                </Card.Body>
          </Card>
            </Col>
          </Row>


          <hr />
         
        </Container>
         < FunctionalComponent pets="Jude"> </FunctionalComponent>
         <ClassBasedComponent pets="adobo"></ClassBasedComponent>

        
         
        <h2 style={style}>Hello I'm {props.name}, age {age}</h2>
  
        <h1>{props.children}</h1>
        <h1>React Buttons</h1>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="info">Info</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
      </div>
      
    )

}
export default App;
