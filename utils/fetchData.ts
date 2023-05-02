import axios from "axios";
const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/getProducts');
        return response.data;
    } catch (error) {   
        console.log(error)
    }
}

export default fetchData;