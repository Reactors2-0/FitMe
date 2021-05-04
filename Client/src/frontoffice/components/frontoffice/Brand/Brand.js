import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
const Brand = ({ brand }) => {
    return (
        <Card className="my-3 p-3 rounded  animate__animated animate__fadeInUp" style={{backgroundColor: brand.color}}>
            <Link to={`/brand/${brand._id}`}>
                <Card.Img src={brand.brandImage} variant="top" />
            </Link>
            <Card.Body>
                <Link to={`/brand/${brand._id}`}>
                    <Card.Title as="div">
                        <strong>{brand.brandName}</strong>
                    </Card.Title>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Brand;
