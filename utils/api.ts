import axios from "axios";

const baseUrl = 'https://gist.githubusercontent.com/mosgizy/fecbe2da3715d3f85becbed4e0676999/raw/18404c47aadcf82e9b2ebbbd291e19b363da9026/';

const getData = async (url: string) => {
    
    try {
        const response = await axios.get(baseUrl + url);
        return response.data;
    } catch (error) {   
        console.log(error)
    }
}

export default getData;

