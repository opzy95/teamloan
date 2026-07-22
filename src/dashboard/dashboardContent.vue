<template>
  <div class="dashboard">
    <div class="stat-cards">
      <div class="stat-card">
        <div class="stat-icon icon-users">
          <icon icon="mdi:users" />
        </div>
        <p class="stat-label">USERS</p>
        <h2 class="stat-value">{{ this.users.length }}</h2>
      </div>

      <div class="stat-card">
        <div class="stat-icon icon-active">
          <icon icon="mdi:user" />
        </div>
        <p class="stat-label">ACTIVE USERS</p>
        <h2 class="stat-value">
          {{ this.users.filter((user) => user.status === "active").length }}
        </h2>
      </div>

      <div class="stat-card">
        <div class="stat-icon icon-loans">
          <icon icon="mdi:cards" />
        </div>
        <p class="stat-label">USERS WITH LOANS</p>
        <h2 class="stat-value">148</h2>
      </div>

      <div class="stat-card">
        <div class="stat-icon icon-savings">
          <icon icon="mdi:credit-card" />
        </div>
        <p class="stat-label">USERS WITH SAVINGS</p>
        <h2 class="stat-value">180</h2>
      </div>
    </div>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>
              <span class="th-content">
                ORGANIZATION
                <Icon icon="mdi:swap-vertical" class="filter-icon" />
              </span>
            </th>
            <th>
              <span class="th-content">
                USERNAME <Icon icon="mdi:swap-vertical" class="filter-icon" />
              </span>
            </th>
            <th>
              <span class="th-content">
                EMAIL <Icon icon="mdi:swap-vertical" class="filter-icon" />
              </span>
            </th>
            <th>
              <span class="th-content">
                PHONE NUMBER
                <Icon icon="mdi:swap-vertical" class="filter-icon" />
              </span>
            </th>
            <th>
              <span class="th-content">
                DATE JOINED
                <Icon icon="mdi:swap-vertical" class="filter-icon" />
              </span>
            </th>
            <th>
              <span class="th-content">
                STATUS<Icon icon="mdi:swap-vertical" class="filter-icon" />
              </span>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in paginatedUsers" :key="user.id">
            <td>{{ user.organization }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.dateJoined }}</td>
            <td>
              <span class="status-badge" :class="user.status">
                {{ user.status }}
              </span>
            </td>

            <td class="action-cell">
              <button class="dots-btn" @click="toggleMenu(user.id)">
                <icon icon="mdi:dots-vertical" />
              </button>
              <div class="dropdown" v-if="activeMenu === user.id">
                <div @click="viewUser(user.id)" class="dropdown-item">
                  <icon icon="mdi:eye" />
                  View Details   
                </div>
                <div class="dropdown-item" @click="blacklistUser(user)">
                  <icon icon="mdi:user-cancel" />
                  Blacklist User
                </div>
                <div class="dropdown-item" @click="activateUser(user)">
                  <icon icon="mdi:user-check" />
                  Activate User
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
<!-- pagination -->
   <div class="pagination">
      <div class="pagination-info">
        Showing
        <select v-model="pageSize" @change="currentPage = 1">
          <option :value="10">10</option>
          <option :value="25">25</option>
          <option :value="50">50</option>
          <option :value="100">100</option>
        </select>
        out of {{ users.length }}
      </div>

      <div class="pagination-controls">
        <button @click="currentPage = 1" :disabled="currentPage === 1">
          <Icon icon="mdi:chevron-double-left" />
        </button>
        <button @click="currentPage--" :disabled="currentPage === 1">
          <Icon icon="mdi:chevron-left" />
        </button>

        <button
          v-for="page in visiblePages"
          :key="page"
          @click="currentPage = page"
          :class="{ active: currentPage === page }"
        >
          {{ page }}
        </button>

        <button @click="currentPage++" :disabled="currentPage === totalPages">
          <Icon icon="mdi:chevron-right" />
        </button>
        <button @click="currentPage = totalPages" :disabled="currentPage === totalPages">
          <Icon icon="mdi:chevron-double-right" />
        </button>
      </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import router from "../router/Index";
