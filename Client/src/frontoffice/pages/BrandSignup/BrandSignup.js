import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Toast from 'react-bootstrap/Toast'
import Modal from 'react-bootstrap/Modal';

import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, CircularProgress, makeStyles } from "@material-ui/core/";

import ErrorMessage from "@Components/Message/errorMessage";
import SuccessMessage from "@Components/Message/successMessage";
import FormContainer from "@Components/FormContainer/FormContainer";
import ColorPicker from "@Components/ColorPicker/ColorPicker";
import Home from "@FrontOfficePages/Home/Home";
import * as brandAction from "../../../actions/brandAction";
import * as brandConstants from "@Constants/brandConstants";
import("./BrandSignup.css");
const useStyles = makeStyles((theme) => ({
  prgressColor: {
    color: "#fff",
  },
}));
const BrandSignup = ({ history }) => {
  const dispatch = useDispatch();
  // * Fields
  const [brandName, setBrandName] = useState("");
  const [brandImage, setBrandImage] = useState("");
  const [proof, setBrandProof] = useState("");
  const [brandColor, setBrandColor] = useState("");
  // * Others
  const [verificationMessage, setVerificationMessage] = useState("");
  // * Logged in user info
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // * Styles
  const classes = useStyles();


  const brandByUserIdSelector = useSelector((state) => state.brandByUserId);
  const { brandByUserId } = brandByUserIdSelector;
  const brandRegisterData = useSelector((state) => state.createBrand);
  const { error, loading, message, success } = brandRegisterData;

  // modal
  const [show, setShow] = useState(false);
  // Notification
  const [redirecting, setRedirecting] = useState(false);
  const [url, setUrl] = useState("your brands dashboard");
  const handleClose = () => {
    setShow(false);
    setRedirecting(true);
    if( brandByUserId.verify) {
      setTimeout(() => {
        history.push("/dashboard");
      }, 5000);
    } else {
      setUrl("FitMe's homepage")
      setTimeout(() => {
        history.push("/");
      }, 5000);
    }
  };

  useEffect(() => {
    console.log(brandByUserId)
    if (userInfo) {
      dispatch(brandAction.brandByUserIdCall());
      if(brandByUserId){
        setShow(true);
      }
    } else {
      alert("Please login / register to register brand!")
      setTimeout(() => {
        history.push("/login");
      }, 6);
    }
    if (success) {
      setTimeout(() => {
        alert("We will inform you via email upon brand verification")
        history.push("/");
      }, 6);
    }
  }, [success, history, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setVerificationMessage("");
    if (!brandName) return setVerificationMessage("Please provide your brand's name");
    if (!proof) return setVerificationMessage("Please provide a legal proof");
    if (!brandImage) return setVerificationMessage("Please provide a legal proof");
    if (!brandColor) return setVerificationMessage("Please provide your brand's primary color");
    const formData = new FormData();
    formData.append("brandName", brandName);
    formData.append("brandImage", brandImage);
    formData.append("brandProof", proof);
    formData.append("color", brandColor);
    formData.append("userId", userInfo.id);
    dispatch(brandAction.createBrand(formData));
  };
  function RGBToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    if (r.length === 1)
      r = "0" + r;
    if (g.length === 1)
      g = "0" + g;
    if (b.length === 1)
      b = "0" + b;
    return "#" + r + g + b;
  }
  const handleColorChange = (val) => {
    setBrandColor(RGBToHex(val.r, val.g, val.b));
  };
  return (
    <>
      { redirecting && (
        <div aria-live="polite" aria-atomic="true" style={{ position: 'relative', minHeight: '100px', }}>
          <Toast style={{ position: 'absolute', top: 0, right: 0, }}>
            <Toast.Header>
              <strong className="mr-auto">FitMe</strong>
            </Toast.Header>
            <Toast.Body>Redirecting you to {url} 😊</Toast.Body>
          </Toast>
        </div>
      )}
      { brandByUserId ? (
        <>
          <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Notice !</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              You are already a manager of {brandByUserId.brandName}! <br />
                Your brand is currently {brandByUserId.verify ? "Verified" : "Pending verification"}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="text" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <Home />
        </>) : (
          <Container fluid className="verticalHeight">
            <FormContainer>
              <h1>Register brand :</h1>
              {error && (
                <ErrorMessage
                  header="Auth Error"
                  message={error}
                  reset={brandConstants.CREATE_BRAND_RESET}
                />
              )}
              {verificationMessage !== "" && (
                <ErrorMessage header="Auth Error" message={verificationMessage} />
              )}
              {success && (
                <SuccessMessage
                  header="Registered brand SuccessFully"
                  message={message}
                  reset={brandConstants.CREATE_BRAND_RESET}
                />
              )}
              <Form onSubmit={handleSubmit}>
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
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                />
                <div className="ui label"><i aria-hidden="true" className="mail icon" /> Brand Image :</div>
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
                  onChange={(e) => setBrandImage(e.target.files[0])}
                />
                <div className="ui label"><i aria-hidden="true" className="mail icon" /> Legal proof of business :</div>
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
                  onChange={(e) => setBrandProof(e.target.files[0])}
                />
                <div className="ui label"><i aria-hidden="true" className="mail icon" /> Brand primary color :</div>
                <ColorPicker handelColor={handleColorChange} />
                <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleSubmit} disabled={loading}>
                  {loading ? (<CircularProgress color="inherit" className={classes.prgressColor} />) : (<>Register brand</>)}
                </Button>
              </Form>
            </FormContainer>
          </Container>
        )}
    </>
  );
};

export default BrandSignup;
