import axios from 'axios';

const API_URL = "http://localhost:8080/api/links";

class LinkService {
    getLinks(){
        axios.get(API_URL);
    }
}

export default new LinkService();