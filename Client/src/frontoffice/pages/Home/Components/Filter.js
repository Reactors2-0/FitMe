import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
// nodejs library that concatenates classes
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui icons
import Cached from "@material-ui/icons/Cached";
import Check from "@material-ui/icons/Check";
// core components
import Accordion from "@FrontOfficeComponents/ui/Accordion/Accordion.js";
import styles from "@FrontOfficeAssets/jss/material-kit-pro-react/views/ecommerceStyle.js";

import Card from "@FrontOfficeComponents/ui/Card/Card.js";
import CardBody from "@FrontOfficeComponents/ui/Card/CardBody.js";
import Button from "@FrontOfficeComponents/ui/CustomButtons/Button.js";
import Clearfix from "@FrontOfficeComponents/ui/Clearfix/Clearfix.js";
import classNames from "classnames";
import {useProduct} from "../../../../hook/useProductHook";
// Actions
import * as brandAction from "@Actions/brandAction";
import * as brandConstants from "@Constants/brandConstants";
import axios from "axios";
const useStyles = makeStyles(styles);

export default function Filter() {
    const dispatch = useDispatch();
    const [checked, setChecked] = React.useState([1, 9, 27]);
    const [checkedBrand, setCheckedBrand] = React.useState([]);
    const [sort, setSort] = useState([]);
    const [category, setCategory] = useState([]);
    const [checkedCategory, setCheckedCategory] = React.useState([]);

    const [priceRange, setPriceRange] = React.useState("");
    const [ltORgt, setLtORgt] = useState([0, 790]);
    const [init, setInit] = useState(true);
    const queryParams = new URLSearchParams(window.location.search);
    const [toggleAllBrands, setToggleAllBrands] = useState(false);

    // chihab
    const fetchBrands = useSelector((state) => state.listBrands);
    const { brands , count } = fetchBrands;


    const searchProductKey = queryParams.get("search")
        ? queryParams.get("search").trim()
        : "";
    const {loading, fetchProductList} = useProduct("", checkedCategory,"",ltORgt, init,checkedBrand);

    const brandToUi = (brand,index) => {
        return <FormControlLabel key={index} control={<Checkbox disableRipple tabIndex={index} onClick={() =>
            handleBrandToggle(brand._id)} checkedIcon={
                    <Check className={classes.checkedIcon}/>}
                        icon={<Check className={classes.uncheckedIcon}/>}
                        classes={{checked: classes.checked, root: classes.checkRoot}}
                    />} classes={{label: classes.label}} label={brand.brandName}/>;
    }

    const categoryToUi = (category,index) => {
        return <FormControlLabel key={index} control={<Checkbox disableRipple tabIndex={index} onClick={() =>
            handleCategoryToggle(category._id)} checkedIcon={
            <Check className={classes.checkedIcon}/>}
            icon={<Check className={classes.uncheckedIcon}/>}
            classes={{checked: classes.checked, root: classes.checkRoot}}
        />} classes={{label: classes.label}} label={category.categoryName}/>;
    }


    useEffect(() => {
            const brandInfo = {
                searchBrandKey: "",
                sort : "",
                initialLoading:true,
            };
            fetch("http://localhost:3000/api/category/")
                .then(res => res.json())
                .then(
                    (result) => {
                        setCategory(result.data.results);
                    },
                    (error) => {
                        console.log(error)
                    })

            dispatch(brandAction.listBrands(brandInfo));
        }
    , [dispatch]);
    React.useEffect(() => {
        if (!document.getElementById("sliderRegular").classList.contains("noUi-target")) {
            Slider.create(document.getElementById("sliderRegular"), {
                start: ltORgt,
                connect: true,
                range: {min: 0, max: 900},
                step: 1
            }).on("update", function (values) {
                setLtORgt([Math.round(values[0]), Math.round(values[1])]);
                setInit(true)
            });
        }
        return function cleanup() {
        };
    });
    const handleToggle = value => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    const handleBrandToggle = value => {
        const currentIndex = checkedBrand.indexOf(value);
        const newChecked = [...checkedBrand];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setCheckedBrand(newChecked);
    };

    const handleCategoryToggle = value => {
        const currentIndex = checkedCategory.indexOf(value);
        const newChecked = [...checkedCategory];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setCheckedCategory(newChecked);
    };

    const classes = useStyles();
    function handleAllBrandsToggle() {
        if(toggleAllBrands){
            checkedBrand.splice(0,checkedBrand.length);
        }else {
            brands.map((brand)=> {
                if(checkedBrand.indexOf(brand._id) === -1){
                    checkedBrand.push(brand._id);
                }
            })
        }
        setToggleAllBrands(!toggleAllBrands);
        console.log(checkedBrand);
    }

    return (
        <Card plain>
            <CardBody className={classes.cardBodyRefine}>
                <h4 className={classes.cardTitle + " " + classes.textLeft}>
                    Refine
                    <Tooltip
                        id="tooltip-top"
                        title="Reset Filter"
                        placement="top"
                        classes={{tooltip: classes.tooltip}}
                    >
                        <Button
                            link
                            justIcon
                            size="sm"
                            className={classes.pullRight + " " + classes.refineButton}
                        >
                            <Cached/>
                        </Button>
                    </Tooltip>
                    <Clearfix/>
                </h4>
                <Accordion
                    active={[0, 2]}
                    activeColor="rose"

                    collapses={[
                        {
                            title: "Price Range",
                            content: (
                                <CardBody className={classes.cardBodyRefine}>
                          <span
                              className={classNames(
                                  classes.pullLeft,
                                  classes.priceSlider
                              )}
                          >
                            €{ltORgt[0]}
                          </span>
                                    <span
                                        className={classNames(
                                            classes.pullRight,
                                            classes.priceSlider
                                        )}
                                    >
                            €{ltORgt[1]}
                          </span>
                                    <br/>
                                    <br/>
                                    <div id="sliderRegular" className="slider-rose"/>
                                </CardBody>
                            )
                        },
                        {
                            title: "Clothing",
                            content: (
                                <div className={classes.customExpandPanel}>
                                    <div
                                        className={
                                            classes.checkboxAndRadio +
                                            " " +
                                            classes.checkboxAndRadioHorizontal
                                        }
                                    >
                                        {category && category.map((category,index) => {
                                            return categoryToUi(category,index);
                                        })}
                                    </div>
                                </div>
                            )
                        },
                        {
                            title: "Designer",
                            content: (
                                <div className={classes.customExpandPanel}>
                                    <div
                                        className={
                                            classes.checkboxAndRadio +
                                            " " +
                                            classes.checkboxAndRadioHorizontal
                                        }
                                    >
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    disableRipple
                                                    tabIndex={-1}
                                                    onClick={() => handleAllBrandsToggle()}
                                                    checked={
                                                        toggleAllBrands
                                                    }
                                                    checkedIcon={
                                                        <Check className={classes.checkedIcon}/>
                                                    }
                                                    icon={
                                                        <Check className={classes.uncheckedIcon}/>
                                                    }
                                                    classes={{
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }}
                                                />
                                            }
                                            classes={{label: classes.label}}
                                            label="All"
                                        />
                                        { brands.map((brand,index) => {
                                            return brandToUi(brand,index);
                                        })}
                                    </div>
                                </div>
                            )
                        },
                        {
                            title: "Colour",
                            content: (
                                <div className={classes.customExpandPanel}>
                                    <div
                                        className={
                                            classes.checkboxAndRadio +
                                            " " +
                                            classes.checkboxAndRadioHorizontal
                                        }
                                    >
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    disableRipple
                                                    tabIndex={-1}
                                                    onClick={() => handleToggle(27)}
                                                    checked={
                                                        checked.indexOf(27) !== -1 ? true : false
                                                    }
                                                    checkedIcon={
                                                        <Check className={classes.checkedIcon}/>
                                                    }
                                                    icon={
                                                        <Check className={classes.uncheckedIcon}/>
                                                    }
                                                    classes={{
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }}
                                                />
                                            }
                                            classes={{label: classes.label}}
                                            label="All"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    disableRipple
                                                    tabIndex={-1}
                                                    onClick={() => handleToggle(28)}
                                                    checkedIcon={
                                                        <Check className={classes.checkedIcon}/>
                                                    }
                                                    icon={
                                                        <Check className={classes.uncheckedIcon}/>
                                                    }
                                                    classes={{
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }}
                                                />
                                            }
                                            classes={{label: classes.label}}
                                            label="Black"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    disableRipple
                                                    tabIndex={-1}
                                                    onClick={() => handleToggle(29)}
                                                    checkedIcon={
                                                        <Check className={classes.checkedIcon}/>
                                                    }
                                                    icon={
                                                        <Check className={classes.uncheckedIcon}/>
                                                    }
                                                    classes={{
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }}
                                                />
                                            }
                                            classes={{label: classes.label}}
                                            label="Blue"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    disableRipple
                                                    tabIndex={-1}
                                                    onClick={() => handleToggle(30)}
                                                    checkedIcon={
                                                        <Check className={classes.checkedIcon}/>
                                                    }
                                                    icon={
                                                        <Check className={classes.uncheckedIcon}/>
                                                    }
                                                    classes={{
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }}
                                                />
                                            }
                                            classes={{label: classes.label}}
                                            label="Brown"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    disableRipple
                                                    tabIndex={-1}
                                                    onClick={() => handleToggle(31)}
                                                    checkedIcon={
                                                        <Check className={classes.checkedIcon}/>
                                                    }
                                                    icon={
                                                        <Check className={classes.uncheckedIcon}/>
                                                    }
                                                    classes={{
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }}
                                                />
                                            }
                                            classes={{label: classes.label}}
                                            label="Gray"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    disableRipple
                                                    tabIndex={-1}
                                                    onClick={() => handleToggle(32)}
                                                    checkedIcon={
                                                        <Check className={classes.checkedIcon}/>
                                                    }
                                                    icon={
                                                        <Check className={classes.uncheckedIcon}/>
                                                    }
                                                    classes={{
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }}
                                                />
                                            }
                                            classes={{label: classes.label}}
                                            label="Green"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    disableRipple
                                                    tabIndex={-1}
                                                    onClick={() => handleToggle(33)}
                                                    checkedIcon={
                                                        <Check className={classes.checkedIcon}/>
                                                    }
                                                    icon={
                                                        <Check className={classes.uncheckedIcon}/>
                                                    }
                                                    classes={{
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }}
                                                />
                                            }
                                            classes={{label: classes.label}}
                                            label="Neutrals"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    disableRipple
                                                    tabIndex={-1}
                                                    onClick={() => handleToggle(34)}
                                                    checkedIcon={
                                                        <Check className={classes.checkedIcon}/>
                                                    }
                                                    icon={
                                                        <Check className={classes.uncheckedIcon}/>
                                                    }
                                                    classes={{
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }}
                                                />
                                            }
                                            classes={{label: classes.label}}
                                            label="Purple"
                                        />
                                    </div>
                                </div>
                            )
                        }
                    ]}
                />
            </CardBody>
        </Card>
    )
}
