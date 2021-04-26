import React, { useState } from "react";

import "./home.css"
import Parallax from "@FrontOfficeComponents/ui/Parallax/Parallax";
import GridContainer from "@FrontOfficeComponents/ui/Grid/GridContainer";
import GridItem from "@FrontOfficeComponents/ui/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from "@FrontOfficeAssets/jss/material-kit-pro-react/views/ecommerceStyle.js";
import ParallaxImg from "@FrontOfficeAssets/img/examples/clark-street-merc.jpg"
import SectionLatestOffers from "./Sections/SectionLatestOffers"
import SectionProducts from "./Sections/SectionProducts";
import SectionBlog from "./Sections/SectionBlog";

import Button from "@material-ui/core/Button";
import {Mail} from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import CustomInput from "@FrontOfficeComponents/ui/CustomInput/CustomInput";
import CardBody from "@FrontOfficeComponents/ui/Card/CardBody";
import Card from "@FrontOfficeComponents/ui/Card/Card";
import ecommerceHeader from "@FrontOfficeAssets/img/examples/ecommerce-header.jpg";
import Meta from "../../components/Meta/Meta";
import * as newsAction from "@Actions/newsletterAction";
import { useDispatch } from "react-redux";



const useStyles = makeStyles(styles);

const Home = () => {
    // dear mohamed this makes problems check it
     //React.useEffect(() => {
       // window.scrollTo(0, 0);
       // document.body.scrollTop = 0;
   // });
    const classes = useStyles();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");


    const handle =(e) =>{
        e.preventDefault();
        console.log("wslna lena !");
        dispatch(newsAction.Register(email));
    }
    return (
                <>
                        <Meta/>
                        <div>
                        <Parallax
                            image={ParallaxImg}
                            filter="dark"
                            small
                        >
                            <div className={classes.container}>
                                <GridContainer>
                                    <GridItem
                                        md={8}
                                        sm={8}
                                        className="mlAuto mrAuto textCenter"
                                    >
                                        <div className={classes.brand} style={{width : 400}}>
                                            <h1 className={classes.title}>Fit Me !</h1>
                                            <h4>
                                                Free global delivery for all products.<br/>
                                                Use coupon{" "}
                                                <b>FITME25</b> for an extra <b>25%</b> Off
                                            </h4>
                                        </div>
                                    </GridItem>
                                </GridContainer>
                            </div>
                        </Parallax>

                        <div className="main mainRaised">
                        <SectionLatestOffers />
                        <SectionProducts />
                        </div>

                            <SectionBlog />
                            <br/>
                            <h2>News in fashion</h2>

                            <div
                                className="subscribeLine subscribeLineImage"
                                style={{ backgroundImage: `url(${ecommerceHeader})` }}
                            >
                                <div className={classes.container}>
                                    <GridContainer>
                                        <GridItem
                                            xs={12}
                                            sm={6}
                                            md={6}
                                            className="mlAuto mrAuto"
                                        >
                                            <div className={classes.textCenter}>
                                                <h3 className={classes.title}>Subscribe to our Newsletter</h3>
                                                <p className={classes.description}>
                                                    Join our newsletter and get news in your inbox every week! We
                                                    hate spam too, so no worries about this.
                                                </p>
                                            </div>
                                            <Card raised className={classes.card}>
                                                <CardBody className={classes.cardBody}>
                                                    <form onSubmit={handle}>
                                                        <GridContainer>
                                                            <GridItem xs={12} sm={6} md={6} lg={8}>
                                                                <CustomInput
                                                                    id="emailPreFooter"
                                                                    formControlProps={{
                                                                        fullWidth: true,
                                                                        className: classes.cardForm
                                                                    }}
                                                                    // this type of costume input 

                                                                    inputProps={{
                                                                        onChange: (e) => setEmail(e.target.value),
                                                                       
                                                                        placeholder: "Your Email..."
                                                                    }}
                                                                />
                                                            </GridItem>
                                                            <GridItem xs={12} sm={6} md={6} lg={4}>
                                                                <Button
                                                                    color={"primary"}
                                                                    block={"true"}
                                                                    type="submit"
                                                                    className={classes.subscribeButton}
                                                                >
                                                                    subscribe
                                                                </Button>
                                                            </GridItem>
                                                        </GridContainer>
                                                    </form>
                                                </CardBody>
                                            </Card>
                                        </GridItem>
                                    </GridContainer>
                                </div>
                            </div>


                        </div>


                </>

    );
};
export default Home;
