import React from 'react'
import "../../css/services.css"

function Services() {
    return (
        <div className= "container">
            <h1 > OUR SERVICES</h1>
            <div className="row row-30">
                <div className="col-sm-6 col-lg-4">
                   <div className="box">
                       <div className="boxed  flex-column flex-md-row text-md-left flex-lg-column text-lg-center flex-xl-row ">
                        <div className="box-icon">
                    <div class="unit-body">
                    <h5 class="box-icon-classic-title"><a href="#">Personalized Matching</a></h5>
                    <p class="box-icon-classic-text">Our unique matching system lets you find just the tour you want for your next holiday.</p>
                  </div>
                        </div>
                       </div>
                   </div>

                </div>

            </div>
        </div>
    )
}

export default Services;