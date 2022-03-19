import React from 'react'
import {Card, CardImg, CardTitle, CardBody, CardSubtitle, CardText, Button} from 'reactstrap'
const CardAdmin = () => {
  return (
    <Card className='m-2 mt-4' style={{maxWidth: 320}}>
        <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
            height='280px'
            className="card-img"
        />
        <CardBody>
        <CardTitle tag="h5">
            Melangkah
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
        >
            Rp. 30.000
        </CardSubtitle>
        <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </CardText>
        <Button className='border-0 w-100' style={{backgroundColor: '#FF6565'}}>Edit Buku</Button>
        <Button className='border-0 w-100 mt-2' style={{backgroundColor: '#FF6565'}}>Hapus Buku</Button>
        </CardBody>
    </Card>
  )
}

export default CardAdmin