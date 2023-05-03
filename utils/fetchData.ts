import axios from "axios";
const fetchData = async (url:string) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {   
        console.log(error)
    }
}

export default fetchData;