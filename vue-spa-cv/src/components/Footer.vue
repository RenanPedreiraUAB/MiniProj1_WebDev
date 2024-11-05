<template>
  <footer>
    <div class="social-icons">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-google-plus-g"></i>
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background-color: #f4f4f4;
  color: #333;
  padding: 10px 0; /* Compact footer */
  text-align: center;
}

.social-icons a {
  margin: 0 8px;
  color: #4e91ff;
  font-size: 1.5em;
  text-decoration: none;
}

.social-icons a:hover {
  color: #bd3a86;
}
</style>
