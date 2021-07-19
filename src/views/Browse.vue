<template>
    <div 
      :style="image"
      class="main-browse">
      <div
        id="first"
        class="names"
        v-for="(user, index) in getUsers" 
        :key="user.id"
      >
        <div
          id='user'
          :style="{backgroundColor: getColors[index]}">
          <div>{{user.name[0]}}</div>
          
          
          
        </div>
      </div>

    </div>
      
  
</template>

<script>
export default {
    data () {
        return {
            image:{
                backgroundImage: `url(${require('@/assets/browse2.jpg')})`
            },
            perPage: 4,
            pageNumber: 0
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
    font-size: 80px;
    line-height: 2.5;
  }
  #first{
    grid-area: start;
  }
 

</style>