import {
    Card,
    CardBody,
    CardTitle,
    Col,
    Label,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    Table,
    TabPane
} from "reactstrap";
import classnames from "classnames";
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings";
import Reviews from "../Products/Reviews";
import React, {useEffect, useState} from "react";
import {Input} from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {useDispatch, useSelector} from "react-redux";
import * as productAction from "../../../actions/productAction";
import { SketchPicker } from 'react-color';
import Form from "react-bootstrap/Form";
import {push} from "echarts/src/component/dataZoom/history";
import Dropzone from "react-dropzone";

export default function ProductUpdateComponent (props){
    const [activeTab,setActiveTab] =useState("1")
    const {product,toUpdate,handelUpdateFn} = props
    const [productInfo,setProductInfo] =useState(product)
    const [addColor,setAddColor] =useState(false)
    const [colortoAdd,setColortoAdd] =useState("transparent")
    const [selectedFiles,setSelectedFiles]= useState([])
    const toggleTab =(tab)=> {
        if (activeTab !== tab) {
            setActiveTab(tab)
        }
    }

    useEffect(() => {
        return function cleanup () {
            if(productInfo!==product) {
                setProductInfo(productInfo)

                handelUpdateFn(productInfo,productInfo._id)

            }
        }
    },[productInfo])
    const handelColorChange = (val) => {
        setColortoAdd(val.hex);
        setAddColor(false)
        // setProductInfo({...productInfo,color:productInfo.color.push({_id:"",color:`${val.hex}`,label : "",value: ""})})

        productInfo.color.push({color:`${val.hex}`,label : "",value: ""})
        setProductInfo(productInfo)
    console.log(productInfo.color)
    };
    const imageShow=(img, id)=> {
        const expandImg = document.getElementById("expandedImg" + id)
        expandImg.src = img
    }


    return(

        <Row>
            <Col>
                <Card>
                    <CardBody>
                        <Row>
                            <Col xl="6">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-3 h4">Product Images</CardTitle>
                                        <Form className="dropzone">
                                            <Dropzone
                                                onDrop={acceptedFiles =>
                                                    this.handleAcceptedFiles(acceptedFiles)
                                                }
                                            >
                                                {({ getRootProps, getInputProps }) => (
                                                    <div>
                                                        <div
                                                            className="dz-message needsclick"
                                                            {...getRootProps()}
                                                        >
                                                            <input {...getInputProps()} />
                                                            <div className="dz-message needsclick">
                                                                <div className="mb-3">
                                                                    <i className="display-4 text-muted bx bxs-cloud-upload" />
                                                                </div>
                                                                <h4>Drop files here or click to upload.</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </Dropzone>
                                            <div
                                                className="dropzone-previews mt-3"
                                                id="file-previews"
                                            >
                                                {selectedFiles.map((f, i) => {
                                                    return (
                                                        <Card
                                                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                            key={i + "-file"}
                                                        >
                                                            <div className="p-2">
                                                                <Row className="align-items-center">
                                                                    <Col className="col-auto">
                                                                        <img
                                                                            data-dz-thumbnail=""
                                                                            height="80"
                                                                            className="avatar-sm rounded bg-light"
                                                                            alt={f.name}
                                                                            src={f.preview}
                                                                        />
                                                                    </Col>
                                                                    <Col>
                                                                        <Link
                                                                            to="#"
                                                                            className="text-muted font-weight-bold"
                                                                        >
                                                                            {f.name}
                                                                        </Link>
                                                                        <p className="mb-0">
                                                                            <strong>{f.formattedSize}</strong>
                                                                        </p>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </Card>
                                                    )
                                                })}
                                            </div>
                                        </Form>
                                    </CardBody>
                                </Card>

                            </Col>

                            <Col xl="6">
                                <div className="mt-4 mt-xl-3 d-flex flex-column">
                                    <div >
                                        <Label className="mr-3">Name: &nbsp;&nbsp;</Label>
                                        <Input
                                            name="name"
                                            className="mt-1 mb-3  w-25"
                                            value={productInfo.name}
                                            onChange={(e)=> {
                                                setProductInfo({...productInfo,name:e.target.value});
                                            }}
                                        />

                                    </div>
                                    <div>
                                        <label className="mr-3">OFF % : &nbsp;&nbsp;</label>

                                        {productInfo.isDiscounted && (
                                            <Input
                                                style={{width : 50}}

                                                className="mt-1 mb-3 "
                                                value={productInfo.discount}

                                                type="number"
                                                onChange={(e)=> {
                                                    setProductInfo({...productInfo,discount:e.target.value});
                                                }}
                                            />
                                        )}
                                        <input
                                            id="isDiscount"
                                            name="isDiscount"
                                            type="checkbox"

                                            value={!productInfo.isDiscounted}
                                            onChange={(e)=> {
                                                setProductInfo({...productInfo,isDiscounted: !productInfo.isDiscounted});
                                            }}

                                        />
                                        {/*TODO :checked to do*/}
                                    </div>
                                    <h5 className="mb-4">
                                        Price :{" "}
                                        <span className="text-muted me-2">
                                <del>   <Input
                                    className="mt-1 mb-3"
                                    style={{width : 50}}
                                    value={productInfo.price}
                                    type="number"
                                    onChange={(e)=> {
                                        setProductInfo({...productInfo,price:e.target.value});
                                    }}
                                    placeholder="Price (TND)"
                                /> TND</del>
                              </span>{" "}
                                        <b>{productInfo.price-((productInfo.price*productInfo.discount)/100)} TND</b>
                                    </h5>
                                    <Label className="text-muted mb-4">
                                        Description :
                                    </Label>
                                    <TextareaAutosize
                                        aria-label="empty textarea"
                                        className="mt-1 mb-4"
                                        value={productInfo.description}
                                        style={{width: 400,height : 100}}
                                        onChange={(e)=> {
                                            setProductInfo({...productInfo,description:e.target.value});
                                        }}
                                        placeholder="Description.."
                                    />
                                    <Row className="mb-3">
                                        <Col md="6">
                                            {productInfo.features &&
                                            productInfo.features.map((item, i) => (
                                                <div key={i}>
                                                    <p className="text-muted">
                                                        <i
                                                            className={classnames(
                                                                item.icon,
                                                                " font-size-16 align-middle text-primary me-2"
                                                            )}
                                                        />
                                                        {item.type && `${item.type}: `}
                                                        {item.value}
                                                    </p>
                                                </div>
                                            ))}
                                        </Col>
                                        <Col md="6">
                                            {productInfo.features &&
                                            productInfo.features.map((item, i) => (
                                                <div key={i}>
                                                    <p className="text-muted">
                                                        <i
                                                            className={classnames(
                                                                item.icon,
                                                                " font-size-16 align-middle text-primary me-2"
                                                            )}
                                                        />
                                                        {item.type && `${item.type}:`}
                                                        {item.value}
                                                    </p>
                                                </div>
                                            ))}
                                        </Col>
                                    </Row>

                                    <div className="product-color">
                                        <h5 className="font-size-15">Color :</h5>
                                        {productInfo.color &&
                                        productInfo.color.map((option, key) => (
                                            <button key={key}
                                                    onClick={(e)=> {
                                                        setProductInfo({...productInfo,color:productInfo.color.filter((val)=>{
                                                                return val.color !== option.color})
                                                        });
                                                    }}
                                                    className="product-color-item border rounded mx-1" style={{backgroundColor : option.color,width : 40,height :40}} >
                                                <h5 style={{color:"white"}}>-</h5>
                                            </button>
                                        ))}
                                        <button

                                            onClick={(e)=> {
                                                setAddColor(!addColor)
                                                handelColorChange
                                            }}
                                            className="product-color-item border-1 rounded mx-1" style={{backgroundColor : colortoAdd,width : 40,height :40}} >
                                            <h5 style={{color:"black"}}>+</h5>
                                        </button>
                                        {(addColor) ?   (<SketchPicker onChangeComplete={ handelColorChange }/>) : ""}
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Reviews comments={productInfo.comments} />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );

}
