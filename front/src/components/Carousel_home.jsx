import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel style={{height: '700px'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://d2lljesbicak00.cloudfront.net/merida-v2/media-bg-img//global/2021/product-news/ninety-six/21-product-news-ninety-six-rc-my2021-gallery-05.jpg?p3'
          alt="First slide"
          style={{ objectFit: 'cover', height: '100%' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s14761.pcdn.co/wp-content/uploads/sites/2/2019/05/Merida-eOne-Sixty-eMTB-E-Mountainbike-Test-Review-2.jpg"
          alt="Second slide"
          style={{ objectFit: 'cover', height: '100%' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.nextmedia.com.au/Galleries/Merida_OneSixty-0219.jpg"
          alt="Third slide"
          style={{ objectFit: 'cover', height: '100%' }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;