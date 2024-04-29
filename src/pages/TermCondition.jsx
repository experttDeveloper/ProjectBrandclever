import React from 'react'
import { Container, Row } from 'react-bootstrap'
import TopHeader from '../components/TopHeader'

export default function TermCondition() {
  return (
    <div className='term_con_sec'>
      <TopHeader title={"Term & Conditions"} description="Brandclever is your global partner for web development and digital marketing. As a leading website design and development service, we excel at creating innovative, modern, and user-friendly e-commerce sites with platforms like Shopify, Wix, Webflow, and BigCommerce."
      />
      <div className='main_term_condtion'>
        <Container>
          <div class="privacy_policy_main">
            <div class="inner_content_new">
              <h3 class="innertitlenew">Agreement to Terms</h3>
              <p class="innernew">
                By accessing and using our services, you agree to be bound by these Terms. If you do not agree with any part of the Terms, please discontinue using our services.
              </p>

              <h3 class="innertitlenew">Updates to Terms</h3>
              <p class="innernew">
                We reserve the right to update these Terms periodically, and it's your responsibility to review any changes. By continuing to use the Services after any updates, you indicate your acceptance of the revised Terms.
              </p>

              <h3 class="innertitlenew">Use of Services</h3>
              <p class="innernew">
                Access to our Services is restricted to individuals who are at least 18 years old. We reserve the right to deny access to anyone for any reason.
              </p>

              <h3 class="innertitlenew">Intellectual Property</h3>
              <p class="innernew">
                All content on our Site, including text, graphics, and trademarks, is either owned or licensed by Brandclever and is protected by intellectual property laws.
              </p>

              <h3 class="innertitlenew">
                Termination of Use
              </h3>
              <p class="innernew">
                We reserve the right to terminate your access to the Site for any reason, including violation of these Terms. Suspected unlawful or abusive behavior may result in immediate termination, and such behavior may be reported to law enforcement authorities.
              </p>

              <h3 class="innertitlenew">Third-Party Sites</h3>
              <p class="innernew">
                Our Site may include links to third-party websites. We do not take responsibility for the content or policies of these sites. Please review their terms of use and privacy policies before interacting with them.
              </p>
              <h3 class="innertitlenew">Maintaining User Data</h3>
              <p class="innernew">
                Although we retain some user data, it's ultimately your responsibility to safeguard your information. We are not responsible for any loss or corruption of your data.
              </p>
              <h3 class="innertitlenew">Miscellaneous</h3>
              <p class="innernew">
                These Terms form the entire agreement between you and Brandclever. We reserve the right to transfer our rights and responsibilities under this agreement. Please note that there is no agency, employment, partnership, or joint venture relationship between us. <br />
                Thank you for choosing Brandclever. For any questions, please contact us through our official communication channels.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
