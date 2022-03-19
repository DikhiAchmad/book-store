import React, {useState} from 'react'
import {Container, Button, Row, Col, CardGroup, Input} from 'reactstrap'
import { CardAdmin, ModalPage, Footer } from '../components'
import './style.css'

const AdminBook = () => {
  const [visibleNewBook, setVisibleNewBook] = useState(false)
  const [visibleEditBook, setVisibleEditBook] = useState(false)

  const handleModal = () => setVisibleNewBook(prev => !prev)
  const handleModalEdit = () => setVisibleEditBook(prev => !prev)

  return (
    <Container
        fluid="sm"
    >
        <Row className='p-3' xs={1} sm={2} md={2}>
          <Col>
            <h2 className='text-black'>Admin Yudic Book's Store</h2>
          </Col>
          <Col className='text-end'>
            <Button className='m-1 border-0' style={{backgroundColor: '#FF6565'}} onClick={() => setVisibleNewBook(true)}>Tambah Buku</Button>
            <Button className='border-0' style={{backgroundColor: '#FF6565'}}>Keluar</Button>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={3} className='mt-5 m-3 bg-light justify-content-center rounded pt-3 pb-4'>
            <CardAdmin 
              author="naupal"
              title="js page"
              price="90.000"
              desc="losdfsdfsdfdsf"
              onEdit={() => setVisibleEditBook(true)}
            />
            <CardAdmin 
              author="va"
              title="js page"
              price="90.000"
              desc="losdfsdfsdfdsf"
              onEdit={() => setVisibleEditBook(true)}
            />
            <CardAdmin 
              author="dikhi"
              title="js page"
              price="90.000"
              desc="losdfsdfsdfdsf"
              onEdit={() => setVisibleEditBook(true)}
            />
        </Row>
        <Footer />        
        <ModalPage 
          title="Tambah Buku"
          onHandleModal={handleModal}
          visible={visibleNewBook}
        >
          <Input 
            className='input'
            type="text"
            color='#fff'
            placeholder='Judul Buku'
            style={{backgroundColor: '#FF6565', color: '#fff'}}
          />
          <div style={{height: 10}} />
          <Input
            className='input'
            type="text"
            color='#fff'
            placeholder='Deskripsi Buku'
            style={{backgroundColor: '#FF6565', color: '#fff'}}
          />
          <div style={{height: 10}} />
          <Input 
            className='input'
            type="text"
            color='#fff'
            placeholder='Author'
            style={{backgroundColor: '#FF6565', color: '#fff'}}
          />
          <div style={{height: 10}} />
          <Input 
            className='input'
            type="number"
            color='#fff'
            placeholder='Harga'
            style={{backgroundColor: '#FF6565', color: '#fff'}}
          />
          <div style={{height: 10}} />
          <Input 
            className='input'
            type="text"
            color='#fff'
            placeholder='Link'
            style={{backgroundColor: '#FF6565', color: '#fff'}}
          />
        </ModalPage>
        <ModalPage 
          title="Edit Buku"
          onHandleModal={handleModalEdit}
          visible={visibleEditBook}
        >
          <Input 
            className='input'
            type="text"
            color='#fff'
            placeholder='Judul Buku'
            style={{backgroundColor: '#FF6565', color: '#fff'}}
          />
          <div style={{height: 10}} />
          <Input
            className='input'
            type="text"
            color='#fff'
            placeholder='Deskripsi Buku'
            style={{backgroundColor: '#FF6565', color: '#fff'}}
          />
          <div style={{height: 10}} />
          <Input 
            className='input'
            type="text"
            color='#fff'
            placeholder='Author'
            style={{backgroundColor: '#FF6565', color: '#fff'}}
          />
          <div style={{height: 10}} />
          <Input 
            className='input'
            type="number"
            color='#fff'
            placeholder='Harga'
            style={{backgroundColor: '#FF6565', color: '#fff'}}
          />
          <div style={{height: 10}} />
          <Input 
            className='input'
            type="text"
            color='#fff'
            placeholder='Link'
            style={{backgroundColor: '#FF6565', color: '#fff'}}
          />
        </ModalPage>
    </Container>
  )
}

export default AdminBook