import React from 'react'
import {Card, CardImg, CardTitle, CardBody, CardSubtitle, CardText, Badge} from 'reactstrap'
const CardUser = ({title, desc, author,harga,image}) => {
  return (
    <Card className='m-2 mt-4 p-3 border-0' style={{maxWidth: 320}}>
        <CardImg
            alt="Card image cap"
            src={image}
            top
            width="100%"
            height='280px'
            className="card-img"
        />
        <CardBody>
            <Badge color="light" className='mb-2' style={{color: '#FF6565'}}>
            {author}
        </Badge>
        <CardTitle tag="h5">
            {title}
        </CardTitle>
        <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
        >
            Rp. {harga}
        </CardSubtitle>
        <CardText>
            {desc}
        </CardText>
        </CardBody>
    </Card>
  )
}

export default CardUser