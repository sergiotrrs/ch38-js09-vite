// Import our custom CSS
import './styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { getUsersUsignFetch } from './src/js/getUsers'

const getUsers = async()=>{
    const users = await getUsersUsignFetch("https://reqres.in/api/users?page=2");
    console.log( users );
}

getUsers();