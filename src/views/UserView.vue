<template>
  <div class="layout">
    <Sidebar @toggle="onToggle" />
    <div class="main-content" :class="{ collapsed: isCollapsed }">
      <PersonalInfo/>
    </div>
  </div>
</template>

<script>
import PersonalInfo from '../dashboard/PersonalInfo.vue';
import Sidebar from '../dashboard/Sidebar.vue';
export default {
  components: { 
    PersonalInfo, 
    Sidebar },
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
  margin-left: 80px;
}
</style>