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

const Header = () => {
    const userAuthData = useSelector((state) => state.userLogin);


    const { userInfo } = userAuthData;





    return (
        <div className="container-fluid mx-4">
            <div className="row">
                <Navbar type="light" expand="lg">
                    <NavbarToggler />

                    <div className="col-5" >
                        <Collapse navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink acitve href="/">
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
                                {/*<Dropdown*/}
                                {/*    open={this.state.dropdownOpen}*/}
                                {/*    toggle={this.toggleDropdown}*/}
                                {/*>*/}
                                {/*    <DropdownToggle nav caret>*/}
                                {/*        Dropdown*/}
                                {/*    </DropdownToggle>*/}
                                {/*    <DropdownMenu>*/}
                                {/*        <DropdownItem>Action</DropdownItem>*/}
                                {/*        <DropdownItem>Another action</DropdownItem>*/}
                                {/*        <DropdownItem>Something else here</DropdownItem>*/}
                                {/*    </DropdownMenu>*/}
                                {/*</Dropdown>*/}
                            </Nav>
                        </Collapse>

                    </div>
                    <div className="d-flex col-7 justify-content-center" >
                        <img src={FitMeLogo} width={65} />
                    </div>
                    <div className="col-7">
                        <Nav navbar className="ml-auto" style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                            <InputGroup size="sm" seamless style={{ width: 200 }} >
                                <InputGroupAddon type="prepend">
                                    <InputGroupText>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <FormInput className="border-1" placeholder="Search..." />
                            </InputGroup>
                            <div className="d-flex justify-content-between" style={{ width: 100 }}>
                                {/*Dear Mohamed And Chiheb when someone Update this Msg Me Thanks <3 */}

                                {userInfo ? (

                                    <NavDropdown title={userInfo.name} id="username">
                                        <LinkContainer to="/profile">
                                            <NavDropdown.Item>profile</NavDropdown.Item>

                                        </LinkContainer>
                                        {/* cyrine part*/}
                                        <LinkContainer to="/order">
                                            <NavDropdown.Item>order</NavDropdown.Item>

                                        </LinkContainer>

                                        <LinkContainer to="/logout">
                                            <NavDropdown.Item>logout</NavDropdown.Item>

                                        </LinkContainer>

                                    </NavDropdown>
                                ) : (
                                    <NavLink acitve href="/login">
                                        <NavLink>
                                            <FontAwesomeIcon icon={faUserAlt} />

                                        </NavLink>
                                    </NavLink>

                                )}


                            </div>

                        </Nav>

                    </div>
                </Navbar>

            </div>




        </div>
    );
};

export default Header;