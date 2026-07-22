<template>
  <div class="contact-page">
    <Navbar/>
    <section class="contact-section">
      <div class="container">

        <div class="form-box">
          <h2>Get In Touch</h2>
          <p class="form-subtitle">Please contact us or send us an email or go to our forum.</p>
          <form>
            <div class="form-row">
              <div class="form-group">
                <input type="text" placeholder="Your Name" />
              </div>
              <div class="form-group">
                <input type="email" placeholder="Your Email" />
              </div>
            </div>
            <div class="form-group">
              <input type="text" placeholder="Subject" />
            </div>
            <div class="form-group">
              <textarea rows="6" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" class="btn-send">Send Message</button>
          </form>
        </div>

        <!-- Office Cards -->
        <div class="offices">

          <div class="office-card">
            <div class="office-icon">  <Icon icon="mdi:location"/></div>
            <h4>New York Office</h4>
            <p>917 Atlantic Lane, Strongsville, NY, United States</p>
            <p>(+12) 345-678-910</p>
            <p>newyork.info@colorlib.com</p>
          </div>

          <div class="office-card">
            <div class="office-icon">
               <Icon icon="mdi:location"/>
            </div>
            <h4>New Jersey Office</h4>
            <p>171 Logan Lane, Union City, NJ, United States</p>
            <p>(+12) 345-678-910</p>
            <p>newjersey.info@colorlib.com</p>
          </div>

          <div class="office-card">
            <div class="office-icon">  <Icon icon="mdi:location"/></div>
            <h4>Washington Office</h4>
            <p>9 East Bear Hill St. Great Falls, Washington, United States</p>
            <p>(+12) 345-678-910</p>
            <p>washington.info@colorlib.com</p>
          </div>

        </div>

      </div>
    </section>

   <Footer/>

  </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>

.contact-page {
  color: #2d2d2d;
}

.contact-section {
  padding: 80px 20px;
  background: #f9f9fb;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.form-box h2 {
  font-size: 2rem;
  color: #1a3c5e;
  margin-bottom: 10px;
  font-weight: 600;
}

.form-subtitle {
  color: #777;
  margin-bottom: 30px;
  font-size: 0.95rem;
  line-height: 1.6;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  margin-bottom: 18px;
}

input,
textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1.5px solid #e0e0e0;
  border-radius: 6px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: #2d2d2d;
  background: #fff;
  transition: border-color 0.25s;
  outline: none;
}

input:focus,
textarea:focus {
  border-color: #1a3c5e;
}

textarea {
  resize: vertical;
}

.btn-send {
  background: #88c417;
  color: white;
  border: none;
  padding: 14px 36px;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.25s, transform 0.15s;
}

.btn-send:hover {
  background: #628d13;
  transform: translateY(-1px);
}

.offices {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.office-card {
  background: white;
  border-radius: 10px;
  padding: 28px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border-left: 4px solid #88c417;
  transition: transform 0.2s;
}

.office-card:hover {
  transform: translateY(-3px);
}

.office-icon {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.office-card h4 {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  color: #1a3c5e;
  margin-bottom: 10px;
}

.office-card p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.8;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .hero-content h1 {
    font-size: 2rem;
  }
  .offices{
    grid-template-columns: 1fr;
  }
}
</style>