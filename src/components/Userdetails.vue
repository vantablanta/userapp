<template>
  <div class="main-browse">
    <div 
      v-for="user in allUsers"
      :key="user.id"
      class="users">
        <div><span>Name:&nbsp;&nbsp;
            </span>{{user.name}}
        </div>
        <div><span>Email:&nbsp;&nbsp;
            </span>{{user.email}}
        </div>
        <div><span>Occupation:&nbsp;&nbsp;
            </span>{{user.occupation}}
        </div>
        <div><span>Bio:&nbsp;&nbsp;
            </span>"{{user.bio}}"
        </div>
    </div>
  </div>
   
  
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Browse',

    mounted(){
      this.$store.dispatch('getUsers')
    },
    computed: {
        ...mapGetters(['allUsers'])
    },
}
</script>

<style scoped>
.main-browse{
    display:flex;
    flex-wrap: nowrap;
    margin-top: 400px;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 0px;
}
.users{
    border:  2px solid black;
    margin: 20px;
    padding: 20px;
    font-size: 30px;
}
span{
    font-weight: bold;
}
.buttons1{
    position: absolute;
    padding: 30px;
    width: 10%;
    border-radius: 80px;
    background-color: #CB4B44;
    border: 0;
    font-size: 30px;
    font-weight: bold;
    vertical-align: middle;
  }
  .buttons2{
    padding: 30px;
    width: 10%;
    border-radius: 80px;
    background-color: #918F90;
    border: 0;
    font-size: 30px;
    font-weight: bold;
    vertical-align: middle;
  }

</style>
