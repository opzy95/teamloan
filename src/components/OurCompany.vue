<template>
     <section class="trust">
    <div class="container">
      <div class="content">
        <h1 class="title">
          Thousands Of Customers Trust Our Company
        </h1>

        <p class="description">
          The brochure must grab a viewer’s attention and hold it long enough
          to deliver the pertinent information. How do you grab your customers’
          attention with just a piece
        </p>

        <div class="info-grid">
          <div class="info">
            <h3>Our Company</h3>
            <p>
              You could try by giving the viewer paper cut, but that’s not the
              kind of attention
            </p>
          </div>

          <div class="info">
            <h3>Our Vision</h3>
            <p>
              The brochure must grab a viewer’s attention and hold it long
              enough to
            </p>
          </div>
        </div>

        <button class="cta">LEARN MORE</button>
      </div>

      <div class="image-wrapper">
        <img
          src="/src/assets/Teams-working.jpg"
          alt=""
        />
      </div>
    </div>
  </section>
    

    
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.trust {
  padding: 80px 0;
  background: #f5f6f7;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 60px;
  align-items: center;
}

.title {
  font-size: 35px;
  line-height: 1.2;
  font-weight: 700;
  color: #2b2b2b;
  margin-bottom: 20px;
}

.description {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 36px;
  max-width: 520px;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.info h3 {
  font-size: 23px;
  margin-bottom: 10px;
  color: #2b2b2b;
  font-weight: bold;
}

.info p {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
}

.cta {
  background: #7cc000;
  border: none;
  color: white;
  font-weight: 600;
  padding: 14px 36px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: background 0.2s ease;
}

.cta:hover {
  background: #6aad00;
}               

.image-wrapper {
  width: 100%;
  height: 100%;
}

.image-wrapper img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  object-fit: cover;
}


@media screen and (min-width: 300px) and (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .title {
    font-size: 34px;
  }

  .info-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .image-wrapper {
    order: -1;
  }

}

</style>