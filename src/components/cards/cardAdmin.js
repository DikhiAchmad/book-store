import React from 'react'
import {Card, CardImg, CardTitle, CardBody, CardSubtitle, CardText, Button, Badge} from 'reactstrap'

const CardAdmin = ({author, title, price, desc, img, onEdit, handleDelete}) => {
  
  return (
    <Card className='m-2 mt-4 p-3 border-0' style={{maxWidth: 320}}>
        <CardImg
            alt="Card image cap"
            src={img}
            top
            width="100%"
            height='280px'
            className="card-img"
        />
        <CardBody>
        <Badge color="light" className='mb-2 text-capitalize' style={{color: '#FF6565'}}>
            {author}
        </Badge>
        <CardTitle tag="h5" className='text-capitalize'>
            {title}
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
        >
            {price}
        </CardSubtitle>
        <CardText className='text-capitalize'>
            {desc}
        </CardText>
        <Button 
            className='border-0 w-100' 
            style={{backgroundColor: '#FF6565'}}
            onClick={onEdit}
        >Edit Buku</Button>
        <Button className='border-0 w-100 mt-2' style={{backgroundColor: '#FF6565'}}
            onClick={handleDelete}
        >Hapus Buku</Button>
        </CardBody>
    </Card>
  )
}

export default CardAdmin