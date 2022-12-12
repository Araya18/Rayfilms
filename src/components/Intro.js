import { Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro'>
            <Container className='text-white text-center d-flex justify-content-center align-item-center'>
                <Row>
                    <Col>
                        <div className='title'>NONTON HEMAT</div>
                        <div className='title'>GAK PAKE TIKET</div>
                        <div className='introButton mt-4 text-center'>    
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro