const RootComponent = {
    data(){
        return{

            title: "A simple slider demo with Vue 3.0",            
            
            config1:{
                interval: 8000,
                images: [
                    "./assets/images/img1.jpg",
                    "./assets/images/img2.jpg",
                    "./assets/images/img3.jpg",
                    "./assets/images/img4.jpg",
                    "./assets/images/img5.jpg",
                    "./assets/images/img6.jpg",
                    "./assets/images/img7.jpg",
                    ],
                hoverText: "Travel",
            },
            
           

            config2:{
                interval: 5000,
                images: [
                    "./assets/images/img10.jpg",
                    "./assets/images/img11.jpg",
                    "./assets/images/img12.jpg",
                    "./assets/images/img13.jpg",
                    "./assets/images/img14.jpg",
                    ],
                hoverText: "Discover",
            },
        }
    },
    methods:{
       
    },
    computed:{
        
    
    },
  
  
};
const app = Vue.createApp(RootComponent);
