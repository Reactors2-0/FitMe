import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as userAction from "@Actions/userAction";

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAction.Logout());
  }, [dispatch]);

  return <Redirect to="/login" />;
};

export default Logout;
