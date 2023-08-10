import axios from "axios";

export async function productNew() {
    try{
        const  result = await axios.get(`http://localhost:8080/api/products/new-product`)
        return  result.data
    }catch (e) {
        console.log(e)
    }
}


export async function getAllCustomer(page) {
    try{
       const  result = await axios.get(`http://localhost:8080/api/customers?page=${page}`)
        return  result.data
    }catch (e) {
        console.log(e)
    }
}


export async function deleteById(id) {
    try{
        await axios.delete("http://localhost:8080/api/shopping/delete/"+id)

    }catch (e) {
        console.log(e)
    }
}


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
