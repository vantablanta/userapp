<template>
    <div class="home-page">
        <img class="logo" alt="Vue logo" src="../assets/logo.png" @click="reload()">
        <div class="home-image">
        <transition-group name="fade" tag="div">
            <div v-for="i in [currentIndex]" :key="i">
              <img class="home-image" :src="currentImage" />
            </div>
        </transition-group>
        <i class="fas fa-chevron-left" @click="prev"></i>
        <i class="fas fa-chevron-right" @click="next"></i>
        </div>
        <h2 style="color: #FCB4AC;"
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
                'https://lh3.googleusercontent.com/HI99D5nW0eBGsc_e6B-PTTxKoInT5jnHZbSI-ahnaWY-kbUMH9u2P4BaiGbXnxd__DkjTT71jiG7D_lX-KQ4YIHhG4pygdG47KyIa4d8Hf1e4FN0sei43OCL3uPY5c0K5t8QkGVaHt_MGtO4YdQXAfmrw-l80xc9dbED1NKEdyrClJzYNFQDhZ0MaOR62lheu7uOUGMzKXr6FiYld8Hcmvjd0b6Zy6yQbDEC_Lk3PuU-7Y0bGK1fbF2riU2VK3tXQGNmPdu-lIUagcLknuBBhXXJm7mwvAWOZyeKDAgOdoZ6hEfvHMpMBKK1VFLCjYFOQNSXqIptxSutSAUEI105uGvzLKeTvUXz5pDIWSx-qJ780xQ6Wlen79_rZUPpDRmHkbg3ovZrtYui5YEb4xMzkAB5sQbXR1tT_FGSsClomJ2i9i_L6yLl6yVYDa3zUyRZcMl5wISsFjFl5WWdLwoA1g-MI_coHD1mPbOAX8KnDaLtte4c0olIYsNc1LOJCUDtdq_-WuuDA7BPUdWZkoxbFhw0CaMvo99RYNBNAm6RHquvYkkoAIxdPj06uMCEeA18iOEcXYEsKaDZBtGSDYZqi6iAf8V5OajgF6ayRcmwBZoYKfogdYU0LXCqSKEm7js2E9PkWGcaX5fqb2c-YO5pqgrnteO7v78iCw_Tr3kMvbwcTyapCeqHLAfjXDJUhBAbnCQ8lIpGetTlnv2sfrOc1auh=w1920-h1300-no?authuser=0',
                'https://lh3.googleusercontent.com/GAaR8t92_Sy5k2TyvjOLKw6gLjYcA8kyJIu60F6NEVjSe91_6Bx_lhJ1Gv8v3lSTfs6OLZOUf4_OnnAJGYVbhE4khJjz5pGdBvoUVTa5gCuVzJzKjIvUqI5ZFzYdXu1vMcJR7jGpfKwTs8_Z6WHQqz7reDNj7oE1elHPuvS0Atz-kHVH3EbziHmmy3JlQodxEaqmXq6JRH1uYtbyWo7bLF3BKARUVqyY6k_cSmP6H5oC2kaz3mWpp4QsJh6-BYXJlBCAUl2clE9hiMYi66m_RXVMEUPsYYR6gdeygfgyiFS-gOv2XRpxAs12iJIyf4fD7jcrbylmNxDBthGT9tPWrj2Z941hh87H-W7B6MkU_l3gKmzDFzPvMMClB_hQNoPDTWBCn7GCyh7LqYPcfth83q5v8oOjDh-B7IIl7446xCAr_XJtsFC7NlZIV_is1IPOGvSNE03LLgDMXachntIrfq2do66_uxbUm1IxL1CsjlqfY0pHHNecT0g2GCf7VGkwhHCmIYK8KpBU8ce6Hjkbg0bcZWra35e4m67fjjpoehv_nFS-T5ShlC45MCTmxuL-obZD1jWr0gyVCcTwMluADTucOVbNFwd_kn_ZyjcwAWFRsQzxS2bFflT2xPgX11M9pbES4FItF-RdjogXwPkwhg5_JWQgZYTI9yTGnHv76LkFlgC94wafurlOjXm42p5hmA8TIvedcGuvdDF0nXUf4Vjn=w1920-h1300-no?authuser=0',
                'https://lh3.googleusercontent.com/prawWxALlVIIXd3OqMhw-0Fdvc32tRLzX7bOeRfUBHP_WpJ4R8MBwKk8sRJc_bN_sarwGQMCjfsiPQ3AXROzyIjRld-ER7GK6v0yKeYjctUrvePCaXoaWPzcJPRU9SyNmx68nKRP7mGg3XrK5tpSvqZ1gGWu5aDC5DYTUcD_S-o92d6AILjq4bQKdE4olo4SONIRyeJZOKAKEdZ9LLG3yTzgYSlMtd1ySsDzTLojAUqpDS05iVyCPHfOjxJU4IP3I6SsqDGPKX1NrVnSXUUbjGbQAs7CxqkMgXEeQwSHxPRfftYRjQ75IgJeqD_TEkjyUHbCJMv7ce0oA_oxiedOvfEW1ze0PFFjkztjauvUUw4IqQ3B_1ve9l8Yxbdw6HSWsNygozE8v431uaJ_q37TfBJcGIFZj0SZUjnYFmM_VtfmRInNHgMS2xgCyYK06zSv37sRGte-6pY6DXhwDxbkiI7td5iKARuaeyc5xt5H74tg7T1DyUgHHm0l6gXlrroaijmYLOnzFaE70FccBPjb6oJlti-OJ-FKz7sD6-8D2boyF9jnL6GA_uSNAUUGm04O6ayfo-c_WXCjUht00hrjjO5cbAxKj4mGJLPqnjIfqQ9p-Zq_Q-rRWOwwbMyucxH-1GbltW20OiRn_KPENexri4fA_kUfd73cNjd7h5oqcBwtuv8vfJj3q0JjTDCuoEdDtwc3blmoBwpr8vo9EeGRwVSR=w1920-h1300-no?authuser=0',
                
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
        },
        reload(){
          this.$router.push('/')
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
    margin-bottom: 20px;
  }
  .home-image{
    display: block;
    margin-top: 0;
    width:100%;
    height:auto;
  }
  .logo{
    position: absolute;
    width: 15%;
    top: 60px;
    left: 90px
  }
  h2{
    text-align: center;
  }
  .text1{
    position: absolute;
    font-size: 90px;
    color: #E5E5E5;
    text-align: center;
    top: 600px;
    left: 800px 
  
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