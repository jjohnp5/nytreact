import axios from 'axios';

export default {
    saveArticle : function(article){
        return axios.post('/articles', {
            _id: article._id,
            title: article.headline.main,
            author: article.byline ? article.byline.original : "Public Article",
            snippet: article.snippet,
            url: article.web_url,
            date: article.pub_date
        })
    },
    getAllArticles: ()=>{
        return axios.get('/articles')
    }
}