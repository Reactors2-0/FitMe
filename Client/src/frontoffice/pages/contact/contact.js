/*eslint-disable*/
import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components used to create a google map

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import Mail from "@material-ui/icons/Mail";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import GridContainer from "@FrontOfficeComponents/ui/Grid/GridContainer";
import GridItem from "@FrontOfficeComponents/ui/Grid/GridItem";
import InfoArea from "@FrontOfficeComponents/ui/InfoArea/InfoArea.js";
import CustomInput from "@FrontOfficeComponents/ui/CustomInput/CustomInput.js";
import Button from "@material-ui/core/Button";
import Footer from "@FrontOfficeComponents/ui/Footer/Footer.js";
import {
    TextField,
} from "@material-ui/core/";
import contactUsStyle from "@FrontOfficeAssets/jss/material-kit-pro-react/views/contactUsStyle.js";
import SuccessMessage from "@FrontOfficeComponents/Message/successMessage";
import ErrorMessage from "@FrontOfficeComponents/Message/errorMessage";

import * as contactAction from "@Actions/contactAction";
import * as contactConstants from "@Constants/userConstants";

import { useDispatch, useSelector } from "react-redux";



export default function ContactUsPage() {
    const useStyles = makeStyles(contactUsStyle);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const ContactRgisterData = useSelector((state) => state.userContact);

    const { loading, mesage, success, error } = ContactRgisterData;
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(contactAction.Register(name, email, phone, message));

    };
    // useEffect(() => {

    //     if (error) {
    //         window.confirm("Please Include All Information First")
    //     } else if (success) {
    //         window.confirm("We Recvied Your ")
    //     }
    // }, [error]);

    //const _handleChange = (e) => setEmail(e.target.value);

    const classes = useStyles();
    return (
        <div>
            {/*  chiheb b5elt ala css top:blabla merci d'avance <3 clean this  */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {error && (
                <SuccessMessage
                header="Message SuccessFully Sent"
                message={mesage}
            />
            )}
            {success && (
                <SuccessMessage
                    header="Message SuccessFully Sent"
                    message={mesage}
                />
            )}
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.contactContent}>
                    <div className={classes.container}>
                        <h2 className={classes.title}>Send us a message</h2>
                        <GridContainer>
                            <GridItem md={6} sm={6}>
                                <p>
                                    You can contact us with anything related to our Products. We
                  {"'"}ll get in touch with you as soon as possible.
                  <br />
                                    <br />
                                </p>
                                <form onSubmit={handleSubmit}>
                                    <CustomInput
                                        labelText="Name"
                                        id="float"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            onChange: (e) => setName(e.target.value)
                                        }}

                                    />
                                    <CustomInput
                                        labelText="Email address"
                                        id="float"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            onChange: (e) => setEmail(e.target.value)
                                        }}

                                    />
                                    <CustomInput
                                        labelText="Phone"
                                        id="float"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        value={phone}
                                        inputProps={{
                                            onChange: (e) => setPhone(e.target.value)
                                        }}
                                    />
                                    <CustomInput
                                        labelText="Your message"
                                        id="float"
                                        formControlProps={{
                                            fullWidth: true
                                        }}

                                        value={message}
                                        inputProps={{
                                            multiline: true,
                                            rows: 6,
                                            onChange: (e) => setMessage(e.target.value)
                                        }}
                                    />
                                    <div className={classes.textCenter}>
                                        <Button color="primary" round
                                            type="submit"
                                        >
                                            Contact us
                    </Button>
                                    </div>
                                </form>
                            </GridItem>
                            <GridItem md={4} sm={4} className={classes.mlAuto}>
                                <InfoArea
                                    className={classes.info}
                                    title="Find us at the office"
                                    description={
                                        <p>
                                            Ariana Soghra, <br /> {" "}
                                            <br /> Tunis
                    </p>
                                    }
                                    icon={PinDrop}
                                    iconColor="primary"
                                />
                                <InfoArea
                                    className={classes.info}
                                    title="Give us a ring"
                                    description={
                                        <p>
                                            Reactors <br /> +216 25 678 659 <br /> Mon - Fri,
                      8:00-20:00
                    </p>
                                    }
                                    icon={Phone}
                                    iconColor="primary"
                                />
                                <InfoArea
                                    className={classes.info}
                                    title="Send us an email"
                                    description={
                                        <p>
                                         Reactors5@gmail.com   
                    </p>
                                    }
                                    icon={Mail}
                                    iconColor="primary"
                                />
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
            <Footer
                content={
                    <div>
                        <div className={classes.left}>
                            <List className={classes.list}>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="https://www.creative-tim.com/?ref=mkpr-contact-us"
                                        target="_blank"
                                        className={classes.block}
                                    >
                                        Creative Tim
                  </a>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="https://www.creative-tim.com/presentation?ref=mkpr-contact-us"
                                        target="_blank"
                                        className={classes.block}
                                    >
                                        About us
                  </a>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <a href="//blog.creative-tim.com/" className={classes.block}>
                                        Blog
                  </a>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="https://www.creative-tim.com/license?ref=mkpr-contact-us"
                                        target="_blank"
                                        className={classes.block}
                                    >
                                        Licenses
                  </a>
                                </ListItem>
                            </List>
                        </div>
                        <div className={classes.right}>
                            &copy; {1900 + new Date().getYear()} , made with{" "}
                            <Favorite className={classes.icon} /> by{" "}

                                Chebbi cyrine
            </div>
                    </div>
                }
            />
        </div>
    );
}
