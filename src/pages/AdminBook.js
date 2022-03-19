import React, {useEffect, useState} from 'react'
import {Container, Button, Row, Col, CardGroup, Input} from 'reactstrap'
import { CardAdmin, ModalPage, Footer } from '../components'
import './style.css'

const AdminBook = () => {
  const [books, setBooks] = useState(false)
  const [visibleNewBook, setVisibleNewBook] = useState(false)
  const [visibleEditBook, setVisibleEditBook] = useState(false)
  const [titleBook, setTitleBook] = useState('')
  const [deskripsiBook, setDeskrispsiBook] = useState('')
  const [author, setAuthor] = useState('')
  const [price, setPrice] = useState(0)
  const [link, setLink] = useState('')

  const handleModal = () => setVisibleNewBook(prev => !prev)
  const handleModalEdit = () => setVisibleEditBook(prev => !prev)
  
  const getDataBooks = () => {
    fetch('http://localhost:3000/books')
    .then(res => {
      return res.json()
    }).then(data => {
      setBooks(data)
    })
  }


  const deleteDataBook = (id) => {
    fetch(`http://localhost:3000/books/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      // let conf = window.confirm('Apakah anda yakin ingin menghapus buku ini?')
      // if(conf === true) {
      alert('Anda berhasil menghapus')
      // } 
      getDataBooks()
    })
  }


  const onNewBook = () => {
    const idq = books.length + 1
    
    const saveDataBook = {
      id: idq,
      title: titleBook,
      description: deskripsiBook,
      author: author,
      harga: price,
      url: link
    }

    fetch('http://localhost:3000/books', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(saveDataBook),
    })
    .then(response => response.json())
    .then(() => {
      alert('berhasil menambah buku')
      setVisibleNewBook(false)
      getDataBooks()
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  }

  useEffect(() => {
    getDataBooks()
  }, [])



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
            {
              books && books.map((item, index) => (
                <CardAdmin 
                  key={index}
                  author={item.author}
                  title={item.title}
                  price={item.price}
                  desc={item.description}
                  onEdit={() => setVisibleEditBook(true)}
                  handleDelete={() => deleteDataBook(item.id)}
                  img={item.url}
                />
              ))
            }
            
            
        </Row>
        <Footer />        
        <ModalPage 
          title="Tambah Buku"
          onHandleModal={handleModal}
          visible={visibleNewBook}
          onSave={onNewBook}
        >
          <Input 
            value={titleBook}
            onChange={(event) => setTitleBook(event.target.value)}
            className='input'
            type="text"
            color='#fff'
            placeholder='Judul Buku'
            style={{backgroundColor: '#FF6565', color: '#fff'}}
          />
          <div style={{height: 10}} />
          <Input
            value={deskripsiBook}
            onChange={(event) => setDeskrispsiBook(event.target.value)}
            className='input'
            type="text"
            color='#fff'
            placeholder='Deskripsi Buku'
            style={{backgroundColor: '#FF6565', color: '#fff'}}
          />
          <div style={{height: 10}} />
          <Input 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='input'
            type="text"
            color='#fff'
            placeholder='Author'
            style={{backgroundColor: '#FF6565', color: '#fff'}}
          />
          <div style={{height: 10}} />
          <Input 
            value={price}
            onChange={e => setPrice(e.target.value)}
            className='input'
            type="number"
            color='#fff'
            placeholder='Harga'
            style={{backgroundColor: '#FF6565', color: '#fff'}}
          />
          <div style={{height: 10}} />
          <Input 
            value={link}
            onChange={e => setLink(e.target.value)}
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