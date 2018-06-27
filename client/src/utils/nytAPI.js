import axios from 'axios';

const runNYTQuery = (term, start, end) =>{
    return axios.get(`/nyt/search/${term}/${start}/${end}`
    )
  }

  export default runNYTQuery;