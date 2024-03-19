import axios from "axios";

const getUsersUsingAxios = async( url ) =>{
    try {
        const response = await axios.get(url);
        console.log(response);
        const users = response.data.data;
        return users; // Axios realiza una conversión implícita de json a Object
    } catch (error) {
        console.log(error);
    }
}


const getUsersUsignFetch = async( url ) => {
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const users = data.data;
        return users;
        
    } catch (error) {
        console.error( error );
    }

}

export {getUsersUsignFetch, getUsersUsingAxios};