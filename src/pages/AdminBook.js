import React from 'react'
import {Container, Button, Row, Col} from 'reactstrap'
import { CardAdmin, Footer } from '../components'

const AdminBook = () => {
  return (
    <Container
        fluid="sm"
    >
        <Row className='p-3' xs={1} sm={2} md={2}>
          <Col>
            <h2 className='text-black'>Admin Yudic Book's Store</h2>
          </Col>
          <Col className='text-end'>
            <Button className='m-1 border-0' style={{backgroundColor: '#FF6565'}}>Tambah Buku</Button>
            <Button className='border-0' style={{backgroundColor: '#FF6565'}}>Keluar</Button>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={3} className='mt-5 m-3 bg-light justify-content-center rounded pt-3 pb-4'>
            <CardAdmin />
            <CardAdmin />
            <CardAdmin />
            <CardAdmin />
            <CardAdmin />
            <CardAdmin />
        </Row>
        <Footer />
    </Container>
  )
}

export default AdminBook