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
            You acknowledge that these Terms will apply to you when you access and use our services. Please stop using our Services if you disagree with any aspect of these Terms.
            </p>

            <h3 class="innertitlenew">Updates to Terms</h3>
            <p class="innernew">
            We may update these Terms from time to time, and you are responsible for reviewing changes. Your continued use of the Services after any updates indicates your acceptance of the revised Terms.
            </p>

            <h3 class="innertitlenew">Use of Services</h3>
            <p class="innernew">
            To access our Services, a minimum age requirement of 18 is mandated. We maintain the right to deny anybody access for any reason.
            </p>

            <h3 class="innertitlenew">Intellectual Property</h3>
            <p class="innernew">
            The content on our Site, including text, graphics, and trademarks, is owned or licensed by Brandclever and is protected by intellectual property laws.
            </p>

            <h3 class="innertitlenew">
            Termination of Use
            </h3>
            <p class="innernew">
            We reserve the right to terminate your access to the Site for any reason, including violation of these Terms. Suspected unlawful or abusive behavior may result in immediate termination and may be reported to law enforcement.
            </p>

            <h3 class="innertitlenew">Third-Party Sites</h3>
            <p class="innernew">
            Our Site may contain links to third-party websites. The policies and content of these websites are not our responsibility. Review their terms and privacy policies before using them.
            </p>
            <h3 class="innertitlenew">Maintaining User Data</h3>
            <p class="innernew">
            While we maintain certain user data, you are responsible for your data. We are not liable for any loss or corruption of data.
            </p>
            <h3 class="innertitlenew">Miscellaneous</h3>
            <p class="innernew">
            These Terms constitute the entire agreement between you and Brandclever. We may assign our rights and responsibilities. Between you and us, there isn't any agency, employment, partnership, or joint venture arrangement. <br/>
             Thank you for choosing Brandclever. If you have any questions, please contact us through our official channels.
            </p>
          </div>
        </div>
      </Container>
      </div>
    </div>
  )
}
