<template>
  <div class="profile-page">
    <div class="content-section">
      <div class="info-box">
        <h3>O que faço</h3>
        <p>Trabalho como desenvolvedor software a um ano em uma empresa parceira Microsoft. Atualmente estou envolvido em projetos relacionados com Dataverse, PowerApps, Power Automate, SharePoint e Azure. </p>
      </div>
      <div class="info-box">
        <h3>Hard Skills</h3>
        <ul>
          <li>Arquitetura de Software</li>
          <li>REST APIs</li>
          <li>Modulação e gestão de dados</li>
          <li>Java, YAML, C#, Python, Powershell</li>
          <li>Power Platform, SharePoint</li>
          <li>Dataverse, MongoDB, AzureSQL</li>
          <li>DotNet, Spring Boot, Node.js, Angular</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OQueFaco",
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
