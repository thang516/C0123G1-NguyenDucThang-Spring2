import axios from "axios";

export async function getAllOrdersDetail() {
    try{
        const  res = await axios.get(`http://localhost:8080/api/order-detail`);
        return res.data;
    }catch (e) {
        console.log(e)
    }
}


export const  getAll=async (page) =>{
    try{
        const  res = await axios.get(`http://localhost:8080/api/products?page=${page}`);
        return res.data;
    }catch (e) {
        console.log(e)
    }
}
