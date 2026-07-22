<template>
  <div class="layout">
    <Sidebar @toggle="onToggle" />
    <div class="main-content" :class="{ collapsed: isCollapsed }">
      <DashboardContent />
    </div>
  </div>
</template>

<script>
import DashboardContent from '../dashboard/dashboardContent.vue';
import Sidebar from '../dashboard/Sidebar.vue';
export default {
  components: { DashboardContent, Sidebar },
  data() {
    return { isCollapsed: false }
  },
  methods: {
    onToggle(val) { this.isCollapsed = val }
  }
}
</script>

<style scoped>
.layout {
  display: flex;
}

.main-content {
  margin-left: 300px;
  margin-top: 90px;
  flex: 1;
  min-width: 0;
  transition: margin-left 0.3s ease;
}

.main-content.collapsed {
  margin-left: 70px;
}
@media screen and (max-width: 780px) {
  .main-content.collapsed {
  margin-left: 5px;
  margin-top: 20px;
}
  
}
</style>