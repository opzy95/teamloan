<template>
  <div class="user-details">
    <div class="header">
      <router-link to="/dashboard"> ← Back to Users</router-link>
      <h1>User Details</h1>
      <div class="actions">
        <button class="blacklist-btn">BLACKLIST USER</button>
        <button class="activate-btn">ACTIVATE USER</button>
      </div>
    </div>

    <div class="user-card">
      <div class="avatar">
        <div class="circle">M</div>
      </div>
      <div class="info">
        <h2>{{ user.fullName || "—" }}</h2>
        <p>{{ user.id || "—" }}</p>
      </div>
      <div class="tier">
        <p>User's Tier</p>
        <div class="stars">
          <span v-for="i in Math.min(user.tier, 3)" :key="i" class="star filled"
            >★</span
          >
          <span
            v-for="i in Math.max(0, 3 - user.tier)"
            :key="'e' + i"
            class="star"
            >☆</span
          >
        </div>
      </div>
      <div class="balance">
        <h2>{{ user.balance || "₦0.00" }}</h2>
        <p>{{ user.account || "—" }}</p>
      </div>
    </div>

    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="tab-content">
      <div v-if="activeTab === 'general'">
        <h3>Personal Information</h3>
        <div class="personal-info">
          <div class="row">
            <div class="field">
              <label>Full Name</label>
              <p>{{ user.fullName || "—" }}</p>
            </div>
            <div class="field">
              <label>Phone Number</label>
              <p>{{ user.phoneNumber || "—" }}</p>
            </div>
            <div class="field">
              <label>Email Address</label>
              <p>{{ user.emailAddress || "—" }}</p>
            </div>
            <div class="field">
              <label>BVN</label>
              <p>{{ personal.bvn || "—" }}</p>
            </div>
          </div>
          <div class="row">
            <div class="field">
              <label>Gender</label>
              <p>{{ personal.gender || "—" }}</p>
            </div>
            <div class="field">
              <label>Marital Status</label>
              <p>{{ personal.maritalStatus || "—" }}</p>
            </div>
            <div class="field">
              <label>Children</label>
              <p>{{ personal.children || "—" }}</p>
            </div>
            <div class="field">
              <label>Type of Residence</label>
              <p>{{ personal.typeOfResidence || "—" }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="activeTab === 'documents'">Documents Content</div>
      <div v-else-if="activeTab === 'bank'">Bank Details Content</div>
      <div v-else-if="activeTab === 'loans'">Loans Content</div>
      <div v-else-if="activeTab === 'savings'">Savings Content</div>
      <div v-else-if="activeTab === 'app'">App and System Content</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();

const user = ref({
  fullName: "Loading...",
  phoneNumber: "—",
  emailAddress: "—",
  address: "—",
  id: "—",
  tier: 1,
  balance: "₦0.00",
  account: "—",
});

const personal = ref({
  bvn: "—",
  gender: "—",
  maritalStatus: "—",
  children: "—",
  typeOfResidence: "—",
});

const tabs = ref([
  { id: "general", label: "General Details" },
  { id: "documents", label: "Documents" },
  { id: "bank", label: "Bank Details" },
  { id: "loans", label: "Loans" },
  { id: "savings", label: "Savings" },
  { id: "app", label: "App and System" },
]);

const activeTab = ref("general");

const getUserId = () => {
  return route.params.id;
};

const loadUserData = async () => {
  try {
    const response = await axios.get("/data.json");

    const details = response.data.users;

    // Update only fields that exist in the JSON
    user.value.fullName = details[getUserId()].name ?? user.value.name;
    user.value.phoneNumber =
      details[getUserId()].phone ?? user.value.phoneNumber;
    user.value.emailAddress =
      details[getUserId()].email ?? user.value.emailAddress;
    user.value.address = details.address ?? user.value.address;
  } catch (err) {
    console.error("Could not load user data:", err);
  }
};

const generateRandomPersonal = () => {
  personal.value.bvn = String(
    Math.floor(1000000000 + Math.random() * 9000000000),
  );
  personal.value.gender = ["Male", "Female"][Math.floor(Math.random() * 2)];
  personal.value.maritalStatus = ["Single", "Married", "Divorced", "Widowed"][
    Math.floor(Math.random() * 4)
  ];
  personal.value.children = ["None", "1", "2", "3", "4+"][
    Math.floor(Math.random() * 5)
  ];
  personal.value.typeOfResidence = [
    "Rented Apartment",
    "Owned House",
    "Family Home",
    "Other",
  ][Math.floor(Math.random() * 4)];
};

onMounted(() => {
  loadUserData();
  generateRandomPersonal();
});
</script>

<style scoped>
.user-details {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fc;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.back-link {
  color: #657b83;
  text-decoration: none;
}

h1 {
  color: #2c3e50;
}

.actions {
  display: flex;
  gap: 10px;
}

.blacklist-btn {
  background-color: transparent;
  color: #e74c3c;
  border: 1px solid #e74c3c;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.activate-btn {
  background-color: transparent;
  color: #1abc9c;
  border: 1px solid #1abc9c;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.user-card {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.avatar .circle {
  width: 60px;
  height: 60px;
  background-color: #ecf0f1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #34495e;
  margin-right: 20px;
}

.info {
  flex: 1;
}

.info h2 {
  margin: 0;
  color: #2c3e50;
}

.info p {
  margin: 5px 0 0;
  color: #7f8c8d;
}

.tier {
  text-align: center;
  margin: 0 20px;
}

.tier p {
  margin: 0;
  color: #7f8c8d;
}

.stars {
  color: #bdc3c7;
}

.star.filled {
  color: #f39c12;
}

.balance {
  text-align: right;
}

.balance h2 {
  margin: 0;
  color: #2c3e50;
}

.balance p {
  margin: 5px 0 0;
  color: #2c3e50;
}

.tabs {
  display: flex;
  border-bottom: 1px solid #ecf0f1;
  margin-top: 20px;
}

.tabs button {
  background: none;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  color: #7f8c8d;
  position: relative;
}

.tabs button.active {
  color: #1abc9c;
}

.tabs button.active::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #1abc9c;
}

.tab-content {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
}

h3 {
  color: #2c3e50;
}

.personal-info {
  margin-top: 20px;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.field {
  flex: 1;
  margin-right: 20px;
}

.field:last-child {
  margin-right: 0;
}

label {
  font-size: 12px;
  color: #7f8c8d;
  text-transform: uppercase;
}

p {
  margin: 5px 0 0;
  color: #2c3e50;
}







/* 
@media (max-width: 768px) {

  .user-details {
    padding: 15px;
  } */


  /* .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .actions {
    width: 100%;
    justify-content: flex-start;
  } */

/* 
  .user-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .avatar {
    margin-bottom: 10px;
  }

  .tier {
    margin: 0;
    text-align: left;
  }

  .balance {
    text-align: left;
  } */

/*   
  .tabs {
    overflow-x: auto;
    white-space: nowrap;
  }

  .tabs button {
    padding: 10px 15px;
    font-size: 14px;
  } */

/*   
  .row {
    flex-direction: column;
    gap: 15px;
  }

  .field {
    margin-right: 0;
  }

} */

/* 
@media (max-width: 300px) {

  h1 {
    font-size: 20px;
  }

  .actions button {
    width: 100%;
  }

  .avatar .circle {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }

} */
</style>
