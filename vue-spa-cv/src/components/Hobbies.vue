<template>
  <div class="profile-page">
    <div class="content-section">
      <div class="info-box">
        <h3>Atividades Indoor</h3>
        <ul>
          <li>Assistir filmes e séries de suspense/comédia.</li>
          <li>Jogar com os meus amigos.</li>
          <li>Conduzir campanhas de RPG.</li>
          <li>Ver animes de ação/comédia.</li>
        </ul>
      </div>
      <div class="info-box">
        <h3>Atividades Outdoor</h3>
        <ul>
          <li>Caminhadas por parques.</li>
          <li>Ir a restaurantes ou cafés acolhedores.</li>
          <li>Viajar para novos lugares.</li>
          <li>Ir ao cinema.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hobbies",
};
</script>

<style scoped>
.profile-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.content-section {
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
}

.info-box {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex: 1;
  min-width: 200px;
  max-width: 350px;
  text-align: left;
}

.info-box h3 {
  color: #bd3a86;
  margin-bottom: 10px;
}

.info-box p, .info-box ul {
  color: #333;
  font-size: 1em;
  line-height: 1.5;
}

.info-box ul {
  list-style-type: disc;
  padding-left: 20px;
}
</style>
