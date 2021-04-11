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
import {Link} from "react-router-dom";
import {useCart} from "../../../../hook/useCartHook";

const Header = () => {
    const userAuthData = useSelector((state) => state.userLogin);
    const {totCartItems} = useCart();


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
                                    <NavLink acitve={"true"} href="/">
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
                        <img src={FitMeLogo} width={65} />
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
                                    <Link to="/profile" className="notification">    <FontAwesomeIcon icon={faUserAlt} /></Link>
                                    <Link to="/shoppingCart" className="notification">    <FontAwesomeIcon icon={faShoppingCart} />{(totCartItems !==0 )?<span className="badge">{totCartItems}</span> :''}</Link>
                                    <Link to="" className="notification">    <FontAwesomeIcon icon={faHeart} /></Link>

                                </div>
                                <div >
                                    <NavDropdown title={userInfo.name} id="username" className="ml-4 " style={{color :"#7E69BA"}}>

                                        {/* cyrine part*/}
                                        {userInfo.role === "admin" || userInfo.role=== "seller" ? (
                                            <LinkContainer to="/order">
                                                <NavDropdown.Item>Dashboard</NavDropdown.Item>
                                            </LinkContainer> ) :
                                        (<></>)}
                                        <LinkContainer to="/profile">
                                            <NavDropdown.Item>Profile</NavDropdown.Item>

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
