function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="text-center text-lg-start bg-dark text-muted">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">iCars</h6>
                <p>
                  "Welcome to iCars, your trusted destination for premium
                  automobiles. At iCars, we are passionate about delivering the
                  ultimate driving experience to our valued customers. With a
                  wide range of meticulously curated vehicles, we bring together
                  luxury, performance, and innovation."
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Cars
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    SUVs
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset"></a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Charging Units
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Batteries
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Manufactutrers</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Nissan
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Toyota
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Honda
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    BMW
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Audi
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@icars.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 888
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 889
                </p>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
        {/* <!-- Section: Links  --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright: @FaiqueMZM
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
}

export default Footer;
