<template>
  <div class="content-section">
    <div class="info-box">
      <h3>Quem sou eu</h3>
      <p>Sou um engenheiro informático, tendo feito minha licenciatura no ISEP. Atualmente estou a trabalhar como desenvolvedor de software enquanto tiro um mestrado em paralelo. Tenho grande interesse por arquitetura de sistemas, especialmente com microserviços.</p>
    </div>
    <div class="info-box">
      <h3>Soft Skills</h3>
      <ul>
        <li>Liderança</li>
        <li>Empatia</li>
        <li>Resolução de Prolemas</li>
        <li>Improviso</li>
        <li>Adaptação</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuemSouEu",
};
</script>

<style scoped>
/* Same styling as before */
.content-section {
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 800px;
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
