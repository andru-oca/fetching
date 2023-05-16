const API = "https://sheetdb.io/api/v1/b8p9r56bjqs5y";

const { createApp } = Vue;

const appId = "app";

const objectApp = {
    data: function(){
        return {
        vinosAPI: null
        }
    } 
    /*
    ,

    created: function(){
        fetch(API) 
        .then(res => res.json())
        .then(data => this.vinosAPI = data)
    }
     */
    
    ,
    methods:{
        fetchVinos: function(){
            console.log("data")
        fetch(API) 
        .then(res => res.json())
        .then(data => this.vinosAPI = data)
        .catch( error => console.log({error}))

        }
    }

   
};

const app = createApp(objectApp);

app.mount(`#${appId}`);