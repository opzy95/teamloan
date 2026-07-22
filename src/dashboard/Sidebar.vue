<template>
  <nav class="navbar" :class="{ 'navbar-expanded': isCollapsed }">
      <div class="navbar-left">
      </div>    
      <button @click="toggleSidebar" class="hamburger-menu">
        <Icon :icon="isCollapsed ? 'mdi:menu' : 'mdi:close'" width="30" />
      </button>
      <input type="search" placeholder="Search..." class="search-input" />
      <div v-if="!isCollapsed" class="sidebar-overlay" @click="toggleSidebar"></div>
    <div class="navbar-right">
      <ul>
        <li>
          <router-link class="doc" to="/docs">Docs</router-link>
        </li>
        <li>
         <img class="doc" src="../dashboard/dashboard-img/bell.png" alt="">
        </li>
         <div class="org-container">
  <div class="org-box">
    <img src="../dashboard/dashboard-img/user-icon.png" alt="org-icon">
    <h2>Adedoyin</h2>
    <div class="dropdown">
      <button class="dropbtn">▼</button>
      <div class="dropdown-content">
        <router-link to="#">Profile</router-link>
        <router-link to="#">Settings</router-link>
        <router-link to="/login">Logout</router-link>
      </div>
    </div>
  </div>
</div>
 </ul>
    </div>
  </nav>
  
 
  <nav class="side-bar" :class="{ 'collapsed': isCollapsed }">
    <div class="logo">
          <Icon
            class="animate__animated animate__heartBeat"
            icon="mdi:dollar"
            width="24"
          />
          <h2 class="loan">Loan<span class="loan-day">day.</span></h2>
        </div>

        <div class="org">
          <img src="../dashboard/dashboard-img/organization.png" alt="">
          <label for="org"></label>
          <select  v-show="!isCollapsed" name="org" id="org">
    <option value="Switch Organization">Switch Organization</option>
    <option value="Organization 1">Organization 1</option>
    <option value="Organization 2">Organization 2</option>
  </select>
        </div>
        <hr>
        <div class="dash">
          <img src="../dashboard/dashboard-img/decision.png" alt="">
          <h2  v-show="!isCollapsed">
            Dashboard
          </h2>
        </div>
        <h2 style="padding: 15px 25px ; font-weight: 600;">CUSTOMERS</h2>

        <div class="user">
          <img src="../dashboard/dashboard-img/user.png" alt="">
          <h2  v-show="!isCollapsed">Users</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/guarantor.png" alt="">
          <h2  v-show="!isCollapsed">Guarantor</h2>
        </div>
         <div class="user">
          <img src="../dashboard/dashboard-img/loan.png" alt="">
          <h2  v-show="!isCollapsed">Loans</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/decision.png" alt="">
          <h2  v-show="!isCollapsed">Decision Models</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/savings.png" alt="">
          <h2  v-show="!isCollapsed">Savings</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/request.png" alt="">
          <h2  v-show="!isCollapsed">Loan Requset</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/whitelist.png" alt="">
          <h2  v-show="!isCollapsed">Whitelist</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/karma.png" alt="">
          <h2  v-show="!isCollapsed">Karma</h2>
        </div>
         <h2 style="padding: 15px 25px ;">BUSINESSES</h2>
         <div class="user">
          <img src="../dashboard/dashboard-img/organization11.png" alt="">
          <h2  v-show="!isCollapsed">Organization</h2>
        </div>
         <div class="user">
          <img src="../dashboard/dashboard-img/l-product.png" alt="">
          <h2  v-show="!isCollapsed">Loan Products</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/s-prod.png" alt="">
          <h2  v-show="!isCollapsed">Savings Product</h2>
        </div>
         <div class="user">
          <img src="../dashboard/dashboard-img/fees.png" alt="">
          <h2  v-show="!isCollapsed">Fees and Charges</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/transaction.png" alt="">
          <h2  v-show="!isCollapsed">Transaction</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/service.png" alt="">
          <h2  v-show="!isCollapsed">Services</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/s-account.png" alt="">
          <h2  v-show="!isCollapsed">Service Account</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/savings.png" alt="">
          <h2  v-show="!isCollapsed">Settlement</h2>
        </div>
         <div class="user">
          <img src="../dashboard/dashboard-img/report.png" alt="">
          <h2  v-show="!isCollapsed">Report</h2>
        </div>
         <h2 style="padding: 15px 25px ;">Settings</h2>
         <div class="user">
          <img src="../dashboard/dashboard-img/preferrence.png" alt="">
          <h2  v-show="!isCollapsed">Prefference</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/fee-pricing.png" alt="">
          <h2  v-show="!isCollapsed">Fees and pricing</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/audit-log.png" alt="">
          <h2  v-show="!isCollapsed">Audit Logs</h2>
        </div>  

        <div class="navbar-left">
  <button @click="toggleSidebar" class="toggle-btn">
    <Icon :icon="isCollapsed ? 'mdi:menu' : 'mdi:menu-open'" width="24" />
  </button>
