<template>
  <div>
    <div class="top-bar">
      <div class="container">
        <div class="left">
          <Icon class="icon" icon="mdi:location" width="24" /><span
            >96 Ernser Vista Suite 437, NY US
          </span>

          <Icon class="icon" icon="mdi:telephone" width="24" />
          <span>(123) 456-78-910 </span>
          <Icon class="icon" icon="mdi:email" width="24" />
          <span>Info@colorlib.com </span>
        </div>
        <div class="right">
          <select class="language">
            <img src="../assets/flag.png" alt="" />
            <option value="">ENGLISH</option>
            <option value="">bangla</option>
          </select>
        </div>
      </div>
    </div>

    <nav class="main-nav">
      <div class="container">
        <div class="logo">
          <Icon
            class="animate__animated animate__heartBeat"
            icon="mdi:dollar"
            width="24"
          />
          <h2 class="loan">Loan<span class="loan-day">day.</span></h2>
        </div>

        <ul class="nav-links">
          <li><router-link to="/" class="active" >Home</router-link></li>
          <li><router-link to="/about" class="active">About</router-link></li>
          <li> 
            <router-link to="services" class="active">Services</router-link>
          </li>
          <li><router-link to="/blog" class="active">Blog</router-link></li>
         

          <li>
            <router-link to="contact" class="active">Contact</router-link>
          </li>
             <li>
              <router-link to="/login" id="active" class="active login"
                >Login</router-link
              >
            </li>
          <li class="search active">
            <Icon icon="mdi:search" width="24" />
          </li>
        </ul>

        <div class="menu-btn" @click="toggleMenu">
          <Icon icon="mdi:menu" width="24" />
        </div>
      </div>
      <div v-if="isOpen" class="mobile-menu">
        <router-link to="/" @click="toggleMenu">Home</router-link>
        <router-link to="/about" @click="toggleMenu">About</router-link>
        <router-link to="/services" @click="toggleMenu">Services</router-link>
        <router-link to="/blog" @click="toggleMenu">Blog</router-link>
        <router-link to="/contact" @click="toggleMenu">Contact</router-link>
        <router-link to="/login" @click="toggleMenu">Login</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
  name: "Navbar",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  /* max-width: 1200px; */
  display: flex;
  /* margin: auto; */
  justify-content: space-between;
  align-items: center;
  
}
.pages{
  position: relative ;
}
.pages:hover .select{
  display: block;

}
.select{
  position: absolute;
  border: 2px solid red;
  width: 170px;
  display: none;
  background-color: #323232;
  padding: 6px;
  color: #fff;
}
/* 
.select router-link{
  display: block;
} */

.top-bar {
  background: #182143;
  padding: 0px;
  display: flex;
  color: white;
}

.top-bar .left span {
  margin-right: 35px;
  opacity: 0.85;
  transition: 0.3s ease;
}

.left {
  display: flex;
  margin: 0px 50px;
  gap: 10px;
}

.icon {
  color: #88c417;
}

.language {
  cursor: pointer;
  background: #88c417;
  padding: 15px 19px;
  margin: 0px 40px;
  border: none;
}

.logo {
  display: flex;
}

.nav-links{
  display: flex;
  margin-left: auto;
  gap: 4rem;
  font-weight: bold;
  transition: 0.3s;
  position: relative;
}

.active:hover {
  cursor: pointer;
  border-bottom: 3px solid #88c417;
  padding-bottom: 4px;
  
}
.login{
  background-color: #88c417;
  padding: 9px 17px;
  border-radius: 25px;
}

.main-nav {
  background: #fdfdfd;
  padding: 40px 0;

}
.animate__animated {
  /* border:  1px solid red; */
  border-radius: 50%;
  background: #88c417;
  width: 35px;
  height: 35px;
  color: white;
}

.animate__animated:hover {
  cursor: pointer;
  animation: both;
  animation-duration: 3s;
}

.logo {
  gap: 10px;
  align-items: center;
  margin: 0px 60px;
}

.loan {
  font-size: 40px;
  align-items: center;
  font-weight: bold;
  letter-spacing: 2px;
}

.loan-day {
  color: #88c417;
}

.menu-btn{
  display: none;
}





@media screen and (min-width: 300px) and (max-width: 768px) {
  
  .container{
    flex-direction: row;
    padding: 0 15px;
  }
  
  
  .nav-links{
    display: none;
  }

  
  .menu-btn{
    display: block;
    cursor: pointer;
  }
  
  
  .mobile-menu{
    display: flex;
    flex-direction: column;
    background: #182143;
    width: 100%;
    padding: 20px;
    gap: 15px;
  }
  
  .mobile-menu a{
    color: white;
    font-weight: bold;
  }
  
  
  .top-bar .container{
    display: none;
    
  }
  
  .left{
    flex-direction: column;
    margin: 10px;
    gap: 5px;
  }
  
  .language{
    margin: 10px;
    padding: 10px 15px;
  }
  
  .logo{
    margin: 0;
  }
  
  .loan{
    font-size: 28px;
  }
  .top-bar{
    display: none;
  }
  
}

</style>