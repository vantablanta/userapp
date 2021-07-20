<template>
    <div class="browse-page">
        <div 
            :style="image"
            class="first">
            <div
                @click="detailsPage()"
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
            <div>
                <h1>Discover  Bios from Allover</h1>
                <h2>View  bios from real people</h2>
                <p 
                    style="font-weight: bold">
                    Get a chance to update them
                    <br>Read how your friends are describing <br>themselves.
                    Discover millions of Bios here
                </p>
            </div>
            <button @click="loadMore()" class="buttons">Load More</button>
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
        },
        detailsPage(){
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
        },
    }        
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
        background-color: #F8F5F5;
        margin-bottom: 20px;
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
        padding:50px;
       
        grid-area: end;  
    }
    .buttons{
        position: relative;
        font-size: 30px;
        font-weight: bold;
        bottom: 5px;
        padding: 20px;
        width: 20%;
        border-radius: 60px;
        background-color:  rgba(203, 75, 68);;
        border: 0;
    }
    .buttons:hover {
        background-color: #C4C4C4;
        border: solid 1px #C4C4C4;
        width: 22%;
        position: relative;
        font-size: 30px;
        border-radius: 80px;
    }
    #user:hover{
      background-color: #C4C4C4;
      border: solid 5px #C4C4C4;  
    }
    
</style>