app.component("slider", {
    props: {
       config:{
           type: Object,
       }
    },
    template:`
    <div class="slider">
        <transition name="fade">
        <div class="img-container" v-for="i in [currentIndex]" :key="i">
            <img :src="currentImg" />
        </div>
        </transition>
        <a class="prev" @click="prev" href="#">&#10094;</a>
        <a class="next" @click="next" href="#">&#10095; </a>
    </div>
    
    `,
    data() {
        return {
          timer: null,
          currentIndex: 0,
        };
      },
    methods: {
            
           
      
          next: function() {
            this.currentIndex += 1;
          },
          prev: function() {
            this.currentIndex -= 1;
          },
          startSlide: function() {
            this.timer = setInterval(this.next, this.config.interval);
          },
        
    },
    computed: {
        currentImg: function() {
            return this.config.images[Math.abs(this.currentIndex) % this.config.images.length];
          }
    },
    mounted: function() {
        this.startSlide();
      },
   
})