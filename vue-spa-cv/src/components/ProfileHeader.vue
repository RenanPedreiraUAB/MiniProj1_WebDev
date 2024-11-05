<!-- src/components/ProfileHeader.vue -->
<template>
  <div class="profile-header">
    <div class="profile-pic">
      <img src="@/assets/nah.jpg" alt="Profile Picture" /> <!-- Use direct path -->
    </div>
    <h2>Renan Pedreira de Oliveira</h2>
  </div>
</template>

<script>
export default {
  name: "ProfileHeader"
};
</script>

<style scoped>
.profile-header {
  text-align: center;
  margin-top: 20px;
  margin-bottom: -50px;
}

.profile-pic img {
  border-radius: 50%;
  width: 240px;
  height: 250px;
  border: 3px solid #bd3a86;
  margin-bottom: 10px;
}
</style>
