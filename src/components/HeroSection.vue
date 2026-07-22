<template>
  <section class="hero">
    <div class="overlay"></div>

    <div class="hero-container">
      <div class="hero-left">
        <h1>Find The Best <br />Monthly Payment</h1>

        <p class="subtitle">
          Apply for our business loan in minutes, without painful
        </p>

        <div class="hero-buttons">
          <button class="btn primary">GET START</button>
          <button class="btn secondary">HOW IT WORK</button>
        </div>
      </div>

      <div class="loan-card">
        <h2>How much do you need</h2>

        <form class="loan-form">
          <div class="row">
            <div class="field">
              <label>Amount of money ($):</label>
              <input type="text" v-model="form.amount" />
            </div>

            <div class="field">
              <label>How long for (day):</label>
              <input type="text" v-model="form.days" />
            </div>
          </div>

          <div class="field full">
            <label>Repayment:</label>
            <input type="text" v-model="form.repayment" />
          </div>

          <div class="row">
            <div class="field">
              <label>Name:</label>
              <input type="text" v-model="form.name" />
            </div>

            <div class="field">
              <label>Phone:</label>
              <input type="text" v-model="form.phone" />
            </div>
          </div>

          <button class="submit-btn">GET YOUR LOAN NOW!</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        amount: "",
        days: "",
        repayment: "",
        name: "",
        phone: "",
      },
    };
  },
};
</script>



<style scoped>
.hero {
  position: relative;
  min-height: 720px;
  display: flex;
  align-items: center;
  background-image: url("/src/assets/hero-section-img.jpg"); 
  background-size: cover;
  background-position: center;
  padding: 60px 8%;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(7, 20, 40, 0.9) 0%,
    rgba(7, 20, 40, 0.75) 40%,
    rgba(7, 20, 40, 0.2) 100%
  );
}

.hero-container {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 520px;
  gap: 60px;
  width: 100%;
  align-items: center;
}


.hero-left h1 {
  font-size: 45px;
  font-weight: 700;
  color: white;
  line-height: 1.15;
  margin-bottom: 35px;
}

.subtitle {
  color: rgba(255,255,255,0.85);
  font-size: 14px;
  margin-bottom: 55px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.btn {
  padding: 15px 35px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  letter-spacing: 0.5px;
}

.btn.primary {
  background: #8cc218;
  color: white;
}

.btn.secondary {
  background: #2f3f6f;
  color: white;
}


.loan-card {
  background: #f5f5f5;
  padding: 25px;
  border-radius: 6px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.2);
}

.loan-card h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 600;
}

.loan-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.field {
  display: flex;
  flex-direction: column;
}

.field label {
  font-size: 14px;
  margin-bottom: 6px;
  color: #444;
}

.field input {
  padding: 12px;
  border-radius: 4px;
  border: none;
  background: #e9e9e9;
}

.full {
  grid-column: span 2;
}

.submit-btn {
  margin-top: 10px;
  padding: 16px;
  background: #8cc218;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 0.5px;
}


@media screen and (max-width: 992px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .loan-card {
    max-width: 520px;
    width: 100%;
    margin: auto;
  }

  .hero-left {
    text-align: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-left h1 {
    font-size: 38px;
  }
}



@media screen and (max-width: 768px) {
  .hero {
    padding: 50px 20px;
  }

  .hero-left h1 {
    font-size: 32px;
  }

  .subtitle {
    margin-bottom: 35px;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 15px;
  }

  .btn {
    width: 100%;
  }

  .row {
    grid-template-columns: 1fr;
  }

  .full {
    grid-column: span 1;
  }

  .loan-card h2 {
    font-size: 24px;
  }
}



@media screen and (max-width: 300px) {
  .hero-left h1 {
    font-size: 26px;
    line-height: 1.2;
  }

  .subtitle {
    font-size: 13px;
  }

  .loan-card {
    padding: 20px;
  }

  .submit-btn {
    padding: 14px;
  }
}



</style>
