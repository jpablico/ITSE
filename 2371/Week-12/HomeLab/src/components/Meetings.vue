<template>
  <div class="meetings-container">
    <div class="meetings-list-container">
      <h2 class="meetings-title">Meeting List</h2>
      <button class="meeting-button" @click="toggleMeetings">Show/Hide Meetings</button>
      <ul v-if="showMeetings">
        <li>Collin College - Plano 11pm</li>
        <li>Collin College - Frisco 2pm</li>
        <li>Collin College - Wylie 11pm</li>
        </ul>
    </div>
    <div class="meetings-list-container">
      <h2 class="meetings-title">Event List</h2>
      <button class="meeting-button" @click="toggleEvents">Show/Hide Events</button>
      <ul v-if="showEvents">
        <li>GIP Networks - Data Center tour</li>
        <li>Cisco Plano Office tour</li>
        <li>Coffee & Servers - Plano Campus</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMeetings: true,
      showEvents: true,
    };
  },
  methods: {
    toggleMeetings() {
      this.showMeetings = !this.showMeetings;
    },
    toggleEvents() {
      this.showEvents = !this.showEvents;
    },
  },
};
</script>

<style scoped>
.meetings-container {
  padding: 20px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: row;
  width: 100%;
}

.meetings-list-container {
  margin: 20px 0;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  flex: 1;
}
.meetings-title {
  font-size: 24px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
}
.meeting-button {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
.meeting-button:hover {
  background-color: #0056b3;
}
.meeting-button:focus {
  outline: none;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 5px;
  background-color: #e9ecef;
  margin-bottom: 5px;
}
li:hover {
  background-color: #dee2e6;
}
li:focus {
  outline: none;
  background-color: #ced4da;
}
li:active {
  background-color: #adb5bd;
}

</style>