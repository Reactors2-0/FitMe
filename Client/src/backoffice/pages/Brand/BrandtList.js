
import React, { useEffect , useState} from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Pagination, PageItem   } from "react-bootstrap";
import { TextField, CircularProgress } from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import Message from "../User/Message";
import { Switch } from '@material-ui/core';
import Loader from "../User/Loader";
import { Badge, Card, CardBody, CardTitle, Container } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import * as brandAction from "@Actions/brandAction";
import Toast from 'react-bootstrap/Toast'
import Modal from 'react-bootstrap/Modal';
import fileDownload from "js-file-download";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Select from 'react-select'
import ("./BrandList.css");
const BrandList = ({ history }) => {
    const dispatch = useDispatch();
    const options = [
        { value: 'all', label: 'All' },
        { value: 'verified', label: 'Verified' },
        { value: 'unverified', label: 'Unverified' }
    ]
    const fetchBrands = useSelector((state) => state.listBrands);
    const { brands , count , loading, error} = fetchBrands;
    const [brandsList, setBrandsList] = useState(brands);
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState("");
    const [sort, setSort] = useState(options[1]);
    const handleClose = () => setShowModal(false);

    useEffect(() => {
        const brandInfo = {
            searchBrandKey: "",
            sort : "",
            initialLoading:true,
        };
        dispatch(brandAction.listBrandsForAdmin(brandInfo.initialLoading));

    }, [dispatch, history]);
    const [searchTerm, setSearchTerm] = useState("");
    const deleteHandler = (id) => {
        if (window.confirm("Are you sure want to delete ? ")) {
            dispatch(brandAction.deleteBrand(id));
            var array = [...brandsList];
            var index = array.find(x => x.id === id);
            array.splice(index,1);
            setBrandsList(array);
        }
    };
    useEffect(()=>{
        setBrandsList(brands);
    }, [brands])
    const toggle = (key) => {
        setShowModal(false);
        let prevBrands = [...brandsList];
        let prevBrand = {...prevBrands[key]};
        prevBrand.verify = !prevBrand.verify;
        prevBrands[key] = prevBrand;
        if(prevBrand.verify){
            dispatch(brandAction.toggleVerify(prevBrand._id));
            setBrandsList(prevBrands);
        } else {
            if(message.trim()==="") alert("Please specify a reason")
            else {
                dispatch(brandAction.toggleVerify(prevBrand._id,message));
                setBrandsList(prevBrands);
            }
        }
        setMessage("");
    }
    function toggleVerify(event,key) {
        setShowModal(true);
    }

    const handleDownload = (url, filename) => {
        axios.get(url, {responseType: "blob"}).then((res) => {
            fileDownload(res.data, filename);
        });
    };
    const handleChange = (selectedOption) => {
        setSort(selectedOption);
    }
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Breadcrumbs title="Dashborad" breadcrumbItem="List of brands " link={"/dashboard/admin/brands"}/>
                    <>
                        {loading ? (
                            <Loader />
                        ) : error ? (
                            <Message variant="danger">{error}</Message>
                        ) : (
                            <Card>
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="brandName"
                                    label="Brand Name"
                                    name="brandName"
                                    autoComplete="email"
                                    autoFocus
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <Select options={options} onChange={handleChange} autoFocus={true}/>
                                <CardBody>
                                    <div className="table-responsive">
                                        <Table className="table align-middle table-nowrap mb-0" striped bordered hover size="sm" responsive>
                                            <thead className="table-light">
                                            <tr>
                                                <th className="align-middle">Name</th>
                                                <th className="align-middle">Verify</th>
                                                <th className="align-middle">status</th>
                                                <th className="align-middle">User profile</th>
                                                <th className="align-middle">Edit</th>
                                                <th className="align-middle">Delete</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {brandsList.sort((function(a, b) {
                                                var nameA = a.brandName.toUpperCase(); // ignore upper and lowercase
                                                var nameB = b.brandName.toUpperCase(); // ignore upper and lowercase
                                                if (nameA < nameB) {
                                                    return -1;
                                                }
                                                if (nameA > nameB) {
                                                    return 1;
                                                }
                                                return 0;
                                            })).filter(brand => {
                                                if (searchTerm.trim() === "") return true
                                                else return brand.brandName.toLowerCase().startsWith(searchTerm.toLowerCase())
                                            }).filter(brand => {
                                                if(sort.value === "verified") return brand.verify
                                                else if (sort.value === "unverified") return !brand.verify
                                                else return true
                                            }).map((brand,key) => (
                                                <tr key={"_tr_" + brand._id}>
                                                    <td>{brand.brandName}</td>
                                                    <td>
                                                        <Switch checked={brandsList[key].verify} value={brandsList[key].verify} onChange={(e) => {toggleVerify();}}/>
                                                        { showModal && (
                                                            <Modal show={showModal} onHide={() =>handleClose} backdrop="static" keyboard={true} animation={true}>
                                                                <Modal.Header closeButton>
                                                                    <Modal.Title>Confirm {!brandsList[key].verify ? "verifying" : "refuting"} {brand.brandName}!</Modal.Title>
                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                    <div className="container">
                                                                        <img src={brand.brandImage} alt={brand.brandName} className="image" style={{width:"100%"}}/>
                                                                        <div className="middle">
                                                                            <div className="text">
                                                                                <button
                                                                                    onClick={() => {
                                                                                        handleDownload(
                                                                                            "https://res.cloudinary.com/dvzsfotdc/image/upload/v1616521135/brands/Zara/tmp-1-1616521176929_ywiqvk.jpg",
                                                                                            brand.brandName
                                                                                        );
                                                                                    }}
                                                                                >
                                                                                    Download proof
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {!brandsList[key].verify ? ("") : (<TextField
                                                                        variant="outlined"
                                                                        type="text"
                                                                        margin="normal"
                                                                        required
                                                                        fullWidth
                                                                        id="message"
                                                                        label="Reason for refuting"
                                                                        name="brandName"
                                                                        autoFocus
                                                                        value={message}
                                                                        onChange={(e) => setMessage(e.target.value)}
                                                                    />)}
                                                                </Modal.Body>
                                                                <Modal.Footer>
                                                                    <Button variant="primary" onClick={() =>toggle(key)}>
                                                                        Yes {!brandsList[key].verify ? "verify" : "refute"}
                                                                    </Button>
                                                                    <Button variant="text" onClick={handleClose}>
                                                                        Close
                                                                    </Button>
                                                                </Modal.Footer>
                                                            </Modal>) }
                                                    </td>
                                                    {brand.verify ? (
                                                        <td>
                                                            <Button className="btn-sm">
                                                                <i className="fas fa-check"/>
                                                            </Button>
                                                        </td>) : (
                                                        <td>
                                                            <Button className="btn-sm">
                                                                <i className="fas fa-accusoft"/>
                                                            </Button>
                                                        </td>
                                                    )}
                                                    <td>
                                                        <Link to={`/profile${brand.userId}`} className=" waves-effect">
                                                            <i className="fas fa-user"/>
                                                            <span>User profile</span>
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <Link to={`/dashboard/admin/brand/${brand._id}`} className=" waves-effect">
                                                            <i className="fas fa-edit"/>
                                                            <span>Edit</span>
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <Button
                                                            variant="danger"
                                                            className="btn-sm"
                                                            onClick={() => deleteHandler(brand._id)}
                                                        >
                                                            <i className="fas fa-trash"/>
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </CardBody>
                            </Card>
                        )}
                    </>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default BrandList;
