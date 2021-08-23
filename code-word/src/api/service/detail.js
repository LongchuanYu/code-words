import axios from "axios"


export function getDetail(){
    return axios.get('https://www.fastmock.site/mock/d89a70b0a27e68bdb67cd2f6b328dcd2/code/words')
 }