import axios from "axios";
export default {
  data() {
    return {
      users: [],
      activeMenu: null,
       currentPage: 1,
      pageSize: 10,
    };
  },

  mounted() {
    this.fetchUsers();
  },
 computed: {
    totalPages() {
      return Math.ceil(this.users.length / this.pageSize);
    },

    paginatedUsers() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.users.slice(start, end);
    },

    visiblePages() {
      const pages = [];
      const start = Math.max(1, this.currentPage -2);
      const end = Math.min(this.totalPages, this.currentPage + 2);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get("data.json");
        this.users = response.data.users;
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    },
    toggleMenu(id) {
      this.activeMenu = this.activeMenu === id ? null : id;
    },
    blacklistUser(user) {
      user.status = "blacklisted";
      this.activeMenu = null;
    },
    activateUser(user) {
      user.status = "active";
      this.activeMenu = null;
    },
    viewUser(id){
      router.push(`userdetails/${id}`)
    }
  },
};
</script>

<style scoped>
.dashboard {
  padding: 40px 30px;
  background: #f5f7fa;
  min-height: 100vh;
  font-family: "Work Sans", sans-serif;
}

.stat-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 40px;
  max-width: 100%;
  margin-top: 50px;
}

.stat-card {
  background: white;
  border-radius: 4px;
  padding: 30px 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  min-width: 0;
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}

.icon-users {
  background: #f5e0f7;
  color: #df18ff;
}
.icon-active {
  background: #e0f7f5;
  color: #00c7be;
}
.icon-loans {
  background: #fdeaea;
  color: #f55f44;
}
.icon-savings {
  background: #fdeaea;
  color: #ff3366;
}

.stat-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: #545f7d;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #213f7d;
}

.table-wrapper {
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

thead tr {
  background: #f9fafb;
}

th {
  padding: 18px 20px;
  text-align: left;
  font-size: 0.7rem;
  font-weight: 600;
  color: #545f7d;
  letter-spacing: 0.5px;
  white-space: nowrap;
}
.th-content {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.filter-icon {
  color: #545f7d;

  margin-left: 4px;
  font-size: 0.75rem;
}

td {
  padding: 18px 20px;
  color: #545f7d;
  border-top: 1px solid #f0f0f0;
  white-space: nowrap;
}

tbody tr:hover {
  background: #fafafa;
}

.status-badge {
  padding: 10px 18px;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: capitalize;
}

.status-badge.active {
  background: #e5f8f0;
  color: #39cd62;
}
.status-badge.inactive {
  background: #f5f5f5;
  color: #545f7d;
}
.status-badge.pending {
  background: #fdf4e7;
  color: #e9b200;
}
.status-badge.blacklisted {
  background: #fde8e8;
  color: #e02020;
}

.action-cell {
  position: relative;
}

.dots-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #545f7d;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
}

.dots-btn:hover {
  background: #f0f0f0;
}

.dropdown {
  position: absolute;
  right: 20px;
  top: 50%;
  background: white;
  border-radius: 4px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  z-index: 100;
  min-width: 180px;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  font-size: 0.875rem;
  color: #545f7d;
  cursor: pointer;
  transition: background 0.15s;
}

.dropdown-item:hover {
  background: #f9fafb;
}
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 4px;
  font-size: 0.875rem;
  color: #545f7d;
}

.pagination-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pagination-info select {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 4px 8px;
  color: #213f7d;
  font-size: 0.875rem;
  cursor: pointer;
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: 4px;
}

.pagination-controls button {
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  border: none;
  border-radius: 4px;
  background: #f0f0f0;
  color: #545f7d;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.15s;
}

.pagination-controls button:hover:not(:disabled) {
  background: #e0e0e0;
}

.pagination-controls button.active {
  background: #213f7d;
  color: white;
  font-weight: 600;
}

.pagination-controls button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Responsive */
@media (max-width: 900px) {
  .dasboard{
    border: 1px solid red; 
    
  }
  .stat-cards {
    grid-template-columns: repeat(2, 1fr);

  }
}

@media (max-width: 500px) {
  .stat-cards {
    grid-template-columns: 1fr;
  }
   .pagination { flex-direction: column; gap: 12px; }
}
</style>
