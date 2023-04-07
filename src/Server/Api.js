import axios from 'axios';

const URL='http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'

export const products=async()=>{
    try{
        return await axios.get(URL)
    }
    catch(error){
        console.log("error while connecting the API",error.message)
    }


}

// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))