import React from "react";
import logoWhite from "../../assets/logo/logo2.png";
import "./Footer.css";
import facebookicon from "../../assets/face.png";
import instagarmicon from "../../assets/instagram.png";
import { Link } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="footer">
      <div className="logofooter">
        <Link to="/">
        <img src={logoWhite} alt="" className="footer_logo" />
        </Link>
      </div>
      <div className="menufooter">
        <div>
          <ul className="menu-list">
            <li>
              <Link className="menu-list-link" to={"/"}>
                home
              </Link>{" "}
            </li>
            <li>
              <Link className="menu-list-link" to={"/aboutus"}>
                {" "}
                about us
              </Link>{" "}
            </li>
            <li>
              <Link className="menu-list-link" to={"/products"}>
                our Products
              </Link>
            </li>
            <li>
              <Link className="menu-list-link" to={"/our-brand"}>
                our brands
              </Link>
            </li>
            <li>
              <Link className="menu-list-link" to={"/contactus"}>
                contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className="iconfooter">
          <div>
            <img src={instagarmicon} alt=" instagram icon" />
          </div>
          <div>
            <img src={facebookicon} alt="facebook icon" />
          </div>
        </div> */}
      </div>
      <div className="contactfooter">
        <div className="footerHeading">
          <IoLocationOutline />
          <div className="footerDetail">
            Obitz Group Building No. 12, Street 123, Zone 123, ,Qatar
          </div>
        </div>

        <div className="footerHeading">
          <IoCallOutline />
          <div className="footerDetail">+974 1234567</div>
        </div>

        <div className="footerHeading">
          <BsWhatsapp />
          <div className="footerDetail">+974 1234567</div>
        </div>

        <div className="footerHeading">
          <IoMailOutline />
          <div className="footerDetail">info@orbitz-group.com</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
