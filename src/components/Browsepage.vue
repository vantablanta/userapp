<template>
    <div class="browse-page">
        <img class="browse-img" alt="Vue logo" src="../assets/browse.jpg">
        <div class="first"></div>
        <div class="second">
            <button class="buttons2">Search</button>
            <div>
                <h1>Discover  Bios from Allover</h1>
                <h2>View  bios from real people</h2>
                <p style="font-weight: bold">Get a chance to update them
                <br>Read how your friends are describing <br>themselves.
                Discover millions of Bios here</p>
            </div>
            <button class="buttons">Load More</button>
        </div>
   </div>
    
    
</template>

<script>
export default {
    name: 'Browsepage', 
}
</script>

<style scoped>
h1{
    color: #FF5750;
}
.browse-img{
    overflow: hidden;
    width: 100%;
    opacity: 0.7;
    margin-top: 0;
    position: absolute;
    height: fit-content;
}
.browse-page{
    display: grid;
    grid-template-columns: [first]50%  [second]50%;
    grid-template-areas: first second ;
}
.first{
    position: absolute;
    grid-area: first;

}
.second{
    font-size: 30px;
    text-align: left;
    position: absolute;
    grid-area: second;
    right: 100px;
    top: 1800px 
}
.buttons{
    font-size: 30px;
    font-weight: bold;
    padding: 35px;
    width: 35%;
    border-radius: 80px;
    background-color: #CB4B44;
    border: 0;
}
.buttons2{
    position: absolute;
    top: -300px;
    right: 20px;
    font-size: 30px;
    font-weight: bold;
    padding: 35px;
    width: 35%;
    border-radius: 80px;
    background-color: #CB4B44;
    border: 0;
}
</style>