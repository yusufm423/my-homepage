import React from 'react'

export default function Footer() {
    return (
        <div>
            {/* <!-- Footer --> */}
        <div className="page-footer text-center text-lg-start bg-dark text-muted" style={{width:"100%",bottom:"0",position:"relative"}}>
          {/* <!-- Section: Social media --> */}
          <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" >
            {/* <!-- Left --> */}
            <div className="me-5  d-lg-block">
              <span>This website is currently under development. Please co-operate.</span>
            </div>
          </div>
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <div className="">
            <div className="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Team Name
                  </h6>
                  <p>
                    Minor Project B.Tech. 3rd year Computer Engineering 
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Developed by-
                  </h6>
                  <p>
                    Mohammad Yusuf
                  </p>
                  <p>
                    Mohd Naved Khan
                  </p>
                  
                 
                </div>
                
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                  Contact
                  </h6>
                  <p><i className="text-reset"></i>ZHCET,AMU Aligarh</p>
                  <p>
                    <i className="text-reset"></i>
                    hello@example.com
                  </p>
                  <p><i className="text-reset"></i> +91 9999 99999</p>
                  <p><i className="text-reset"></i> +91 9999 99999</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}
