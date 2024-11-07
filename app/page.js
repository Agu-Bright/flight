import "./globals.css";

export default function Home() {
  return (
    <>
      <header id="header">
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
                  <a href="index.html">Home</a>
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

      <section className="banner-area relative">
        <div className="overlay overlay-bg"></div>
        <div className="container">
          <div className="row fullscreen align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6 banner-left">
              <h6 className="text-white">Away from monotonous life</h6>
              <h1 className="text-white">Magical Travel</h1>
              <p className="text-white">
                If you are looking at blank cassettes on the web, you may be
                very confused at the difference in price. You may see some for
                as low as $.17 each.
              </p>
              <a href="#" className="primary-btn text-uppercase">
                Get Started
              </a>
            </div>
            <div className="col-lg-4 col-md-6 banner-right">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="flight-tab"
                    data-toggle="tab"
                    href="#flight"
                    role="tab"
                    aria-controls="flight"
                    aria-selected="true"
                  >
                    Flights
                  </a>
                </li>
                <li className="nav-item">
                  {/* <a
                    className="nav-link"
                    id="hotel-tab"
                    data-toggle="tab"
                    href="#hotel"
                    role="tab"
                    aria-controls="hotel"
                    aria-selected="false"
                  >
                    Hotels
                  </a> */}
                </li>
                <li className="nav-item">
                  {/* <a
                    className="nav-link"
                    id="holiday-tab"
                    data-toggle="tab"
                    href="#holiday"
                    role="tab"
                    aria-controls="holiday"
                    aria-selected="false"
                  >
                    Holidays
                  </a> */}
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="flight"
                  role="tabpanel"
                  aria-labelledby="flight-tab"
                >
                  <form className="form-wrap">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="From "
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'From '"
                    />
                    <input
                      type="text"
                      className="form-control"
                      name="to"
                      placeholder="To "
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'To '"
                    />
                    <input
                      type="text"
                      className="form-control date-picker"
                      name="start"
                      placeholder="Start "
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Start '"
                    />
                    <input
                      type="text"
                      className="form-control date-picker"
                      name="return"
                      placeholder="Return "
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Return '"
                    />
                    <input
                      type="number"
                      min="1"
                      max="20"
                      className="form-control"
                      name="adults"
                      placeholder="Adults "
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Adults '"
                    />
                    <input
                      type="number"
                      min="1"
                      max="20"
                      className="form-control"
                      name="child"
                      placeholder="Child "
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Child '"
                    />
                    <a href="#" className="primary-btn text-uppercase">
                      Search flights
                    </a>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="hotel"
                  role="tabpanel"
                  aria-labelledby="hotel-tab"
                >
                  <form className="form-wrap">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="From "
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'From '"
                    />
                    <input
                      type="text"
                      className="form-control"
                      name="to"
                      placeholder="To "
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'To '"
                    />
                    <input
                      type="text"
                      className="form-control date-picker"
                      name="start"
                      placeholder="Start "
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Start '"
                    />
                    <input
                      type="text"
                      className="form-control date-picker"
                      name="return"
                      placeholder="Return "
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Return '"
                    />
                    <input
                      type="number"
                      min="1"
                      max="20"
                      className="form-control"
                      name="adults"
                      placeholder="Adults "
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Adults '"
                    />
                    <input
                      type="number"
                      min="1"
                      max="20"
                      className="form-control"
                      name="child"
                      placeholder="Child "
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Child '"
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
                      onblur="this.placeholder = 'From '"
                    />
                    <input
                      type="text"
                      className="form-control"
                      name="to"
                      placeholder="To "
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'To '"
                    />
                    <input
                      type="text"
                      className="form-control date-picker"
                      name="start"
                      placeholder="Start "
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Start '"
                    />
                    <input
                      type="text"
                      className="form-control date-picker"
                      name="return"
                      placeholder="Return "
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Return '"
                    />
                    <input
                      type="number"
                      min="1"
                      max="20"
                      className="form-control"
                      name="adults"
                      placeholder="Adults "
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Adults '"
                    />
                    <input
                      type="number"
                      min="1"
                      max="20"
                      className="form-control"
                      name="child"
                      placeholder="Child "
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Child '"
                    />
                    <a href="#" className="primary-btn text-uppercase">
                      Search Holidays
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="popular-destination-area section-gap">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-8">
              <div className="title text-center">
                <h1 className="mb-10">Popular Destinations</h1>
                <p>
                  We all live in an age that belongs to the young at heart. Life
                  that is becoming extremely fast, day.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="single-destination relative">
                <div className="thumb relative">
                  <div className="overlay overlay-bg"></div>
                  <img className="img-fluid" src="img/d1.jpg" alt="" />
                </div>
                <div className="desc">
                  <a href="#" className="price-btn">
                    &#8358;150,000
                  </a>
                  <h4>Abuja</h4>
                  <p>Paraguay</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-destination relative">
                <div className="thumb relative">
                  <div className="overlay overlay-bg"></div>
                  <img className="img-fluid" src="img/d2.jpg" alt="" />
                </div>
                <div className="desc">
                  <a href="#" className="price-btn">
                    &#8358;250,000
                  </a>
                  <h4>Lagos</h4>
                  <p>Victoria Island</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-destination relative">
                <div className="thumb relative">
                  <div className="overlay overlay-bg"></div>
                  <img className="img-fluid" src="img/d3.jpg" alt="" />
                </div>
                <div className="desc">
                  <a href="#" className="price-btn">
                    &#8358;100,000
                  </a>
                  <h4>Enugu State</h4>
                  <p>New Heaven</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
