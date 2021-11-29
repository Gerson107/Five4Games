import React from 'react';
import { Card, Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import './Product.css';
import { Button } from './Button';



function Product(props) {
    return (
        <>
        <Col className='card'>
            <Card className="Card" body outline color="primary">
                <CardTitle className='title'>
                    {props.titulo}
                </CardTitle>
                <CardImg className='img' src={props.imagen} />
                <CardBody>
                    <CardSubtitle className='price'>
                        Precio: <b>{props.precio}</b>
                    </CardSubtitle>
                    <CardText className='description'>
                        {props.descripcion}
                    </CardText>
                    <CardText className='stock'>
                        <b>Cantidad: </b>{props.stock}
                    </CardText>
                </CardBody>
                <Button
                    className='btns'
                    buttonStyle='btn--second'
                    buttonSize='btn--medium'
                    onClick={console.log('hey')}
                >
                    Comprar ahora
                </Button>

            </Card>

        </Col>

    
        </>

    )
}
export default Product;