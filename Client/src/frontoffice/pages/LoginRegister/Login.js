import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "@FrontOfficeComponents/Message/errorMessage";
import FormContainer from "@Components/FormContainer/FormContainer";
import {
  TextField,
  Button,
  CircularProgress,
  makeStyles,
} from "@material-ui/core/";
import * as userAction from "@Actions/userAction";
import * as userConstants from "@Constants/userConstants";

const useStyles = makeStyles((theme) => ({
  prgressColor: {
    color: "#fff",
  },
}));

const Login = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const userAuthData = useSelector((state) => state.userLogin);

  const { userInfo, error, loading } = userAuthData;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      if (userInfo.role === "admin")
        history.push(redirect + "dashboard/admin");
      else if (userInfo.role === "seller")
        history.push(redirect + "dashboard/seller")
      else
        history.push(redirect)
    }
  }, [dispatch, userInfo, redirect, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userAction.auth(email, password));
  };

  return (
    <>
      {error && (
        <ErrorMessage
          header="Auth Error"
          message={error}
          reset={userConstants.RESET}
        />
      )}
      <FormContainer>
        <h1>Hello There!</h1>
        <p style={{ fontWeight: 'bold', color: 'black' }}>Please sign in or create account to continue</p>
        <h3>Sign In</h3>

        <Form onSubmit={submitHandler}>
          <p>Email</p>
          <TextField
            variant="outlined"
            type="email"
            margin="normal"
            placeholder="ex: brayek@gmail.com"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Password</p>
          <TextField
            variant="outlined"
            margin="normal"
            type="password"
            placeholder="***********"
            required
            fullWidth
            name="password"
            label="Password"
            id="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
          >
            {loading ? (
              <CircularProgress
                color="inherit"
                className={classes.prgressColor}
              />
            ) : (
              <>Sign In</>
            )}
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            New Customer?
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Register
            </Link>
          </Col>
          <Col className="text-right">
            <Link to={"/forgotPasssword"}>Forgot Password</Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default Login;
