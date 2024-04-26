import React from 'react'
import TopHeader from '../components/TopHeader'
import { Container } from 'react-bootstrap'

export default function PrivacyPolicy() {
  return (
    <div className='policy_con_sec'>
      <TopHeader title={"Privacy & Policy"} description="We prioritize your privacy and are committed to protecting your personal information. Our Policy and Privacy section outlines how we collect, use, and safeguard your data, ensuring transparency and security. Learn about your rights and how we maintain the confidentiality of your information."/>
      <Container>
        <div class="privacy_policy_main">
          <div class="inner_content_new">
            <h3 class="innertitlenew">Your Information is secure with us</h3>
            <p class="innernew">
              We only collect personal information to maintain the service. The
              information included such as name, email address, and contact details
              to effectively communicate with clients, respond to inquiries, and
              provide our services. This helps us deliver a personalized experience
              and maintain a professional relationship with our clients.
            </p>

            <h3 class="innertitlenew">Use of Cookies and Tracking Technologies</h3>
            <p class="innernew">
              We use cookies and tracking technologies to enhance user experience,
              analyze website traffic, and customize content based on user
              preferences. This allows us to optimize our website and marketing
              campaigns, ensuring they are relevant and customized to individual
              needs.
            </p>

            <h3 class="innertitlenew">Your data security is our commitment</h3>
            <p class="innernew">
              We implement strict security measures to protect personal information
              from unauthorized access, misuse, or disclosure. This includes
              encryption, firewalls, regular system updates, and staff training to
              ensure the confidentiality and integrity of the data we handle.
            </p>

            <h3 class="innertitlenew">Updates to the Privacy Policy</h3>
            <p class="innernew">
              We recommend checking the policy regularly for any modifications. We
              will notify users of any material changes and obtain consent where
              required.
            </p>

            <h3 class="innertitlenew">
              We get your personal info straight from you in a few ways:
            </h3>
            <p class="innernew">
              1. When you ask for website Audits. <br />
              2. When you sign up for our newsletter. <br />
              3.When you ask for web consulting or choose any service through our
              special pages. <br />
              4.When you fill out the Contact Form and give us info.
            </p>

            <h3 class="innertitlenew">Manish Verma (Managing Director)</h3>
            <p class="innernew">
              Email: career@brandclever.in <br />
              Website: https://brandclever.in/ <br />
              Phone: +91-9872711866 <br />
              Address: 4th Floor, F-301, Bansal Tower, Phase 8B, Industrial Area,
              Sector 74, Brandclever, Sahibzada Ajit Singh Nagar, Punjab 160055
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
