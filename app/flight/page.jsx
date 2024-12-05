// import "./globals.css";
"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Link from "next/link";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function BasicModal({ open, setOpen }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="flight"
              role="tabpanel"
              aria-labelledby="flight-tab"
            >
              <form className="form-wrap">
                <select
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="From "
                  onfocus="this.placeholder = ''"
                >
                  <option>Abia State</option>
                  <option>Abuja</option>
                  <option>Adamawa State</option>
                  <option>Akwa Ibom State</option>
                  <option>Anambara State</option>
                  <option>Bauchi State</option>
                  <option>Bayelsa State</option>
                  <option>Benue State</option>
                  <option>Borno State</option>
                  <option>Cross River State</option>
                  <option>Delta State</option>
                  <option>Edo State</option>
                  <option>Ekiti State</option>
                  <option>Enugu State</option>
                  <option>Gombe State</option>
                  <option>Imo State</option>
                  <option>Jigawa State</option>
                  <option>kaduna State</option>
                  <option>Kastina State</option>
                  <option>Kebi State</option>
                  <option>Kwara State</option>
                  <option>Lagos State</option>
                  <option>Niger State</option>
                  <option>Ogun State</option>
                  <option>Ondo State</option>
                  <option>Osun State</option>
                  <option>Oyo State</option>
                  <option>Plateu State</option>
                  <option>Rivers State</option>
                  <option>Sokoto State</option>
                  <option>Taraba State</option>
                  <option>Zamfara State</option>
                </select>
                <select
                  type="text"
                  className="form-control mt-2"
                  name="to"
                  placeholder="To "
                  onfocus="this.placeholder = ''"
                >
                  <option>Abia State</option>
                  <option>Abuja</option>
                  <option>Adamawa State</option>
                  <option>Akwa Ibom State</option>
                  <option>Anambara State</option>
                  <option>Bauchi State</option>
                  <option>Bayelsa State</option>
                  <option>Benue State</option>
                  <option>Borno State</option>
                  <option>Cross River State</option>
                  <option>Delta State</option>
                  <option>Edo State</option>
                  <option>Ekiti State</option>
                  <option>Enugu State</option>
                  <option>Gombe State</option>
                  <option>Imo State</option>
                  <option>Jigawa State</option>
                  <option>kaduna State</option>
                  <option>Kastina State</option>
                  <option>Kebi State</option>
                  <option>Kwara State</option>
                  <option>Lagos State</option>
                  <option>Niger State</option>
                  <option>Ogun State</option>
                  <option>Ondo State</option>
                  <option>Osun State</option>
                  <option>Oyo State</option>
                  <option>Plateu State</option>
                  <option>Rivers State</option>
                  <option>Sokoto State</option>
                  <option>Taraba State</option>
                  <option>Zamfara State</option>
                </select>
                <input
                  type="date"
                  className="form-control date-picker mt-2"
                  name="start"
                  placeholder="Start "
                  onfocus="this.placeholder = ''"
                />

                <input
                  type="number"
                  min="1"
                  max="20"
                  className="form-control mt-2"
                  name="adults"
                  placeholder="Adults "
                  onfocus="this.placeholder = ''"
                />
                <input
                  type="number"
                  min="1"
                  max="20"
                  className="form-control mt-2"
                  name="child"
                  placeholder="Child "
                  onfocus="this.placeholder = ''"
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Link
                    href="/flight"
                    className="primary-btn text-uppercase mt-3"
                  >
                    Creat Ticket{" "}
                  </Link>
                </div>
              </form>
            </div>
            <div
              className="tab-pane fade mt-2"
              id="hotel"
              role="tabpanel"
              aria-labelledby="hotel-tab"
            >
              <form className="form-wrap">
                <input
                  type="text"
                  className="form-control mt-2"
                  name="name"
                  placeholder="From "
                  onfocus="this.placeholder = ''"
                />
                <input
                  type="text"
                  className="form-control mt-2"
                  name="to"
                  placeholder="To "
                  onfocus="this.placeholder = ''"
                />
                <input
                  type="text"
                  className="form-control date-picker mt-2"
                  name="start"
                  placeholder="Start "
                  onfocus="this.placeholder = ''"
                />
                <input
                  type="text"
                  className="form-control date-picker mt-2"
                  name="return"
                  placeholder="Return "
                  onfocus="this.placeholder = ''"
                />
                <input
                  type="number"
                  min="1"
                  max="20"
                  className="form-contro mt-2l"
                  name="adults"
                  placeholder="Adults "
                  onfocus="this.placeholder = ''"
                />
                <input
                  type="number"
                  min="1"
                  max="20"
                  className="form-control"
                  name="child"
                  placeholder="Child "
                  onfocus="this.placeholder = ''"
                />
                <a href="#" className="primary-btn text-uppercase">
                  Search Hotels
                </a>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="holiday"
              role="tabpanel"
              aria-labelledby="holiday-tab"
            >
              <form className="form-wrap">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="From "
                  onfocus="this.placeholder = ''"
                />
                <input
                  type="text"
                  className="form-control"
                  name="to"
                  placeholder="To "
                  onfocus="this.placeholder = ''"
                />
                <input
                  type="text"
                  className="form-control date-picker"
                  name="start"
                  placeholder="Start "
                  onfocus="this.placeholder = ''"
                />
                <input
                  type="text"
                  className="form-control date-picker"
                  name="return"
                  placeholder="Return "
                  onfocus="this.placeholder = ''"
                />
                <input
                  type="number"
                  min="1"
                  max="20"
                  className="form-control"
                  name="adults"
                  placeholder="Adults "
                  onfocus="this.placeholder = ''"
                />
                <input
                  type="number"
                  min="1"
                  max="20"
                  className="form-control"
                  name="child"
                  placeholder="Child "
                  onfocus="this.placeholder = ''"
                />
                <a href="#" className="primary-btn text-uppercase">
                  Search Holidays
                </a>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header id="header" style={{ background: "black" }}>
        <div className="header-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6 col-6 header-top-left">
                <ul>
                  <li>
                    <a href="#">Visit Us</a>
                  </li>
                  <li>
                    <a href="#">Buy Tickets</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-sm-6 col-6 header-top-right">
                <div className="header-social">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container main-menu">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <a href="index.html">
                <img src="img/logo.png" alt="" title="" />
              </a>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="packages.html">Packages</a>
                </li>

                <li>
                  <a href="insurance.html">Insurence</a>
                </li>
                <li className="menu-has-children">
                  <a href="">Blog</a>
                  <ul>
                    <li>
                      <a href="blog-home.html">Blog Home</a>
                    </li>
                    <li>
                      <a href="blog-single.html">Blog Single</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-has-children">
                  <a href="">Pages</a>
                  <ul>
                    <li>
                      <a href="elements.html">Elements</a>
                    </li>
                    <li className="menu-has-children">
                      <a href="">Level 2 </a>
                      <ul>
                        <li>
                          <a href="#">Item One</a>
                        </li>
                        <li>
                          <a href="#">Item Two</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section
        className="other-issue-area section-gap"
        style={{ marginTop: "30vh" }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-9">
              <div className="title text-center">
                <h1 className="mb-10">Available Flight Search Result</h1>
                <p>
                  We all live in an age that belongs to the young at heart. Life
                  that is.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-other-issue">
                <div className="thumb">
                  <img className="img-fluid" src="img/peace.jpg" alt="" />
                </div>
                <a href="#">
                  <h4>Air Peace</h4>
                </a>
                <p>
                  <span style={{ fontWeight: "800" }}> Flight Number:</span>{" "}
                  1098
                </p>
                <p>
                  <span style={{ fontWeight: "800" }}> Departure:</span> 10:25
                  am
                </p>
                <p>
                  <span style={{ fontWeight: "800" }}>City:</span> Lagos
                </p>
                <p>
                  <span style={{ fontWeight: "800" }}>Destination :</span> Abuja
                </p>
                <button
                  style={{
                    border: "none",
                    borderRadius: "5px",
                    background: "#F8B600",
                    color: "white ",
                  }}
                >
                  Buy Ticket
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-other-issue">
                <div className="thumb">
                  <img className="img-fluid" src="img/arik.jpeg" alt="" />
                </div>
                <a href="#">
                  <h4>Arik Air</h4>
                </a>
                <p>
                  <span style={{ fontWeight: "800" }}> Flight Number:</span>{" "}
                  1098
                </p>
                <p>
                  <span style={{ fontWeight: "800" }}> Departure:</span> 10:25
                  am
                </p>
                <p>
                  <span style={{ fontWeight: "800" }}>City:</span> Lagos
                </p>
                <p>
                  <span style={{ fontWeight: "800" }}>Destination :</span> Abuja
                </p>
                <button
                  style={{
                    border: "none",
                    borderRadius: "5px",
                    background: "#F8B600",
                    color: "white ",
                  }}
                >
                  Buy Ticket
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-other-issue">
                <div className="thumb">
                  <img className="img-fluid" src="img/ibom.jpeg" alt="" />
                </div>
                <a href="#">
                  <h4>Ibom Air</h4>
                </a>
                <p>
                  <span style={{ fontWeight: "800" }}> Flight Number:</span>{" "}
                  1098
                </p>
                <p>
                  <span style={{ fontWeight: "800" }}> Departure:</span> 10:25
                  am
                </p>
                <p>
                  <span style={{ fontWeight: "800" }}>City:</span> Lagos
                </p>
                <p>
                  <span style={{ fontWeight: "800" }}>Destination :</span> Abuja
                </p>
                <button
                  onClick={() => setOpen(true)}
                  style={{
                    border: "none",
                    borderRadius: "5px",
                    background: "#F8B600",
                    color: "white ",
                  }}
                >
                  Buy Ticket
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-other-issue">
                <div className="thumb">
                  <img className="img-fluid" src="img/max.jpg" alt="" />
                </div>
                <a href="#">
                  <h4>Max Air</h4>
                </a>
                <p>
                  <span style={{ fontWeight: "800" }}> Flight Number:</span>{" "}
                  1098
                </p>
                <p>
                  <span style={{ fontWeight: "800" }}> Departure:</span> 10:25
                  am
                </p>
                <p>
                  <span style={{ fontWeight: "800" }}>City:</span> Lagos
                </p>
                <p>
                  <span style={{ fontWeight: "800" }}>Destination :</span> Abuja
                </p>

                <button
                  style={{
                    border: "none",
                    borderRadius: "5px",
                    background: "#F8B600",
                    color: "white ",
                  }}
                >
                  Buy Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>About Agency</h6>
                <p>
                  The world has become so fast paced that people don’t want to
                  stand by reading a page of information, they would much rather
                  look at a presentation and understand the message. It has come
                  to a point
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Navigation Links</h6>
                <div className="row">
                  <div className="col">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Feature</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Portfolio</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul>
                      <li>
                        <a href="#">Team</a>
                      </li>
                      <li>
                        <a href="#">Pricing</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Newsletter</h6>
                <p>
                  For business professionals caught between high OEM price and
                  mediocre print and graphic output.
                </p>
                <div id="mc_embed_signup">
                  <form
                    target="_blank"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                    method="get"
                    className="subscription relative"
                  >
                    <div className="input-group d-flex flex-row">
                      <input
                        name="EMAIL"
                        placeholder="Email Address"
                        onfocus="this.placeholder = ''"
                        required=""
                        type="email"
                      />
                      <button className="btn bb-btn">
                        <span className="lnr lnr-location"></span>
                      </button>
                    </div>
                    <div className="mt-10 info"></div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget mail-chimp">
                <h6 className="mb-20">InstaFeed</h6>
                <ul className="instafeed d-flex flex-wrap">
                  <li>
                    <img src="img/i1.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/i2.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/i3.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/i4.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/i5.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/i6.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/i7.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/i8.jpg" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row footer-bottom d-flex justify-content-between align-items-center">
            <p className="col-lg-8 col-sm-12 footer-text m-0">
              Copyright &copy; All rights reserved | This template is made with
              <i className="fa fa-heart-o" aria-hidden="true"></i> by
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
            </p>
            <div className="col-lg-4 col-sm-12 footer-social">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-dribbble"></i>
              </a>
              <a href="#">
                <i className="fa fa-behance"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <BasicModal open={open} setOpen={setOpen} />
    </>
  );
}
