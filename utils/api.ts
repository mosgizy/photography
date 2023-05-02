import axios from "axios";

const baseUrl = 'https://gist.githubusercontent.com/mosgizy/fecbe2da3715d3f85becbed4e0676999/raw/7e911437be3be24574b05b37033b9dbe430c1888/';

const getData = async (url: string) => {
    try {
        const response = await axios.get(baseUrl + url);
        return response.data;
    } catch (error) {   
        console.log(error)
    }
}

export default getData;

