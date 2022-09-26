import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Location from './/Location.png'
import serviRenovation from './/serviRenovation.png'
import './service.css'


const Service = () => {


    return (
        <div className='servicontainer' >
            <h1>Nos services</h1>

            <div className="container text-center servicebox">
                <div className="row row-cols-2">
                    <div className="col">
                        <img src={Location} alt="" />
                        <p>Votres prochain chez vous avec les maisons  d'assurence de la place</p>

                        <Link to="/Contact">
                        <button>Besoin d'un service</button>

                        </Link>
                    
                    </div>
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                </div>
            </div>
            {/* <div className='servicontainer'>

            <Card  className='servicebox' style={{ width: '30rem'}} >
                <Card.Img variant="" src={Location} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={Location} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={Location} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={Location} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div> */}

            {/* <h1>Nos services</h1>
            {/* <h1>Nos services</h1>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 className='card-title'>Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                </div>
            </div> */}

            {/* <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="{ServiceImg1}" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div> */}

            {/* <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={Location} />
            <Card.Img variant="top" src={serviRenovation} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row> */}

        </div>
    );
};

export default Service;