<template>
    <div class="home-page">
        <img class="logo" alt="Vue logo" src="../assets/logo.png">
        <div class="home-image">
        <transition-group name="fade" tag="div">
            <div v-for="i in [currentIndex]" :key="i">
            <img class="home-image" :src="currentImage" />
            </div>
        </transition-group>
        <i class="fas fa-chevron-left" @click="prev"></i>
        <i class="fas fa-chevron-right" @click="next"></i>
        </div>
        <h2 
          v-for="text in [currentTextIndex]" :key="text"
          class="text1"> {{currentText}}
        </h2>
        
    </div>
    
</template>

<script>
export default {
    name: 'Homepage',
    data(){
        return {
            images:[
                'https://pixabay.com/get/g790a084b35ed318ee446701e537f33506f38131b4e666e41bb44edf157d5b191ffcc4430d90301f8557593a4fb1aacc3_1920.jpg',
                'https://pixabay.com/get/g410464ac5115c82bf350b9b5b2d9287bc1eb81fdaf10da7731b92f8d2fbdea163c325e09065225d4915113359b45bba4_1920.jpg',
                'https://pixabay.com/get/gd0a54f8cb4deceb86d23e727f58f194084404569fe777a5e0ba9a3926bb7a2296a487585dfdce1afc10c2a537821f151_1920.jpg',
            ],
            texts:[
                'Check all your favorite bios',
                'Discover bios from different people',
                'Edit any bio you would like'
            ],
            timer: null,
            currentTextIndex: 0,
            currentIndex: 0,
        }
    },
    mounted(){
        //this.startSlide()
    },
    methods: {
        startSlide() {
        this.timer = setInterval(this.next, 6000);
        },
        next() {
        this.currentIndex += 1;
        this.currentTextIndex += 1;
        },
        prev() {
        this.currentIndex -= 1;
        this.currentTextIndex -= 1;
        }
    },
    computed: {
        currentImage() {
            return this.images[Math.abs(this.currentIndex) % this.images.length];
        },
        currentText() {
            return this.texts[Math.abs(this.currentTextIndex) % this.texts.length];
        }
    }
}
</script>

<style scoped>
  .home-page{
    overflow-y:hidden;
    margin: 0;
  }
  .home-image{
    width: 100%;
    height:fit-content;
  }
  .logo{
    position: absolute;
    width: 15%;
    top: 60px;
    left: 90px
  }
  h2{
    text-align: center;
    justify-content: center;
  }
  .text1{
    position: absolute;
    font-size: 90px;
    color: #E5E5E5;
    top: 600px;
    right: 500px 
  }
  i{
    font-size: 80px;
  }
  .fa-chevron-left{
    position: absolute;
    top: 600px;
    left: 50px;
    color: #918F90;
  }
  .fa-chevron-right{
  position: absolute;
  top: 600px;
  right: 50px;
  color: #918F90;
  }
</style>