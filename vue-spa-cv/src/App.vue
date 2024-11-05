<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Quem Sou Eu</router-link> |
        <router-link to="/o-que-faco">O Que Faço</router-link> |
        <router-link to="/hobbies">Hobbies</router-link>
      </nav>
    </header>

    <ProfileHeader />

    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import ProfileHeader from './components/ProfileHeader.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    ProfileHeader,
    Footer,
  },
};
</script>


<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures the entire viewport height is covered */
  background-color: #2e2e2e; /* Light gray background */
  color: #333; /* Darker text color for better contrast on a light background */
}


header {
  background-color: #2c3e50;
  padding: 10px;
  color: #ffffff;
  font-weight: bold;
}

nav a {
  color: #ecf0f1;
  text-decoration: none;
  margin: 0 10px;
}

nav a:hover {
  color: #bd3a86;
}

main {
  flex: 1; /* Takes up remaining space between header and footer */
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer {
  background-color: #f4f4f4;
  padding: 10px 0; /* Reduced padding for a more compact footer */
  text-align: center;
}
</style>
