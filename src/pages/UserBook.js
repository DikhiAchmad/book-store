import React from 'react'
import { Container, Row, Col, Input, Button} from 'reactstrap';
import { CardUser, Footer, Navbars } from '../components';

const UserBook = () => {
  return (
    <Container>
        <Navbars />
        <Row className='justify-content-center align-items-center'>
            <Col xs={8} md={8} lg={8} className="text-center">
             <h3 className='fw-bold my-5'>Yudic Book’s Store</h3>
             <form className='d-flex flex-row' action=''>
                <Input bsSize="sm" className='me-3 bg-light border-0 px-3 py-2' placeholder='Search book...' />
                <Button className='border-0 px-4 py-2' type='submit' style={{backgroundColor: '#FF6565'}}>search</Button>
             </form>
            </Col>
        </Row>
        <Row xs={1} md={2} lg={3} className='mt-5 m-3 bg-light justify-content-center rounded pt-3 pb-4'>
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
        </Row>
        <Footer />
    </Container>
  )
}

export default UserBook;
