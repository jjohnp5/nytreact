import axios from 'axios';

export default {
    saveArticle : function(article){
        axios.post('/articles', {
            _id: article._id,
            title: article.headline.main,
            author: article.byline ? article.byline.original : "Public Article",
            snippet: article.snippet,
            url: article.web_url
        }).then(data=>{
            console.log(data);
            // return data.data;
        }).catch(err=>console.log(err))
    },
    getAllArticles: ()=>{
        axios.get('/articles').then(data=>{
            return data;
        }).catch(err=>console.log(err))
    }
}