<template>
    <div class="footer">
     <img alt="logo" src="../assets/logo.png">
    <div class="copyright">
         &copy; Copyright All Rights Reserved | Michelle Njeri 
    </div>
    <div class="nav2">
        <router-link to="/">Home</router-link>
        <router-link to="/browse">Browse</router-link>
        <router-link to="/contact">Contact</router-link>
    </div>
    </div>
        


    
    
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
.footer{
    
    padding-top:20px;
    margin-bottom: 0;
    background-color:#E5E5E5 ;
    width: 100vw;
    display: grid;
    grid-template-columns: [start]25% [middle]50% [end]25%; 
}
.copyright{
    font-size: 40px;
    margin: 50px;
    text-align: center;
}
.nav2{
    margin: 20px;
    padding:20px;
    font-size: 30px;
    display: flex;
    flex-flow: column nowrap;
}

</style>