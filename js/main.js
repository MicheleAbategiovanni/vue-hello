const { createApp } = Vue;

createApp ({
    data(){

        return {

            titlePage: "Hello VUE!",
            alt: "immagine logo VUE",
            img: "img/vue.png",
            classImg: "img-fluid",
            classTitle: "text-center text-primary",
        }

    },
    methods:{

    }
}).mount("#app");