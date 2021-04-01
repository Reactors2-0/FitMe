/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

// rating imports

import Rating from "../Rating/Rating";

// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalShipping from "@material-ui/icons/LocalShipping";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Favorite from "@material-ui/icons/Favorite";
// core components

import Parallax from "../../components/frontoffice/ui/Parallax/Parallax.js";
import GridContainer from "../../components/frontoffice/ui/Grid/GridContainer.js";
import GridItem from "../../components/frontoffice/ui/Grid/GridItem.js";
import Button from "../../components/frontoffice/ui/CustomButtons/Button.js";
import Accordion from "../../components/frontoffice/ui/Accordion/Accordion.js";
import InfoArea from "../../components/frontoffice/ui/InfoArea/InfoArea.js";
import Card from "../../components/frontoffice/ui/Card/Card.js";
import CardHeader from "../../components/frontoffice/ui/Card/CardHeader.js";
import CardBody from "../../components/frontoffice/ui/Card/CardBody.js";
import CardFooter from "../../components/frontoffice/ui/Card/CardFooter.js";
import Tooltip from "@material-ui/core/Tooltip";

import productStyle from "../../assets/jss/material-kit-pro-react/views/productStyle.js";
import "../../assets/css/style.css"
// images
import cardProduct1 from "../../assets/img/examples/card-product1.jpg";
import cardProduct3 from "../../assets/img/examples/card-product3.jpg";
import cardProduct4 from "../../assets/img/examples/card-product4.jpg";
import cardProduct2 from "../../assets/img/examples/card-product2.jpg";
import product1 from "../../assets/img/examples/product1.jpg";
import product2 from "../../assets/img/examples/product2.jpg";
import product3 from "../../assets/img/examples/product3.jpg";
import product4 from "../../assets/img/examples/product4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as productAction from "../../../actions/productAction";
import { useCart } from "../../../hook/useCartHook";
import { Link } from "react-router-dom";

const useStyles = makeStyles(productStyle);

