<template>
    <div class="browse-page">
        <div 
            :style="image"
            class="first">
            <div
                class="names"
                v-for="(user, index) in getUsers" 
                :key="user.id">
                <div
                    id='user'
                    :style="{backgroundColor: getColors[index]}">
                    {{user.name[0]}}
                </div>
            </div>
        </div>
        <div class="second" style="grid-area:end;">
            <button 
                class="buttons2">Search 
                <i class="fas fa-search"></i>
            </button>
            <div>
                <h1>Discover  Bios from Allover</h1>
                <h2>View  bios from real people</h2>
                <p style="font-weight: bold">Get a chance to update them
                <br>Read how your friends are describing <br>themselves.
                Discover millions of Bios here</p>
            </div>
            <button  @click="loadMore()" class="buttons">Load More</button>
        </div>
   </div>   
</template>

<script>
export default {
    name: 'Browsepage',
    data () {
        return {
            image:{
                backgroundImage: `url(${require('@/assets/browse.jpg')})`
            }
        }
    },
    methods: {
        loadMore(){
        this.$router.push('/browse')
      }
    },
    mounted(){
        this.$store.dispatch('getUsers')
    },
    computed: {
        getUsers(){
            return this.$store.state.users.slice(0,5)
        },
        getColors(){
            return this.$store.state.colors
        }
    },   
}
</script>

<style scoped>
    #user{
        padding: 10px; 
        margin: 50px;
        width: 200px;
        height: 200px;  
        border-radius: 50%;
    }
    .names{
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: row;
        position:relative ;
        font-size: 80px;
        line-height: 2.5;   
    }
    h1{
        color: #FF5750;
    }
    .browse-page{
        display: grid;
        grid-template-columns: [start]60%  [end]40%;
    }
    .first{
        display: flex;
        grid-area: start;
        width:100%;
        height: 100%
    }
    .second{
        
        position: relative;
        float: left;
        font-size: 30px;
        margin-left: 50px;
        margin-top: 100px;
        grid-area: end;  
    }
    .buttons{
        position: relative;
        font-size: 30px;
        font-weight: bold;
        padding: 30px;
        bottom: 20px;
        width: 30%;
        border-radius: 80px;
        background-color:  rgba(203, 75, 68, 0.8);;
        border: 0;
    }
    .buttons2{    
        position: relative;
        top: -40px;
        left: 500px;
        font-size: 30px;
        font-weight: bold;
        padding: 25px;
        width: 30%;
        border-radius: 80px;
        background-color: #CB4B44;
        border: 0;
    }
    .fa-search{
        padding: 10px;
    }
    .browse-page{
        background-color: #F8F5F5;
    }
</style>