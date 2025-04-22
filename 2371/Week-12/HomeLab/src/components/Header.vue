<template>
  <header class="header">
    <div class="logo-title-container">
      <img class="header-logo" src="../assets/TTG_003 1.png" alt="Logo of HomeLabs" />
      <h1 class="header-title">HomeLabs</h1>
    </div>
     
    <nav class="header-nav">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button class="CTA-button" type="button">Join Us</button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header {
  background-color: #f8f9fa;
  padding-top: 2rem;
  padding: 0 15rem 0;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #256EFF; 
  animation: ease-in 0.5s;
}

.logo-title-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header-title {
  font-size: 2rem;
  color: #256EFF;
}

.header ul {
  list-style: none;
  padding: 0;
}

.header li {
  display: inline;
  margin: 0 10px;
}

.header a {
  text-decoration: none;
  color: #256EFF;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.CTA-button {
  background-color: #ffffff;;
  color: #256EFF;
  border: solid 1px #256EFF;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  animation: glitch 600ms ;
}

.CTA-button:hover {
  background-color: #ffffff;
  color: #256EFF;
  animation: glitch 600ms infinite;
}

@keyframes glitch {
  50% {
    transform: skew(180deg);
  }
}

@keyframes ease-in {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>