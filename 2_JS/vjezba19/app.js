const {createApp} = Vue;

createApp({
    data(){
        return{
            brojac:0
        }
    },
    methods:{
        povecaj(){
            this.brojac++;
        },
        smanji(){
            this.brojac--;
        },
        plus2(){
            this.brojac +=2;
        },
        plus2(){
            this.brojac +=2;
        },
        minus2(){
            this.brojac -=2;
        }
    }
}).mount('#app');