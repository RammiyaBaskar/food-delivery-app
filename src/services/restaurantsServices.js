import axios from 'axios';
import { RESTAURANTS } from '../constants'; 

export const getRestaurants=()=>
{
    axios.get(RESTAURANTS)
    .then((response)=>
    {
        console.log(response.data);
    }).catch((error)=>
    {
        console.log(error);
    });
}