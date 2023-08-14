import axios from "axios";

export async function getAll(page, typeProduct, nameProduct) {
    try{
        const  res = await axios.get(`http://localhost:8080/api/products/find-all?page=${page}&typeProduct=${typeProduct}&nameProduct=${nameProduct}`);
        return res.data;
    }catch (e) {
        console.log(e)
    }
}
