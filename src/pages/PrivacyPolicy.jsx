import React from 'react'
import TopHeader from '../components/TopHeader'
import { Container } from 'react-bootstrap'

export default function PrivacyPolicy() {
  return (
    <div className='policy_con_sec'>
      <TopHeader title={"Privacy & Policy"} description="We prioritize your privacy and are committed to protecting your personal information. Our Policy and Privacy section outlines how we collect, use, and safeguard your data, ensuring transparency and security. Learn about your rights and how we maintain the confidentiality of your information." />
      <div className='main_term_condtion'>
        <Container>
          <div class="privacy_policy_main">
            <div class="inner_content_new">
              <h3 class="innertitlenew">Your Information is secure with us</h3>
              <p class="innernew">
                We gather personal information solely for providing and maintaining our services. This may include your name, email address, and contact information, allowing us to communicate with you, respond to your questions, and deliver our services effectively. This approach helps us create a customized experience and foster a professional relationship with our clients.
              </p>

              <h3 class="innertitlenew">Use of Cookies and Tracking Technologies</h3>
              <p class="innernew">
                We employ cookies and tracking technologies to improve your experience, analyze site traffic, and personalize content according to your preferences. This helps us fine-tune our website and marketing efforts to be more relevant and tailored to your specific needs.
              </p>

              <h3 class="innertitlenew">Your data security is our commitment</h3>
              <p class="innernew">
                We enforce rigorous security protocols to safeguard personal information from unauthorized access, misuse, or disclosure. Our security measures include encryption, firewalls, frequent system updates, and comprehensive staff training to maintain the confidentiality and integrity of the data we manage.
              </p>

              <h3 class="innertitlenew">Updates to the Privacy Policy</h3>
              <p class="innernew">
                We suggest reviewing our policy regularly to stay updated on any changes. If we make significant modifications, we'll inform users and seek consent when necessary.
              </p>

              <h3 class="innertitlenew">
                We get your personal info straight from you in a few ways:
              </h3>
              <p class="innernew">
                1. When you request a website audit. <br />
                2. When you subscribe to our newsletter. <br />
                3. When you seek web consulting or select a service from our specialized pages. <br />
                4. When you complete the contact form and provide us with your information. <br />
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
    </div>
  )
}
