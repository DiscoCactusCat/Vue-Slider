app.component("slider", {
    props: {
       config:{
           type: Object,
       }
    },
    // TODO : Transition à débug sur le changement d'image
    template:`
    <div class="slider">
        
          <div class="img-container" >
          
            <transition name="fade">
                <img :src="currentImg" :key="currentImg"/>
               
            </transition>
            <div class="image-overlay">
             
            </div>
            <div class="image-overlay-2">
              <p>{{this.config.hoverText}}</p>
            </div>
          </div>
       
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
            this.isChanged = !this.isChanged;            
            return this.config.images[Math.abs(this.currentIndex) % this.config.images.length];
          }
    },
    mounted: function() {
        this.startSlide();
      },
    
   
})