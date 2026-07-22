<template>
  <section class="testimonial-section">
    <div class="overlay">
      <h2 class="title">What Customers Are Saying</h2>
      <p class="subtitle">
        Lorem Ipsum is simply dummy text of the printing and typesetting
      </p>

      <!-- Testimonials -->
      <div class="cards">
        <div
          v-for="customer in paginatedCustomers"
          :key="customer.id"
          class="card"
        >
          <img :src="customer.image" class="avatar" />

          <h3>{{ customer.name }}</h3>
          <span class="role">{{ customer.role }}</span>

          <p class="text">
            {{ customer.text }}
          </p>
        </div>
      </div>

      <!-- Pagination -->
      <div class="pagination">
        <span
          v-for="(page, index) in totalPages"
          :key="index"
          :class="['dot', { active: currentPage === index }]"
          @click="currentPage = index"
        ></span>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="stats">
      <div class="stat">
        <div class="icon">💼</div>
        <h3>2100</h3>
        <p>Successful Loan Approval</p>
      </div>

      <div class="stat">
        <div class="icon">👍</div>
        <h3>99%</h3>
        <p>Customer Satisfaction</p>
      </div>

      <div class="stat">
        <div class="icon">📍</div>
        <h3>90+</h3>
        <p>Office National Partners</p>
      </div>

      <div class="stat">
        <div class="icon">🏆</div>
        <h3>70+</h3>
        <p>Award Certificate</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 0,
      perPage: 3,
      customers: [
        {
          id: 1,
          name: "Gussie Williamson",
          role: "CEO Colorlib",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          text: "Thereby, choosing the right business card design is important and requires careful considerations.",
        },
        {
          id: 2,
          name: "James Santos",
          role: "CEO Colorlib",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          text: "You need to pay special attention to the type of colors in your business cards.",
        },
        {
          id: 3,
          name: "Birdie Hamilton",
          role: "CEO Colorlib",
          image: "https://randomuser.me/api/portraits/women/68.jpg",
          text: "Ensure that the details of your business card are up to date before distributing.",
        },
        {
          id: 4,
          name: "Robert Fox",
          role: "CEO Colorlib",
          image: "https://randomuser.me/api/portraits/men/75.jpg",
          text: "Professional design gives a better impression to your customers.",
        },
      ],
    };
  },

  computed: {
    totalPages() {
      return Math.ceil(this.customers.length / this.perPage);
    },

    paginatedCustomers() {
      const start = this.currentPage * this.perPage;
      return this.customers.slice(start, start + this.perPage);
    },
  },
};
</script>

<style scoped>
.testimonial-section {
  background: #1e2f59;
  padding-top: 80px;
}

.overlay {
  text-align: center;
  color: white;
  max-width: 1200px;
  margin: auto;
}

.title {
  font-size: 32px;
  font-weight: 700;
}

.subtitle {
  opacity: 0.8;
  margin-bottom: 50px;
}

/* Cards */

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  overflow: visible;

  
}

.card {
  background: #fff;
  color: #555;
  padding: 40px 25px;
  border-radius: 10px;
  position: relative;
}

.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid white;
}

.card h3 {
  margin-top: 50px;
  font-size: 20px;
  font-weight: 600;
}

.role {
  color: #69c21f;
  font-size: 14px;
}

.text {
  margin-top: 20px;
  font-style: italic;
  line-height: 1.6;
}

/* Pagination */

.pagination {
  margin-top: 40px;
}

.dot {
  width: 10px;
  height: 10px;
  background: #aaa;
  border-radius: 50%;
  display: inline-block;
  margin: 5px;
  cursor: pointer;
}

.dot.active {
  background: #69c21f;
}

/* Stats Section */

.stats {
  background: #f7f7f7;
  margin-top: 80px;
  padding: 60px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
}

.stat .icon {
  font-size: 36px;
  margin-bottom: 10px;
}

.stat h3 {
  font-size: 32px;
  margin: 10px 0;
}

.stat p {
  color: #666;
}


@media screen and (min-width: 300px) and (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;
  }

  .stats {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}
</style>
