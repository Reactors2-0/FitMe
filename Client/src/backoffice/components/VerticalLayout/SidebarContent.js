import PropTypes from "prop-types"
import React, { Component } from "react"

//Simple bar
import SimpleBar from "simplebar-react"
// MetisMenu
import MetisMenu from "metismenujs"
import { Link } from "react-router-dom"
import { withRouter } from "react-router";
class SidebarContent extends Component {
  constructor(props) {
    super(props)
    this.refDiv = React.createRef();
  }
  UNSAFE_componentWillMount(){
  }
  componentDidMount() {
    this.initMenu();
  }
  componentDidUpdate(prevProps, prevState, ss) {
    if (this.props.type !== prevProps.type) {
      this.initMenu()
    }
  }
  initMenu() {
    new MetisMenu("#side-menu")
    let matchingMenuItem = null
    const ul = document.getElementById("side-menu")
    const items = ul.getElementsByTagName("a")
    for (let i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem)
    }
  }
  scrollElement = item => {
    setTimeout(() => {
      if (this.refDiv.current !== null) {
        if (item) {
          const currentPosition = item.offsetTop
          if (currentPosition > window.innerHeight) {
            if (this.refDiv.current)
              this.refDiv.current.getScrollElement().scrollTop =
                  currentPosition - 300
          }
        }
      }
    }, 300)
  }
  activateParentDropdown = item => {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }
    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement
      if (parent2) {
        parent2.classList.add("mm-show") // ul tag
        const parent3 = parent2.parentElement // li tag
        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      this.scrollElement(item)
      return false
    }
    this.scrollElement(item)
    return false
  }

  render() {
    const userRole = localStorage.getItem("userInfo").role;
    const redirectTo = userRole === "admin" ? "admin" : "seller";
    return (
      <React.Fragment>
        <SimpleBar style={{ maxHeight: "100%" }} ref={this.refDiv}>
          <div id="sidebar-menu">
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title">Dashbord</li>
              <li>
                <Link to={"/dashboard/" + redirectTo } className="waves-effect">
                  <i className="bx bx-home-circle" />
                  <span className="badge rounded-pill bg-info float-end">
                    04
                  </span>
                  <span>Dashboard</span>
                </Link>
              </li>
              { userRole === "admin" ? (
                  <>
                    <li>
                      <Link to="/dashboard/admin/Repondre" className=" waves-effect">
                        <i className="bx bx-envelope"/>
                        <span>Contact</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard/admin/Category" className=" waves-effect">
                        <i className="bx bx-duplicate" />
                        <span>Category</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard/admin/userlist" className=" waves-effect">
                        <i className="bx bx-user-circle" />
                        <span>Users</span>
                      </Link>
                    </li>
                  </>
              ):(
                  <>
                    <li>
                      <Link to="/dashboard/admin/Products" className=" waves-effect">
                        <i className="bx bx-store" />
                        <span>Products</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard/admin/Order" className=" waves-effect">
                        <i className="bx bx-file" />
                        <span>Orders</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard/admin/Brand" className=" waves-effect">
                        <i className="bx bxs-user-detail" />
                        <span>Brand</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard/admin/Repondre" className=" waves-effect">
                        <i className="bx bx-envelope"/>
                        <span>Contact</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard/admin/Category" className=" waves-effect">
                        <i className="bx bx-duplicate" />
                        <span>Category</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard/admin/userlist" className=" waves-effect">
                        <i className="bx bx-user-circle" />
                        <span>Users</span>
                      </Link>
                    </li>
                  </>
              )}
              {}
            </ul>
          </div>
        </SimpleBar>
      </React.Fragment>
    )
  }
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
  type: PropTypes.string,
}

export default withRouter(SidebarContent)
