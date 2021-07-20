<template>
    <div>
    <div 
      :style="image"
      class="main-browse">
      <div
        class="names"
        v-for="(user) in getUsers" 
        :key="user.id">
        <div
          id='user'
          :style="{backgroundColor: getColors}">
          <div>{{user.name}}</div>
        </div>
      </div>
      </div>
        <button @click="prev()" class="buttons2">Prev</button>
        <button @click="next()" class="buttons1">Next</button>
    </div>

         
</template>

<script>
export default {
    data () {
      return {
        image:{
          backgroundImage: `url(${require('@/assets/browse2.jpg')})`
        },
        perPage: 5,
        pageNumber: 0
      }
    },
    methods: {
      next(){
        this.perPage = this.perPage + 2;
      },
      prev(){
        this.perPage = this.perPage - 2;
      }
    },
    mounted(){
      this.$store.dispatch('getUsers')
    },
    computed: {
      getColors(){
        return this.$store.state.colors
      },
      getUsers(){
        return this.$store.state.users.slice(this.pageNumber * this.perPage, 
            this.pageNumber * this.perPage + 1 + this.perPage)
      }
    }
}
</script>

<style scoped>
  .main-browse{
    display: flex;
    position:unset;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    margin: 0;
  }
  #user{
    padding: 50px; 
    margin-top: 500px;
    margin-bottom: 500px;
    margin-left: 50px;
    margin-right: 50px;
    width: 200px;
    height: 200px;  
    border-radius: 50%;
  }
  .names{
    text-align: center;
    align-items: center;
    font-size: 30px;
    line-height: 3;
  }
  .buttons1{
    position: absolute;
    padding: 30px;
    margin: 100px;
    width: 10%;
    border-radius: 80px;
    background-color: #CB4B44;
    border: 0;
    font-size: 30px;
    font-weight: bold;
    vertical-align: middle;
    bottom: -50px;
    right: 600px
  }
  .buttons2{
    position: absolute;
    margin: 100px;
    padding: 30px;
    width: 10%;
    border-radius: 80px;
    background-color: #918F90;
    border: 0;
    font-size: 30px;
    font-weight: bold;
    vertical-align: middle;
    bottom: -50px;
    left: 600px
  }
</style>