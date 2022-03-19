import React from 'react'
import {Card, CardImg, CardTitle, CardBody, CardSubtitle, CardText, Badge} from 'reactstrap'
const CardUser = () => {
  return (
    <Card className='m-2 mt-4 p-3 border-0' style={{maxWidth: 320}}>
        <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
            height='280px'
            className="card-img"
        />
        <CardBody>
            <Badge color="light" className='mb-2' style={{color: '#FF6565'}}>
            Paijo
        </Badge>
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
        </CardBody>
    </Card>
  )
}

export default CardUser