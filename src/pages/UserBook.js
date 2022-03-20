import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Input, Button} from 'reactstrap';
import { CardUser, Footer, Navbars } from '../components';

const UserBook = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then((response) => response.json())
      .then((result) => setBooks(result))
      .catch((err) => console.log(err))
  },[]);
  
  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setSearch(lowerCase);
  };

  const filteredData = books.filter((el) => {
    if (search === '') {
        return el;
    }
    else {
        return el.title.toLowerCase().includes(search);
    }
  });

  return (
    <Container>
        <Navbars />
        <Row className='justify-content-center align-items-center'>
            <Col xs={8} md={8} lg={8} className="text-center">
             <h3 className='fw-bold my-5'>Yudic Book’s Store</h3>
             <form className='d-flex flex-row' action=''>
                <Input bsSize="sm" className='me-3 bg-light border-0 px-3 py-2' placeholder='Search book...' onChange={inputHandler} />
                <Button className='border-0 px-4 py-2' type='submit' style={{backgroundColor: '#FF6565'}}>search</Button>
             </form>
            </Col>
        </Row>
        <Row xs={1} md={2} lg={3} className='mt-5 m-3 bg-light justify-content-center rounded pt-3 pb-4'>
          {
            filteredData.map((book) => (
              <CardUser 
              key={book.id}
              title={book.title} 
              desc={book.description} 
              author={book.author} 
              harga={book.harga} 
              image={book.url} />
            )) 
          }
        </Row>
        <Footer />
    </Container>
  )
}

export default UserBook;
