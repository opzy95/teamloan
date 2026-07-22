<template>
    <footer class="footer">
    
    <div class="footer-top">
      <div class="office">
        <h3>New York Office</h3>
        <p>917 Atlantic Lane, Strongsville, NY,<br />United State</p>
      </div>

      <div class="office">
        <h3>New Jersey Office</h3>
        <p>1 Walnut Court, East Orange, NJ,<br />United State</p>
      </div>

      <div class="contact">
        <p class="contact-title">Contact Us Now!</p>
        <h2 class="phone">(+12) 345-678-910</h2>
      </div>
    </div>

    
    <div class="footer-main">
      <div class="brand">
        <h2 class="logo">
          <span class="icon">$</span>
          Loan<span class="highlight">day.</span>
        </h2>

        <p>
          Please remember though that how far you go is up to you.
          There is no substitute for your own work and effort
          in succeeding in this business.
        </p>
      </div>

      <div class="links">
        <h3>Services</h3>
        <ul>
          <li>Personal Loans</li>
          <li>Business Loans</li>
          <li>Online Cash Loans</li>
          <li>Cash Advance</li>
        </ul>
      </div>

      <div class="links">
        <h3>Socials</h3>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Skype</li>
        </ul>
      </div>

      <div class="hours">
        <h3>Open Hours</h3>
        <p>
          We work all days a week, Please contact us for any inquiry.
        </p>

        <ul>
          <li>Monday - Friday: 11:00 am - 8:00 pm</li>
          <li>Saturday: 10:00 am - 6:00 pm</li>
          <li>Sunday: 11:00 am - 6:00 pm</li>
        </ul>
      </div>
    </div>

    
    <div class="footer-bottom">
      <div class="legal">
        <a href="#">Terms of use</a>
        <span>|</span>
        <a href="#">Privacy Policy</a>
        <span>|</span>
        <a href="#">Community</a>
      </div>

      <p class="copyright">
        Copyright ©2026 All rights reserved | This template is made with ❤️ by <span style="color: #88c417;" >Femado</span>
      </p>
    </div>
  </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .footer {
  background: #0f2747;
  color: #cbd5e1;
  font-family: system-ui, -apple-system, sans-serif;
}


.footer-top {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  padding: 40px 8%;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.office h3 {
  color: white;
  margin-bottom: 10px;
}

.contact {
  text-align: right;
}

.contact-title {
  color: white;
  margin-bottom: 8px;
}

.phone {
  color: #7ed321;
  font-size: 32px;
  font-weight: 700;
}


.footer-main {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 50px;
  padding: 60px 8%;
}

.brand p {
  margin-top: 20px;
  line-height: 1.6;
  max-width: 400px;
}

.logo {
  color: white;
  font-weight: 700;
  font-size: 40px;
  letter-spacing: 2px;
}

.highlight {
  color: #7ed321;
  
}

.icon {
  background: #7ed321;
  border-radius: 50%;
  padding: 0px 10px;
  color: white;
}



.links h3,
.hours h3 {
  color: white;
  margin-bottom: 18px;
}

.links ul,
.hours ul {
  list-style: none;
  padding: 0;
}

.links li {
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.2s;
}

.links li:hover {
  color: #7ed321;
}

.hours p {
  margin-bottom: 14px;
}

.hours li {
  margin-bottom: 8px;
}


.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 25px 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.legal {
  display: flex;
  gap: 12px;
}

.legal a {
  color: #cbd5e1;
  text-decoration: none;
}

.legal a:hover {
  color: #7ed321;
}

.copyright {
  font-size: 14px;
}



@media screen and (min-width: 300px) and (max-width: 768px){
   .footer-top {
    grid-template-columns: 1fr 1fr;
    text-align: center;
    gap: 30px;
  }

  .contact {
    grid-column: span 2;
    text-align: center;
  }

  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .brand p {
    max-width: 100%;
  }
}


/* Mobile Phones */
@media (max-width: 600px) {

  .footer-top {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
  }

  .contact {
    text-align: center;
  }

  .phone {
    font-size: 24px;
  }

  .footer-main {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 30px;
  }

  .logo {
    font-size: 32px;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }

  .legal {
    justify-content: center;
    flex-wrap: wrap;
  }

}


</style>