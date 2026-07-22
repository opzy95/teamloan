<template>
    <div>
      <Navbar />
      <HeroSection />
      <OurCompany />
      <DiscoverLoans/>
      <People />
      <CustomerSays/>
      <LatestPost/>
      <Home />
      <Footer/>
  
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Home from '../components/Home.vue';
import Login from '../auth/login.vue'
import Footer from '../components/Footer.vue';
import HeroSection from '../components/HeroSection.vue';
import OurCompany from '../components/OurCompany.vue';
import DiscoverLoans from '../components/DiscoverLoans.vue';
import CustomerSays from '../components/CustomerSays.vue';
import LatestPost from '../components/LatestPost.vue';
import People from '../components/People.vue';



export default {
  components: {
    Navbar,
    Home,
    Login,
    Footer,
    HeroSection,
    OurCompany,
    DiscoverLoans,
    CustomerSays,
    LatestPost,
    People,
    
  }
}
</script>

<style lang="scss" scoped>

</style>