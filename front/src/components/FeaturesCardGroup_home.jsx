import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
function GridExample() {
  return (

    <Container fluid style={{ padding: 0, overflowX: 'hidden'}}>
      <Row xs={1} md={2} className="g-2">

        <Col>
          <Card className='h-100'>
            <Card.Img variant="top" src="https://d2lljesbicak00.cloudfront.net/merida-v2/media-content-img-s//global/2022/product-news-updates/big-trail-my2022/22-product-news-bigtrail-my2022-components-08.jpg?p3" />
            <Card.Body>
              <Card.Title>Modern Trail Geometry</Card.Title>
              <Card.Text>
                A long reach, paired with a slack 65.5° head angle and a steep seat angle make our Big Trail a solid descender, even when the trail is littered with roots and rocks. The central seating position over the bottom bracket assists when climbing.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='h-100'>
            <Card.Img variant="top" src="https://d2lljesbicak00.cloudfront.net/merida-v2/media-content-img-s//global/2022/product-news-updates/big-trail-my2022/22-product-news-bigtrail-my2022-components-03.jpg?p3" />
            <Card.Body>
              <Card.Title>Internal Cable Routing</Card.Title>
              <Card.Text>
                Cables are routed through the frame, entering and exiting through smooth sockets. The bike looks neat and the cables are protected from moisture and dirt. Win-win!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='h-100'>
            <Card.Img variant="top" src="https://d2lljesbicak00.cloudfront.net/merida-v2/media-content-img-s//global/2022/product-news-updates/big-trail-my2022/22-product-news-bigtrail-my2022-components-04.jpg?p3" />
            <Card.Body>
              <Card.Title>Boost Technology</Card.Title>
              <Card.Text>
                The shallower axle standard of 110 mm (front) and 148 mm (rear) allows for a wider spoke angle, resulting in a stiffer and stronger wheel.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='h-100'>
            <Card.Img variant="top" src="https://d2lljesbicak00.cloudfront.net/merida-v2/media-content-img-s//global/2022/product-news-updates/big-trail-my2022/22-product-news-bigtrail-my2022-components-05.jpg?p3" />
            <Card.Body>
              <Card.Title>Tire Clearance</Card.Title>
              <Card.Text>
                Our Big Trail rolls on 29er wheels with tyre clearance so you can fit up to 2.5“ trail tyres.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='h-100'>
            <Card.Img variant="top" src="https://d2lljesbicak00.cloudfront.net/merida-v2/media-content-img-s//global/2022/product-news-updates/big-trail-my2022/22-product-news-bigtrail-my2022-components-06.jpg?p3" />
            <Card.Body>
              <Card.Title>Trail Mount</Card.Title>
              <Card.Text>
                Positioned underneath the top tube/seat tube junction, this ingenious fixing point makes fitting an additional tool or a pump a breeze.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='h-100'>
            <Card.Img variant="top" src="https://d2lljesbicak00.cloudfront.net/merida-v2/media-content-img-s//global/2022/product-news-updates/big-trail-my2022/22-product-news-bigtrail-my2022-components-09.jpg?p3" />
            <Card.Body>
              <Card.Title>SRAM UDH Hanger</Card.Title>
              <Card.Text>
                The SRAM UDH hanger is perfect when the going gets rough. Offering unparalleled derailleur protection; it rotates rearward in the event of an impact.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>


  );
}

export default GridExample;

