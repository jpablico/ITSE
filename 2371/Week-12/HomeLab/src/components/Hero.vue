<template>
  <div class="hero-container">
    <div class="hero-content">
      <h1 class="hero-title">Welcome to Our Home Lab</h1>
      <h2 class="hero-subtitle">Explore, Learn, and Innovate</h2>
      <p class="hero-description">Join us in our journey of discovery and experimentation.</p>
      <button class="hero-button">Get Started</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<style scoped>
.hero-container {
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(../src/assets/pexels-cookiecutter-17489160.jpg);
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0 15rem 0;
}

.hero-content {
  margin:none;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.hero-subtitle {
  font-size: 2rem;
  margin-top: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}
.hero-description {
  font-size: 1.5rem;
  margin-top: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}
.hero-button {
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>