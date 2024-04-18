import React, { Component } from 'react'
import TopHeader from '../components/TopHeader';
import { Rating } from '@mui/material';
import reviews from '../data/ClientReview.json'

export default class Review extends Component {

  render() {

    return (
      <>
        <div className='review_clint'>
          <div className='review-page'>
            <div className='review-page-inner'>
              <TopHeader title="Client's Review and Feedback" description=
                "Discover what our clients have to say. Dive into insightful reviews and valuable feedback from satisfied customers, guiding you towards making informed decisions with confidence."
              />
            </div>
            <div className='reviw_colms'>
              <div className='container'>
                <h1 className='rev_hi'>Testimonial</h1>
                <div className='testi_row'>
                  <div className='row'>
                    {
                      reviews.data.map((ele, key) => {
                        return (

                          <div className='col-md-4' key={key}>
                            <div className='review-testo'>
                              <div className='Testmono_clint'>
                                <div className='icon_client'>
                                  <span class="icon">“</span>
                                </div>
                                <div className='tstim_ine'>
                                  <p>{ele.review}
                                  </p>
                                  <div className='clint_name_star'>
                                    <div className='clint_name'>
                                      <h3>{ele.name}</h3>
                                      <p>{ele.country}</p>
                                    </div>
                                    <div className='star_clint'>
                                      <Rating value={ele.rating} readOnly />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
      </>
    )
  }
}
