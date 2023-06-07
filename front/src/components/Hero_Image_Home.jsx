import Card from 'react-bootstrap/Card';

function ImageAndTextExample() {
    return (
        <>
            <Card>
              
                <h1 style={{ display: 'flex', alignItems: 'center',justifyContent: 'center',height: '110vh'}}>Introducing Big Trail</h1>
                
                <Card.Img variant="top" src="https://d2lljesbicak00.cloudfront.net/merida-v2/media-content-img-big//global/2022/product-news-updates/big-trail-my2022/22-product-news-bigtrail-my2022-product-sideview.jpg?p3" style={{height: '800px', margin: 'auto', display: 'block' }} />
                <Card.Body>
                    <Card.Text style={{ textAlign: 'justify', fontSize: 20, paddingLeft: '50px', paddingRight: '50px' }}>
                        Born out of conversations between a few UK bike shops and the Merida product managers at a launch event in Germany, the result was a fun-packed and hugely capable trail bike geometry combined with a long travel 140 mm fork and grippy 2.4" wide 29er trail tyres make this bike a perfect companion for exciting trail sessions and demanding all-day rides over rough terrain.
                        <br />
                        The Merida Big Trail has been a hit with the mountain bike press and trail riders alike. Bikeboard.cc confirmed that we 'nailed it', while MBR, IMB and many more confirmed that the Big Trail is firmly at the top of the trail hardtail game.
                    </Card.Text>
                </Card.Body>


                <h1 style={{ display: 'flex', alignItems: 'center',justifyContent: 'center',height: '110vh'}}>Features</h1>

            </Card>
        </>
    );
}

export default ImageAndTextExample;





