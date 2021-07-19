<template>
    <div class="footer">
        <img alt="logo" src="../assets/logo.png">
        <div class="form">
           <!-- INSERT CONTACT FORM HERE -->
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
</style>