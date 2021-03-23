import React from "react";
import {faHeart, faSearch, faShoppingCart, faUserAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style.css";
import FitMeLogo from "../../../assets/FitMeLogo.png";
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

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
            dropdownOpen: false,
            collapseOpen: false
        };
    }

    toggleDropdown() {
        this.setState({
            ...this.state,
            ...{
                dropdownOpen: !this.state.dropdownOpen
            }
        });
    }

    toggleNavbar() {
        this.setState({
            ...this.state,
            ...{
                collapseOpen: !this.state.collapseOpen
            }
        });
    }

    render() {
        return (
            <div className="container-fluid mx-4">
                <div className="row">
                    <Navbar type="light" expand="lg">
                        <NavbarToggler onClick={this.toggleNavbar} />

                        <div className="col-8 " >
                            <Collapse open={this.state.collapseOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink active href="#">
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
                        <img src={FitMeLogo} width={65}/>
                    </div>
                    <div className="col-7">
                        <Nav navbar className="ml-auto" style={{display : "flex",alignItems: "center" , justifyContent : "space-around" }}>
                            <InputGroup size="sm" seamless style={{width: 200}} >
                                <InputGroupAddon type="prepend">
                                    <InputGroupText>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <FormInput className="border-1" placeholder="Search..." />
                            </InputGroup>
                            <div className="d-flex justify-content-between" style={{width : 100}}>
                                <FontAwesomeIcon icon={faUserAlt} />
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <FontAwesomeIcon icon={faHeart} />
                            </div>

                        </Nav>

                        </div>
                    </Navbar>

                </div>




            </div>
        );
    }
}
