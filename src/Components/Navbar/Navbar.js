import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

import {
  TiSocialTwitter,
  TiSocialVimeo,
  TiSocialYoutube,
} from "react-icons/ti";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { BiSearch, BiUser, BiCart } from "react-icons/bi";

import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <>
      <div style={{ padding: "0 4rem" }}>
        <div className="socials">
          <TiSocialTwitter className="icons" size={27} />
          <TiSocialVimeo className="icons" size={27} />
          <TiSocialYoutube
            style={{ marginRight: "1.3rem" }}
            className="icons"
            size={27}
          />
          <FaInstagram
            style={{ marginRight: "1.3rem" }}
            className="icons"
            size={24}
          />
          <FaFacebook className="icons" size={24} />
        </div>
        <div className="seperator"></div>
        <div className="nav">
          <div>
            <img className="img" src={logo} alt="logo" />
          </div>

          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Men
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Women
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Kids
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                New
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Sale
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Popular
              </Link>
            </li>
          </ul>
          <div className="other-section">
            <BiSearch className="icons" size={25} />
            <BiUser className="icons" size={25} />
            <BiCart size={25} />
          </div>
        </div>
        <div className="seperator"></div>
      </div>
    </>
  );
}
