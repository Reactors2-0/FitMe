import React, { useState, useEffect } from "react";
import { Form} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "@Components/Message/errorMessage";
import SuccessMessage from "@Components/Message/successMessage";
import FormContainer from "@Components/FormContainer/FormContainer";
import {TextField,Button,CircularProgress,makeStyles} from "@material-ui/core/";
import ColorPicker from "@Components/ColorPicker/ColorPicker";
import * as brandAction from "@Actions/brandAction";
import * as brandConstants from "@Constants/brandConstants";

const useStyles = makeStyles((theme) => ({
  prgressColor: {
    color: "#fff",
  },
}));
const BrandSignup = ({ location, history }) => {
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

  const brandRegisterData = useSelector((state) => state.createBrand);
  const { error, loading, message, success } = brandRegisterData;
  
  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        const redirectUrl = redirect
          ? `/EmailVerification?redirect=${redirect}`
          : "/EmailVerification";
        history.push(redirectUrl);
      }, 5000);
    }
  }, [success, history, redirect]);

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
  function RGBToHex(r,g,b) {
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
  const handelColorChange = (val) => {
    setBrandColor(RGBToHex(val.r,val.g,val.b));
  };
  return (
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
        <div className="ui label"><i aria-hidden="true" className="mail icon"></i> Brand Image :</div>
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
        <div className="ui label"><i aria-hidden="true" className="mail icon"></i> Legal proof of business :</div>
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
        <div className="ui label"><i aria-hidden="true" className="mail icon"></i> Brand primary color :</div>
        <ColorPicker handelColor={handelColorChange} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress
              color="inherit"
              className={classes.prgressColor}
            />
          ) : (
            <>Register brand</>
          )}
        </Button>
      </Form>
    </FormContainer>
  );
};

export default BrandSignup;
