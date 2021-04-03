import React, { Component } from "react"
import { Link } from "react-router-dom"
import MetaTags from 'react-meta-tags';
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap"
import * as productAction  from "../../../actions/productAction";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productReducer from '../../../reducers/productReducers';

import Select from "react-select"
import Dropzone from "react-dropzone"
import ColorSelector from "../../components/ColorSelector/ColorSelector";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import ErrorMessage from "../../../frontoffice/components/Message/errorMessage";

class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formProduct :[],
      selectedFiles: [],
      isDiscount : false,
      VerificationMessage :""
    }
    const { dispatch } = props;
  }

  handleAcceptedFiles = files => {
    console.log(files)
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: this.formatBytes(file.size),
      })
    )

    this.setState({ selectedFiles: files })
  }

  formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }
  sizeOptions=[
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
    { value: "XXXL", label: "XXXL" },
  ];

    componentWillMount() {

      fetch("http://localhost:3000/api/category/")
          .then(res => res.json())
          .then(
              (result) => {
                this.setState({
                  categories: result.data.results
                });
              },
              (error) => {
               console.log(error)
              })


      fetch("http://localhost:3000/api/brands")
          .then(res => res.json())
          .then(
              (result) => {
                this.setState({
                  brands: result.data.results
                });
              },
              (error) => {
                console.log(error)
              })
      this.setState({
        connectedUser : JSON.parse(localStorage.getItem("userInfo"))
      })
    }

   handlerColorChange(value) {
     this.state.formProduct.color=value;
  }
  handlerSizeChange(value) {
    this.state.formProduct.size=value;
  }

   handleSubmit = () => {
      console.log(this.state.selectedFiles[0])
     const formData = new FormData();
     formData.append("name", this.state.formProduct.name);
     formData.append("price", this.state.formProduct.price);
     formData.append("countInStock", this.state.formProduct.countInStock);
     formData.append("description", this.state.formProduct.description);
     formData.append("color", JSON.stringify(this.state.formProduct.color));
     formData.append("category", this.state.formProduct.category);
     formData.append("size", JSON.stringify(this.state.formProduct.size));
     formData.append("brand", this.state.formProduct.brand);
     formData.append("isDiscounted", this.state.formProduct.isDiscounted);
     formData.append("productImage", JSON.stringify(this.state.selectedFiles[0]));
      if(this.state.isDiscount && this.state.formProduct.discount) {
        formData.append("discount", this.state.formProduct.discount);
      }

     this.props.dispatch(productAction.createProduct(formData))

     // e.preventDefault();
    // this.setState({VerificationMessage : ""});
    // if (!this.state.formProduct.name) return this.setState({VerificationMessage :"Please provide your product's name"});
    // if (!this.state.formProduct.price) return this.setState({VerificationMessage :"Please provide your product's price"});
    // if (!this.state.formProduct.countInStock) return this.setState({VerificationMessage :"Please provide your product's countInStock"});
    // if (!this.state.formProduct.description) return this.setState({VerificationMessage :"Please provide your product's description"});
    // if (!this.state.formProduct.color) return this.setState({VerificationMessage :"Please provide your product's color"});
    // if (!this.state.formProduct.category) return this.setState({VerificationMessage :"Please provide your product's category"});
    // if (!this.state.formProduct.size) return this.setState({VerificationMessage :"Please provide your product's size"});
    // if (!this.state.formProduct.brand) return this.setState({VerificationMessage :"Please provide your product's brand"});
    // if(this.state.isDiscount && !this.state.formProduct.discount) return this.setState({VerificationMessage :"Please provide your product's discount"});
    //  this.setState({VerificationMessage: ""});
    //  this.props.createProductDetails(this.state.formProduct);


  };
  render() {


    return (
      <React.Fragment>
        <div className="page-content">
        <MetaTags>
            <title>Add Product | FitMe!</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs title="Dashborad" breadcrumbItem="Add Product" />

            <Row>
              <Col xs="12">
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Basic Information</CardTitle>
                    <p className="card-title-desc">Fill all information below</p>
                    {this.state.VerificationMessage !== "" && (
                        <ErrorMessage header="Auth Error" message={this.state.VerificationMessage} />
                    )}
                    <Form>
                      <Row>
                        <Col sm="6">
                          <FormGroup className="mb-3">
                            <Label htmlFor="productname">Product Name</Label>
                            <Input
                              id="productname"
                              name="productname"
                              type="text"
                              className="form-control"
                              onChange={(e)=>{this.state.formProduct.name= e.target.value}}
                            />
                          </FormGroup>
                          <FormGroup className="mb-3">
                            <Label htmlFor="productprice">
                              Product Price
                            </Label>
                            <Input
                              id="productprice"
                              name="productprice"
                              type="number"
                              className="form-control"
                              onChange={(e)=>{this.state.formProduct.price= parseFloat(e.target.value)}}

                            />
                          </FormGroup>
                          <FormGroup className="mb-3">
                            <Label htmlFor="productqty">
                              Product QTY
                            </Label>
                            <Input
                              id="productqty"
                              name="productqty"
                              type="number"
                              className="form-control"
                              onChange={(e)=>{this.state.formProduct.countInStock= parseInt(e.target.value)}}

                            />
                          </FormGroup>
                          <FormGroup className="mb-3 d-flex ">
                            <Label>Discount : &nbsp; &nbsp;</Label>
                            <Input
                              id="isDiscount"
                              name="isDiscount"
                              type="checkbox"
                              className="form-control"
                              onChange={()=>this.setState({isDiscount : !this.state.isDiscount})}

                            />
                            {this.state.isDiscount ? (
                                <Input
                                style={{width : 120 , marginLeft : 30}}
                                id="discount"
                                name="discount"
                                type="number"
                                placeholder="Discount %"
                                className="form-control"
                                onChange={(e)=>{this.state.formProduct.discount=  parseInt(e.target.value)}}

                                />) : <></>}
                          </FormGroup>
                          <FormGroup className="select2-container mb-3">
                            <Label className="control-label">Available Size</Label>
                            <Select
                                closeMenuOnSelect={false}
                                classNamePrefix="form-control"
                                placeholder="Choose ..."
                                title="Country"
                                options={this.sizeOptions}
                                isMulti
                                onChange={(e)=>{this.handlerSizeChange(e)}}

                            />
                          </FormGroup>
                        </Col>

                        <Col sm="6">
                          <FormGroup className="mb-3">
                            <Label className="control-label">Category</Label>
                            <select className="form-control select2"
                            onChange={(e)=>{this.state.formProduct.category= e.target.value}}
                            >
                              <option>Select</option>
                              {this.state.categories ? this.state.categories.map((val,index)=>
                                  <option value={val._id} key={index}>{val.categoryName}</option>
                              ) : ""}


                            </select>
                          </FormGroup>
                          <FormGroup className="select2-container mb-3">
                            <Label className="control-label">Colors </Label>
                           <ColorSelector handlerColorChangeProps={(e)=>this.handlerColorChange(e)}/>
                          </FormGroup>
                          <FormGroup className="mb-3">
                            <Label htmlFor="productdesc">
                              Product Description
                            </Label>
                            <textarea
                              className="form-control"
                              id="productdesc"
                              rows="5"
                              onChange={(e)=>{this.state.formProduct.description= e.target.value}}

                            />
                          </FormGroup>
                          <FormGroup className="mb-3">
                            {this.state.brands && this.state.connectedUser.role === "admin" ?
                                (<>
                                <Label className="control-label">Brand</Label>
                            <select className="form-control select2"
                                    onChange={(e)=>{this.state.formProduct.brand= e.target.value}}
                            >
                              <option>Select</option>
                              { this.state.brands.map((val,index)=>
                                  <option value={val._id} key={index}>{val.brandName}</option>
                              ) }


                            </select></>): this.state.formProduct.brand=this.state.connectedUser.id}
                          </FormGroup>
                        </Col>
                      </Row>
                      <div className="d-flex flex-wrap gap-2">
                      <Button
                        type="button"
                        color="primary"
                        className="waves-effect waves-light"
                        onClick={(e)=>{
                          this.state.formProduct.isDiscounted = this.state.isDiscount;
                          this.handleSubmit();
                        }}
                      >
                        Save Changes
                      </Button>
                      <Button
                        type="submit"
                        color="secondary"
                        className="waves-effect waves-light"
                      >
                        Cancel
                      </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>

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
                        {this.state.selectedFiles.map((f, i) => {
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
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}
// const mapDispatchToProps  = ({dispatch}) => ({
//   createProductDetails: (msg) => dispatch(productAction.createProduct(msg)),
// })

export default connect()(AddProduct);
