import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://en4jif3w7zq.exactdn.com/wp-content/uploads/2018/02/08123126/Merida-One-Sixty-800-1363.jpg'
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s14761.pcdn.co/wp-content/uploads/sites/2/2019/05/Merida-eOne-Sixty-eMTB-E-Mountainbike-Test-Review-2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.nextmedia.com.au/Galleries/Merida_OneSixty-0219.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;