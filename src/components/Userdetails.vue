<template>
  <div class="main-browse">
    <div 
      v-for="(user, index) in allUsers"
      :key="user.id"
      class="users">
      <div 
        :style="{backgroundColor: getColors[index]}" 
        class="user-logo">
        {{user.name[0]}}
      </div>
        <div><span><i class="fas fa-user"></i>&nbsp;&nbsp;
            </span>{{user.name}}
        </div>
        <div><span><i class="fas fa-envelope"></i>&nbsp;&nbsp;
            </span>{{user.email}}
        </div>
        <div><span><i class="fas fa-briefcase"></i>&nbsp;&nbsp;
            </span>{{user.occupation}}
        </div>
        <div><span><i class="fas fa-sticky-note"></i>&nbsp;&nbsp;
            </span>"{{user.bio}}"
        </div>
        <i class="fas fa-edit"></i>
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
        ...mapGetters(['allUsers']),
        getColors(){
        return this.$store.state.colors
      }
    },
}
</script>

<style scoped>
.main-browse{
    display:flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-size: cover;
    flex-grow: 1;
    align-items: center;
    flex-wrap: nowrap;
    margin-bottom: 50px;
}
.users{
    margin: 20px;
    padding: 50px;
    font-size: 30px;
    line-height: 2;
    border-radius: 60px;
    width: 800px;
    box-shadow: 5px 8px #888888;
    background-color: #E5E5E5
}
.users:hover{
    background-color: #a5a5a5;
    border: solid 1px #C4C4C4;
    position: relative;
    border-radius: 80px;
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
  .fa-edit{
    text-align: center;
    vertical-align: center;
    float: right;
    font-size: 40px;
     color: #777677;
  }
  .fa-edit:hover{
    color: #CB4B44;
  }
  .fa-user{
    font-size: 40px;
    color: #777677;
  }
  .fa-envelope{
    font-size: 40px;
    color: #777677;
  }
  .fa-briefcase{
    color: #777677;
    font-size: 40px;
  }
  .fa-sticky-note{
    font-size: 40px;
    color: #777677;
  }
  .user-logo{
    display: flex;
    justify-content: center;
    line-height: 2.5;
    font-size: 40px;
    font-weight: bold;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    float: right;
  }
</style>
