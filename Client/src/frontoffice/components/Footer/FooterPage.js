import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import GridContainer from "../ui/Grid/GridContainer";
import GridItem from "../ui/Grid/GridItem";
import face1 from "../../assets/img/faces/card-profile6-square.jpg";
import face2 from "../../assets/img/faces/christian.jpg";
import face3 from "../../assets/img/faces/card-profile4-square.jpg";
import face4 from "../../assets/img/faces/card-profile1-square.jpg";
import face5 from "../../assets/img/faces/marc.jpg";
import face6 from "../../assets/img/faces/kendall.jpg";
import face7 from "../../assets/img/faces/card-profile5-square.jpg";
import face8 from "../../assets/img/faces/card-profile2-square.jpg";
import classNames from 'classnames';

import Footer from "../ui/Footer/Footer";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-pro-react/views/ecommerceStyle";

const useStyles = makeStyles(styles);

const FooterPage = () => {
    const classes = useStyles();

    return (
      <Footer
          theme="dark"
          content={
              <div>
                  <div className={classes.left}>
                      <List className={classes.list}>
                          <ListItem className={classes.inlineBlock}>
                              <a
                                  href="http://blog.creative-tim.com/?ref=mkpr-e-ecommerce"
                                  target="_blank"
                                  className={classes.block}
                              >
                                  Blog
                              </a>
                          </ListItem>
                          <ListItem className={classes.inlineBlock}>
                              <a
                                  href="https://www.creative-tim.com/presentation?ref=mkpr-e-ecommerce"
                                  target="_blank"
                                  className={classes.block}
                              >
                                  Presentation
                              </a>
                          </ListItem>
                          <ListItem className={classes.inlineBlock}>
                              <a
                                  href="#pablito"
                                  onClick={e => e.preventDefault()}
                                  className={classes.block}
                              >
                                  Discover
                              </a>
                          </ListItem>
                          <ListItem className={classes.inlineBlock}>
                              <a
                                  href="#pablito"
                                  onClick={e => e.preventDefault()}
                                  className={classes.block}
                              >
                                  Payment
                              </a>
                          </ListItem>
                          <ListItem className={classes.inlineBlock}>
                              <a
                                  href="https://www.creative-tim.com/contact-us?ref=mkpr-e-ecommerce"
                                  target="_blank"
                                  className={classes.block}
                              >
                                  Contact us
                              </a>
                          </ListItem>
                          <ListItem className={classes.inlineBlock}>
                              <a
                                  href="/brandSignup"
                                  className={classes.block}
                              >
                                  Become a registered brand
                              </a>
                          </ListItem>
                      </List>
                  </div>
                  <div className={classes.right}>
                      Copyright &copy; {1900 + new Date().getYear()}{" "}
                      <a
                          href="https://www.creative-tim.com?ref=mkpr-e-ecommerce"
                          target="_blank"
                          className={classes.aClasses}
                      >
                          Reactors
                      </a>{" "}
                      All Rights Reserved.
                  </div>
              </div>
          }
      >
          <GridContainer>
              <GridItem xs={12} sm={4} md={4}>
                  <h5>About Us</h5>
                  <p>
                      React is a startup that creates design tools that make the
                      web development process faster and easier.{" "}
                  </p>
                  <p>
                      We love the web and care deeply for how users interact with a
                      digital product. We power businesses and individuals to create
                      better looking web projects around the world.{" "}
                  </p>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>
                  <h5>Social Feed</h5>
                  <div className={classes.socialFeed}>
                      <div>
                          <i className="fab fa-twitter" />
                          <p>How to handle ethical disagreements with your clients.</p>
                      </div>
                      <div>
                          <i className="fab fa-twitter" />
                          <p>The tangible benefits of designing at 1x pixel density.</p>
                      </div>
                      <div>
                          <i className="fab fa-facebook-square" />
                          <p>
                              A collection of 25 stunning sites that you can use for
                              inspiration.
                          </p>
                      </div>
                  </div>
              </GridItem>
              <GridItem xs={12} sm={4} md={4}>

              </GridItem>
          </GridContainer>
      </Footer>
  );
};

export default FooterPage;
