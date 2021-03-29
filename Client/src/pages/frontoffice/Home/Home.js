import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Meta from "../../../components/frontoffice/Meta/Meta";
import HomeLoader from "../../../components/frontoffice/Loader/HomeLoader";
import ErrorMessage from "../../../components/frontoffice/Message/errorMessage";

 import * as productAction from "../../../actions/productAction"
import "./home.css"
import Parallax from "../../../components/frontoffice/ui/Parallax/Parallax";
import GridContainer from "../../../components/frontoffice/ui/Grid/GridContainer";
import GridItem from "../../../components/frontoffice/ui/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-kit-pro-react/views/ecommerceStyle.js";
import ParallaxImg from "../../../assets/img/examples/clark-street-merc.jpg"
import SectionLatestOffers from "./Sections/SectionLatestOffers"
import SectionProducts from "./Sections/SectionProducts";
import SectionBlog from "./Sections/SectionBlog";

import Button from "@material-ui/core/Button";
import {Mail} from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import CustomInput from "../../../components/frontoffice/ui/CustomInput/CustomInput";
import CardBody from "../../../components/frontoffice/ui/Card/CardBody";
import Card from "../../../components/frontoffice/ui/Card/Card";
import ecommerceHeader from "../../../assets/img/examples/ecommerce-header.jpg";


const useStyles = makeStyles(styles);

const Home = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();

    const [sort, setSort] = useState([]);
    const [category, setCategory] = useState("");
    const [priceRange, setPriceRange] = useState("");
    const [ltORgt, setLtORgt] = useState("");

    const [initialLoading, setInitialLoading] = useState(true);

    const productList = useSelector((state) => state.products);

    const { loading, products, count, error, success } = productList;

    const queryParams = new URLSearchParams(window.location.search);
    const searchProductKey = queryParams.get("search")
        ? queryParams.get("search").trim()
        : "";

    const dispatch = useDispatch();

    useEffect(() => {
        if (success && initialLoading) {
            setInitialLoading(false);
        } else {
            fetchProductList();
        }
        // eslint-disable-next-line
    }, [dispatch, searchProductKey, success, sort, category]);

    const fetchProductList = () => {
        dispatch(
            productAction.listProducts({
                searchProductKey,
                sort,
                category,
                priceRange,
                initialLoading,
                ltORgt,
            })
        );
    };

    const handleSort = (value) => {
        sort.includes(value)
            ? setSort(sort.filter((s) => s !== value))
            : setSort((sort) => sort.concat(value));
    };

    const handlePriceRange = () => {
        if (priceRange === "" || ltORgt === "") {
            return;
        }
        fetchProductList();
    };
    return (
        <>

            <Meta />{" "}
            {loading ? (
                <HomeLoader />
            ) : error ? (
                <ErrorMessage header="Something went wrong" message={error} />
            ) : (
                <>
                    {" "}
                    {searchProductKey ? (
                        <>
                            <Link to="/" className="btn btn-light">
                                Go Back{" "}
                            </Link>{" "}
                            <h1>
                                Search Products for {searchProductKey}({count}){" "}
                            </h1>{" "}
                        </>
                    ) : (
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
                                        <div className={classes.brand}>
                                            <h1 className={classes.title}>Ecommerce Page!</h1>
                                            <h4>
                                                Free global delivery for all products. Use coupon{" "}
                                                <b>25summer</b> for an extra 25% Off
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
                                                    <form>
                                                        <GridContainer>
                                                            <GridItem xs={12} sm={6} md={6} lg={8}>
                                                                <CustomInput
                                                                    id="emailPreFooter"
                                                                    formControlProps={{
                                                                        fullWidth: true,
                                                                        className: classes.cardForm
                                                                    }}
                                                                    inputProps={{
                                                                        startAdornment: (
                                                                            <InputAdornment position="start">
                                                                                <Mail />
                                                                            </InputAdornment>
                                                                        ),
                                                                        placeholder: "Your Email..."
                                                                    }}
                                                                />
                                                            </GridItem>
                                                            <GridItem xs={12} sm={6} md={6} lg={4}>
                                                                <Button
                                                                    color="rose"
                                                                    block
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
                    // <Row>
                    //     {" "}
                    //     {products.map((product) => (
                    //         <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    //             <Product product={product} />{" "}
                    //         </Col>
                    //     ))}{" "}
                    // </Row>
                    )}
                </>
                )}

        </>
    );
};
export default Home;
