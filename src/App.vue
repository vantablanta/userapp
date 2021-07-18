<template>
  <div class ="nav" id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/browse">Browse</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
  <router-view/>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
  #app {
    font-family: Rubik, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
    overflow-x: hidden;
    overflow-y:hidden;

  }
  .nav{
    position: absolute;
    right: 200px;
    top: 200px;
    align-items: center;
    background-color: #CB4B44;
    border-radius: 80px;
    width: 22%;
    align-content: space-around;
  }
  #nav {
    padding: 30px;
    
  }
  #nav a {
    padding: 50px;
    font-size: 30px;
    font-weight: bold;
    color: #000;
    text-decoration: none;
  }
  #nav a.router-link-exact-active {
    color: #E5E5E5;
  }
  </style>
