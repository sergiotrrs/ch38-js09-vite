// Import our custom CSS
import './styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { getUsersUsignFetch, getUsersUsingAxios } from './src/js/getUsers'
import { userCards } from './src/js/userCards'

const getUsers = async()=>{
    // const users = await getUsersUsignFetch("https://reqres.in/api/users?page=2");
    // const users = await getUsersUsingAxios("https://reqres.in/api/users?page=2");
    const users = await getUsersUsingAxios("./src/json/users.json");
    console.log( users );
    userCards( users );
}

getUsers();