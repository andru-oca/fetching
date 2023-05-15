const API = "https://sheetdb.io/api/v1/b8p9r56bjqs5y";

const { createApp } = Vue;
const appId = "app";

const objectApp = {
    data: function(){
        return {
             lineCreate: null,
        headerImage: null,
        vino: null,
        typing: false,
        data: null,
        vinosAPI: null
        }
    } ,

    created: function(){
        fetch(API).then(res =>res.json()).then(data => this.vinosAPI =  data)
    }
     

        
   
};

const app = createApp(objectApp);

app.mount(`#${appId}`);