</div>

        

     
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const emit = defineEmits(['toggle'])
const isCollapsed = ref(window.innerWidth < 768); 
const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
  emit('toggle', isCollapsed.value)
};

</script>

<style scoped>
.side-bar.collapsed {
  width: 80px; 
}
.org-container{
position: relative;

}
.org-box {
  display: flex;
  align-items: center;
  gap: 15px;
  border-radius: 8px;
  width: fit-content;
  margin-left: 30px;
position: absolute;
top: -20px;


}

.org-box img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right: 5px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover { background-color: #f1f1f1; }

/* Show menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

.navbar {
  height: 90px;
  background-color: white;
  left: 300px;
  width: calc(100% - 300px);
  padding: 10px 20px;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  position: fixed;
  top: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease, width 0.3s ease;
}

.navbar-expanded {
  left: 80px;
  width: calc(100% - 80px);
}

.search-input {
  width: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.navbar-right{
flex: 1;
}
.navbar-left{
flex: 2;
}

.navbar-right ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.navbar-right li {
  margin-left: 20px;
}

.navbar-right a {
  text-decoration: none;
  color: #333;

}


.navbar-right i {
  font-size: 18px;
  cursor: pointer;
}
.side-bar {
  width: 300px;
  background-color: white;
  border-right: 1px solid #f0f0f0;
  height: 100vh;
  position: fixed;
  top: 0;
  overflow-y: auto;
  z-index: 2;
  transition: width 0.3s ease;
  
}
.logo {
  gap: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid black;
}
.loan {
  font-size: 40px;
  align-items: center;
  font-weight: bold;
  letter-spacing: 2px;
  width: 100%;
}

.loan-day {
  color: #88c417;
}
.animate__animated {
  border-radius: 50%;
  background: #88c417;
  width: 35px;
  height: 35px;
  color: white;
}
.org{
display: flex;
 gap: 10px; 
 width: 80%;
  justify-content: center;
  border: 1px solid #88c417;
  margin: 20px auto;
  padding: 10px;
  border-radius: 10px;
}
.dash{
  display: flex;
 gap: 10px; 
 width: 70%;
 padding: 20px 30px 10px;
 /* margin: 0 20px; */
 background-color: rgb(140, 194, 23);
 width: 100%;
}
.user{
  display: flex;
  gap: 10px;
  padding: 8px 30px 10px;
  
}
.user img{
  width: 20px;
  height: 20px;
}
.user:hover {
  background-color: white;
}
.toggle-btn {
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 15px;
  color: #88c417;
}

.user, .dash, .org {
  padding: 10px;
}

.side-bar.collapsed h2, 
.side-bar.collapsed select {
  display: none;
  
}
.navbar-expanded {
  width: calc(100% - 80px);
}
.side-bar {
  width: 300px;
  transition: width 0.3s ease; 
  
}

@media (max-width: 767px) {
  .hamburger-menu {
    display: block !important; /* Ensure burger is visible */
    /* z-index: 1100; */
    margin-left: -450px;
    /* border: 2px solid red; */
  }
  .toggle-btn{
    display: none;
  }

  .search-input{
    display: none;
  }
  .doc{
    display: none;
  }


  /* On mobile, 'collapsed' means 'off-screen' */
  .side-bar.collapsed { /* Keep it wide for when it slides in */
    transform: translateX(-100%);
    display: none;
    
  }

  .side-bar:not(.collapsed) {
    width: 250px;
    transform: translateX(0);
    box-shadow: 5px 0 15px rgba(0,0,0,0.1);
  }

  .navbar {
    left: 0 !important;
    width: 100% !important;
  }

  .sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 999;
  }
}

/* --- 3. DESKTOP NAVBAR ADJUSTMENTS --- */
@media (min-width: 768px) {
  .hamburger-menu {
    display: none; /* Hide hamburger on large screens */
  }

  .navbar {
    left: 300px;
    width: calc(100% - 300px);
  }

  .navbar-expanded {
    left: 80px;
    width: calc(100% - 80px);
  }
}

/* --- 4. OTHER UI FIXES --- */
.hamburger-menu {
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 15px;
  color: #213f7d;
  display: none;
}

.logo {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
  overflow: hidden;
}

/* Hide text labels when collapsed on Desktop */
.side-bar.collapsed h2, 
.side-bar.collapsed .loan,
.side-bar.collapsed hr {
  display: none;
}
</style>