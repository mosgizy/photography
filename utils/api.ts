import axios from "axios";

const baseUrl = 'https://gist.githubusercontent.com/mosgizy/fecbe2da3715d3f85becbed4e0676999/raw/3946112cac03441dc72e4ddb45c485d59ad7d125/';

const getData = async (url: string) => {
    
    try {
        const response = await axios.get(baseUrl + url);
        return response.data;
    } catch (error) {   
        console.log(error)
    }
}

export default getData;