export default function ProductPage({ match }) {
    const [colorSelect, setColorSelect] = React.useState("0");
    const [sizeSelect, setSizeSelect] = React.useState("0");
    const productData = useSelector((state) => state.Product);
    const { loading, product, error } = productData;
    const { addToCartHandler, totCartItems } = useCart();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productAction.product(match.params.id));
        // eslint-disable-next-line
    }, [dispatch, match]);
    const classes = useStyles();
    const images = [
        {
            original: product.productImage,
            thumbnail: product.productImage
        },
        {
            original: product4,
            thumbnail: product4
        },
        {
            original: product.productImage,
            thumbnail: product.productImage
        },
        {
            original: product2,
            thumbnail: product2
        }
    ];
    return (
        <div className={classes.productPage}>

            <Parallax
                image={require("../../assets/img/bg6.jpg")}
                filter="blue"
                className={classes.pageHeader}
            >
                <div className={classes.container}>
                    <GridContainer className={classes.titleRow}>
                        <GridItem md={4} className={classes.mlAuto}>
                            <Link to="/shoppingCart">
                                <Button color="white" className={classes.floatRight}>
                                    <ShoppingCart /> {totCartItems} items
                            </Button>
                            </Link>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.section, classes.sectionGray)}>
                <div className={classes.container}>
                    <div className={classNames(classes.main, classes.mainRaised)}>
                        <GridContainer >
                            <GridItem md={6} sm={6} >
                                <ImageGallery
                                    showFullscreenButton={false}
                                    showPlayButton={false}
                                    items={images}
                                    showThumbnails={true}
                                    renderLeftNav={(onClick, disabled) => {
                                        return (
                                            <button
                                                className='btn btn-outline-dark btn-fitMe mr-2'
                                                disabled={disabled}
                                                onClick={onClick}
                                            >Previous</button>
                                        );
                                    }}
                                    renderRightNav={(onClick, disabled) => {
                                        return (
                                            <button
                                                className='btn btn-outline-dark btn-fitMe'
                                                disabled={disabled}
                                                onClick={onClick}
                                            >Next</button>
                                        );
                                    }}
                                />
                            </GridItem>
                            <GridItem md={6} sm={6}>
                                <h2 className={classes.title}>{product.name}</h2>
                                <h3 className={classes.mainPrice}>{product.price} TND</h3>
                                <Accordion
                                    active={0}
                                    activeColor="rose"
                                    collapses={[
                                        {
                                            title: "Description",
                                            content: (
                                                <p>
                                                    {product.description}
                                                </p>
                                            )
                                        },
                                        {
                                            title: "Designer Information",
                                            content: (
                                                <p>
                                                    An infusion of West Coast cool and New York attitude,
                                                    Rebecca Minkoff is synonymous with It girl style.
                                                    Minkoff burst on the fashion scene with her
                                                    best-selling {"'"}Morning After Bag{"'"} and later
                                                    expanded her offering with the Rebecca Minkoff
                                                    Collection - a range of luxe city staples with a {'"'}
                                                    downtown romantic{'"'} theme.
                                                </p>
                                            )
                                        },
                                        {
                                            title: "Details and Care",
                                            content: (
                                                <ul>
                                                    <li>Storm and midnight-blue stretch cotton-blend</li>
                                                    <li>
                                                        Notch lapels, functioning buttoned cuffs, two front
                                                        flap pockets, single vent, internal pocket
                                                    </li>
                                                    <li>Two button fastening</li>
                                                    <li>84% cotton, 14% nylon, 2% elastane</li>
                                                    <li>Dry clean</li>
                                                </ul>
                                            )
                                        }
                                    ]}
                                />
                                <GridContainer className={classes.pickSize}>
                                    <GridItem md={6} sm={6}>
                                        <label>Select color</label>
                                        <FormControl
                                            fullWidth
                                            className={classes.selectFormControl}
                                        >
                                            <Select
                                                MenuProps={{
                                                    className: classes.selectMenu
                                                }}
                                                classes={{
                                                    select: classes.select
                                                }}
                                                value={colorSelect}
                                                onChange={event => setColorSelect(event.target.value)}
                                                inputProps={{
                                                    name: "colorSelect",
                                                    id: "color-select"
                                                }}
                                            >
                                                <MenuItem
                                                    classes={{
                                                        root: classes.selectMenuItem,
                                                        selected: classes.selectMenuItemSelected
                                                    }}
                                                    value="0"
                                                >
                                                    Rose
                                                </MenuItem>
                                                <MenuItem
                                                    classes={{
                                                        root: classes.selectMenuItem,
                                                        selected: classes.selectMenuItemSelected
                                                    }}
                                                    value="1"
                                                >
                                                    Gray
                                                </MenuItem>
                                                <MenuItem
                                                    classes={{
                                                        root: classes.selectMenuItem,
                                                        selected: classes.selectMenuItemSelected
                                                    }}
                                                    value="2"
                                                >
                                                    White
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </GridItem>
                                    <GridItem md={6} sm={6}>
                                        <label>Select size</label>
                                        <FormControl
                                            fullWidth
                                            className={classes.selectFormControl}
                                        >
                                            <Select
                                                MenuProps={{
                                                    className: classes.selectMenu
                                                }}
                                                classes={{
                                                    select: classes.select
                                                }}
                                                value={sizeSelect}
                                                onChange={event => setSizeSelect(event.target.value)}
                                                inputProps={{
                                                    name: "sizeSelect",
                                                    id: "size-select"
                                                }}
                                            >
                                                <MenuItem
                                                    classes={{
                                                        root: classes.selectMenuItem,
                                                        selected: classes.selectMenuItemSelected
                                                    }}
                                                    value="0"
                                                >
                                                    Small
                                                </MenuItem>
                                                <MenuItem
                                                    classes={{
                                                        root: classes.selectMenuItem,
                                                        selected: classes.selectMenuItemSelected
                                                    }}
                                                    value="1"
                                                >
                                                    Medium
                                                </MenuItem>
                                                <MenuItem
                                                    classes={{
                                                        root: classes.selectMenuItem,
                                                        selected: classes.selectMenuItemSelected
                                                    }}
                                                    value="2"
                                                >
                                                    Large
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </GridItem>
                                </GridContainer>
                                <Rating
                                    value={product.averageRating}
                                    text={`${product.Reviews ? product.Reviews.length : 0
                                        } reviews`}
                                />
                                <GridContainer className={classes.pullRight}>
                                    <Button round color="rose" onClick={() => addToCartHandler(product.id, 1)}>
                                        Add to Cart &nbsp; <ShoppingCart />
                                    </Button>
                                </GridContainer>
                            </GridItem>
                        </GridContainer>
                    </div>
                    <div className={classNames(classes.features, classes.textCenter)}>
                        <GridContainer>
                            <GridItem md={4} sm={4}>
                                <InfoArea
                                    title="2 Days Delivery"
                                    description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                                    icon={LocalShipping}
                                    iconColor="info"
                                    vertical
                                />
                            </GridItem>
                            <GridItem md={4} sm={4}>
                                <InfoArea
                                    title="Refundable Policy"
                                    description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                                    icon={VerifiedUser}
                                    iconColor="success"
                                    vertical
                                />
                            </GridItem>
                            <GridItem md={4} sm={4}>
                                <InfoArea
                                    title="Popular Item"
                                    description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                                    icon={Favorite}
                                    iconColor="rose"
                                    vertical
                                />
                            </GridItem>
                        </GridContainer>
                    </div>
                    <div className={classes.relatedProducts}>
                        <h3 className={classNames(classes.title, classes.textCenter)}>
                            You may also be interested in:
                        </h3>
                        <GridContainer>
                            <GridItem sm={6} md={3}>
                                <Card product>
                                    <CardHeader image>
                                        <a href="#pablo">
                                            <img src={cardProduct1} alt="cardProduct" />
                                        </a>
                                    </CardHeader>
                                    <CardBody>
                                        <h6
                                            className={classNames(
                                                classes.cardCategory,
                                                classes.textRose
                                            )}
                                        >
                                            Trending
                                        </h6>
                                        <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                                        <div className={classes.cardDescription}>
                                            Dolce & Gabbana{"'"}s {"'"}Greta{"'"} tote has been
                                            crafted in Italy from hard-wearing red textured-leather.
                                        </div>
                                    </CardBody>
                                    <CardFooter className={classes.justifyContentBetween}>
                                        <div className={classes.price}>
                                            <h4>$1,459</h4>
                                        </div>
                                        <div className={classes.stats}>
                                            <Tooltip
                                                id="tooltip-top"
                                                title="Save to Wishlist"
                                                placement="top"
                                                classes={{ tooltip: classes.tooltip }}
                                            >
                                                <Button justIcon color="rose" simple>
                                                    <Favorite />
                                                </Button>
                                            </Tooltip>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </GridItem>
                            <GridItem sm={6} md={3}>
                                <Card product>
                                    <CardHeader image>
                                        <a href="#pablo">
                                            <img src={cardProduct3} alt="cardProduct3" />
                                        </a>
                                    </CardHeader>
                                    <CardBody>
                                        <h6 className={classes.cardCategory}>Popular</h6>
                                        <h4 className={classes.cardTitle}>Balmain</h4>
                                        <div className={classes.cardDescription}>
                                            Balmain{"'"}s mid-rise skinny jeans are cut with stretch
                                            to ensure they retain their second-skin fit but move
                                            comfortably.
                                        </div>
                                    </CardBody>
                                    <CardFooter className={classes.justifyContentBetween}>
                                        <div className={classes.price}>
                                            <h4>$459</h4>
                                        </div>
                                        <div className={classes.stats}>
                                            <Tooltip
                                                id="tooltip-top"
                                                title="Save to Wishlist"
                                                placement="top"
                                                classes={{ tooltip: classes.tooltip }}
                                            >
                                                <Button justIcon link>
                                                    <Favorite />
                                                </Button>
                                            </Tooltip>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </GridItem>
                            <GridItem sm={6} md={3}>
                                <Card product>
                                    <CardHeader image>
                                        <a href="#pablo">
                                            <img src={cardProduct4} alt="cardProduct4" />
                                        </a>
                                    </CardHeader>
                                    <CardBody>
                                        <h6 className={classes.cardCategory}>Popular</h6>
                                        <h4 className={classes.cardTitle}>Balenciaga</h4>
                                        <div className={classes.cardDescription}>
                                            Balenciaga{"'"}s black textured-leather wallet is finished
                                            with the label{"'"}s iconic {"'"}Giant{"'"} studs. This is
                                            where you can...
                                        </div>
                                    </CardBody>
                                    <CardFooter className={classes.justifyContentBetween}>
                                        <div className={classes.price}>
                                            <h4>$590</h4>
                                        </div>
                                        <div className={classes.stats}>
                                            <Tooltip
                                                id="tooltip-top"
                                                title="Save to Wishlist"
                                                placement="top"
                                                classes={{ tooltip: classes.tooltip }}
                                            >
                                                <Button justIcon color="rose" simple>
                                                    <Favorite />
                                                </Button>
                                            </Tooltip>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </GridItem>
                            <GridItem sm={6} md={3}>
                                <Card product>
                                    <CardHeader image>
                                        <a href="#pablo">
                                            <img src={cardProduct2} alt="cardProduct2" />
                                        </a>
                                    </CardHeader>
                                    <CardBody>
                                        <h6
                                            className={classNames(
                                                classes.cardCategory,
                                                classes.textRose
                                            )}
                                        >
                                            Trending
                                        </h6>
                                        <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                                        <div className={classes.cardDescription}>
                                            Dolce & Gabbana{"'"}s {"'"}Greta{"'"} tote has been
                                            crafted in Italy from hard-wearing red textured-leather.
                                        </div>
                                    </CardBody>
                                    <CardFooter className={classes.justifyContentBetween}>
                                        <div className={classes.price}>
                                            <h4>$1,459</h4>
                                        </div>
                                        <div className={classes.stats}>
                                            <Tooltip
                                                id="tooltip-top"
                                                title="Save to Wishlist"
                                                placement="top"
                                                classes={{ tooltip: classes.tooltip }}
                                            >
                                                <Button justIcon link>
                                                    <Favorite />
                                                </Button>
                                            </Tooltip>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>

        </div>
    );
}
