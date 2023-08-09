import axios from "axios";

const username = localStorage.getItem('username');

export async function addToCart(products, amount) {
    try{
      return   await axios.post(`http://localhost:8080/api/shopping/create/${username}/${products}/${amount}`);

    }catch (e) {
        console.log(e)
    }

}


export async function calculate(id, index) {
    try{
      await axios.patch(`http://localhost:8080/api/shopping/${index}/${id}`);

    }catch (e) {
        console.log(e)
    }

}


export async function getAllShopping(username) {
    try{
        const  res = await axios.get(`http://localhost:8080/api/shopping/${username}`);
        return res.data;
    }catch (e) {
        console.log(e)
    }

}


export async function detailProduct(id) {
    try{
        const  res = await axios.get(`http://localhost:8080/api/products/detail/${id}`);
        return res.data;
    }catch (e) {
        console.log(e)
    }

}





export async function getAllImg() {
    try{
        const  res = await axios.get(`http://localhost:8080/api/image`);
        return res.data;
    }catch (e) {
        console.log(e)
    }
}



export const  getAll=async (page,sortBy,price,color,typeProduct,nameProduct) =>{
    try{
        const  res = await axios.get(`http://localhost:8080/api/products?page=${page}&sortBy=${sortBy}&price=${price}&color=${color}&typeProduct=${typeProduct}&nameProduct=${nameProduct}`);
        return res.data;
    }catch (e) {
        console.log(e)
    }
}
