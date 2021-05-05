import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import { useDispatch, useSelector } from "react-redux";
import * as brandAction from "@Actions/brandAction";
import * as brandConstants from "@Constants/brandConstants";
import FormContainer from "@Components/FormContainer/FormContainer";
import ErrorMessage from "@FrontOfficeComponents/Message/errorMessage";
import {
    TextField,
    Button,
    CircularProgress,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    makeStyles,
} from "@material-ui/core/";
import { Link, Redirect } from "react-router-dom";
import confirmationImg from "@FrontOfficeAssets/confirmation.png";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import Container from "react-bootstrap/Container";

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    prgressColor: {
        color: "#fff",
    },
}));

const EditBrand = ({ match }) => {
    const brandId = match.params.brandId;
    const brandData = useSelector((state) => state.Brand);
    const { loading, brand, error, success } = brandData;

    const updateBrandDetails = useSelector(
        (state) => state.editBrand
    );
    const {
        loading: EditBrandLoading,
        error: EditBrandError,
        success: EditBrandSuccess,
    } = updateBrandDetails;

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [proof, setProof] = useState("");
    const [Success, setSuccess] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(brandAction.brand(brandId));
    }, [dispatch, brandId]);

    useEffect(() => {
        if (success) {
            setName(brand.brandName);
            setImage(brand.brandImage);
            setProof(brand.brandProof);
        }
    }, [dispatch, success]);
    const submitHandler = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('brandImage', image);
        data.append('brandProof', image);
        data.append('brandName', name);

        brand.name = name;
        brand.brandImage = image;
        brand.brandProof = proof;
        dispatch(brandAction.editBrand(brandId, data));
    };
    const ConfirmedAlert = () => {
        if (EditBrandSuccess) {
            return confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div className="custom-ui-alert">
                            <div className="success-img">
                                <img src={confirmationImg} alt="confirmationImg" />
                            </div>
                            <h3 className="font-weight-bold text">
                                Brand updated successfully
                            </h3>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                    onClose();
                                    dispatch({ type: brandConstants.EDIT_BRAND_RESET });
                                    setSuccess(true);
                                }}
                            >
                                OK
                            </Button>
                        </div>
                    );
                },
            });
        }
    };
    return (
        <Container fluid className="verticalHeight">
            <>
                {Success && <Redirect to="/dashboard/admin/brands" />}
                {EditBrandError && (
                    <ErrorMessage
                        header="Something went wrong"
                        message={EditBrandError}
                        reset={brandConstants.EDIT_BRAND_RESET}
                    />
                )}
                <Link to="/dashboard/admin/brands" className="btn btn-light my-3">
                    Go Back
                </Link>
                {loading ? (
                    <h4>Loading...</h4>
                ) : error ? (
                    <ErrorMessage header="Something went wrong" message={error} />
                ) : (
                    <>
                        <FormContainer>
                            <h1>Edit Brand:</h1>
                            <Image src={image} fluid  />
                            <Form onSubmit={submitHandler}>
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                Change image
                                <TextField
                                    variant="outlined"
                                    type="file"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="file"
                                    name="file"
                                    autoComplete="file"
                                    autoFocus
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                                Change proof
                                <TextField
                                    variant="outlined"
                                    type="file"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="proof"
                                    name="proof"
                                    autoComplete="proof"
                                    autoFocus
                                    onChange={(e) => setProof(e.target.files[0])}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    disabled={EditBrandLoading}
                                >
                                    {EditBrandLoading ? (
                                        <CircularProgress
                                            color="inherit"
                                            className={classes.prgressColor}
                                        />
                                    ) : (
                                        <>Update</>
                                    )}
                                </Button>
                            </Form>
                        </FormContainer>
                        {ConfirmedAlert()}
                    </>
                )}
            </>
        </Container>
    );
};

export default EditBrand;
