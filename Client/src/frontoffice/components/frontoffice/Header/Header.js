import React from "react";
import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { faHeart, faSearch, faShoppingCart, faUserAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style.css";
import FitMeLogo from "../../../assets/FitMeLogo.png";
import { useSelector } from "react-redux";

import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Collapse
} from "shards-react";
import {Button} from "bootstrap";

const Header = () => {
    const userAuthData = useSelector((state) => state.userLogin)
    const { userInfo } = userAuthData;
    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar type="light" expand="lg">
                    <NavbarToggler />
                    <div className="col-5" >
                        <Collapse navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink acitve="true" href="/">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink active href="#">
                                        Clothes
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink active href="#">
                                        Collections
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink active href="#">
                                        Wardrobe
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                    <div className="d-flex col-3 ml-5" >
                        <img src={FitMeLogo} alt="FitMe Logo" width={65} />
                    </div>
                    <div className="col-3 d-flex justify-content-around ml-5">
                        <div>
                            <Nav navbar className="d-flex mt-3">
                                <InputGroup size="sm"  style={{ width: 200 }} >
                                    <InputGroupAddon type="prepend">
                                        <InputGroupText>
                                            <FontAwesomeIcon icon={faSearch} />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <FormInput className="border-1" placeholder="Search..." />
                                </InputGroup>
                            </Nav>
                        </div>
                        {/*Dear Mohamed And Chiheb when someone Update this Msg Me Thanks <3 */}
                        {userInfo ? (
                            <div className="d-flex justify-content-around mt-3">
                                <div className="d-flex justify-content-between mt-2 ml-3" style={{width : 100}}>
                                    <FontAwesomeIcon icon={faUserAlt} />
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                                <div >
                                    <NavDropdown title={userInfo.name} id="username" className="ml-4 ">
                                        {/* cyrine part*/}
                                        <LinkContainer to="/order">
                                            <NavDropdown.Item>order</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/logout">
                                            <NavDropdown.Item>logout</NavDropdown.Item>
                                        </LinkContainer>
                                    </NavDropdown>
                                </div>
                            </div>
                        ) : (
                            <NavLink  href="/login">
                                <NavLink>
                                    <button type="button" className="btn btn-outline-info">Connect</button>
                                </NavLink>
                            </NavLink>
                        )}
                    </div>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;
