import axios from "axios";

const baseUrl = 'https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/';

const getData = async (url: string) => {
    
    try {
        const response = await axios.get(baseUrl + url);
        return response.data;
    } catch (error) {   
        console.log(error)
    }
}

export default getData;