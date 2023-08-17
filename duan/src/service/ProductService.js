import axios from "axios";

export async function getColorFilter() {
    try{
        const  result = await axios.get(`http://localhost:8080/api/type/color`)
        return  result.data
    }catch (e) {
        console.log(e)
    }
}


export async function getAllType() {
    try{
        const  result = await axios.get(`http://localhost:8080/api/type`)
        return  result.data
    }catch (e) {
        console.log(e)
    }
}


export async function getColor(nameProduct) {
    try{
        const  result = await axios.get(`http://localhost:8080/api/products/color/${nameProduct}`)
        return  result.data
    }catch (e) {
        console.log(e)
    }
}


export async function getProductHat() {
    try{
        const  result = await axios.get(`http://localhost:8080/api/products/products`)
        return  result.data
    }catch (e) {
        console.log(e)
    }
}


export async function getAllProductByType() {
    try{
        const  result = await axios.get(`http://localhost:8080/api/products/type`)
        return  result.data
    }catch (e) {
        console.log(e)
    }
}


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


export async function deleteById(id,productId) {
    const token = localStorage.getItem('token')
    try {
        if (token != null){
            const res = await axios.delete("http://localhost:8080/api/shopping/delete/"+id,
                {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                })
            return res.data
        }
        else {
            const res = await axios.delete("http://localhost:8080/api/shopping/remove/"+productId ,
                {withCredentials: true})
            return res.data
        }

    } catch (e) {
        console.log(e)
    }

}

export const  addToCart=async (products, amount) =>{
    const token = localStorage.getItem('token')

    const newValue = {
        products : products,
        amount :amount
    }

    const id = products.id;

    if(token!== null){
        try {
            const result = await axios.post(`http://localhost:8080/api/shopping/create/${id}/${amount}` ,"",
                {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    }
                })
            return result.data
        } catch (error) {
            return  error

       }
    }else {
        try {
            const res = await axios.post("http://localhost:8080/api/shopping", newValue,
                {withCredentials: true})
            return res;

        }catch (e) {
            return e;
        }

    }

}


export const   calculate = async (id, index,productId,idColor)   =>{



    const token = localStorage.getItem('token')

    if(token!== null){
        try {
            const result = await axios.patch(`http://localhost:8080/api/shopping/${index}/${id}/${idColor}` ,"",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            return result.data
        } catch (error) {
           return error;
        }
    }else {
        try {
            const res = await axios.patch(`http://localhost:8080/api/shopping/${index}/${productId}/${idColor}`, "",
                {withCredentials: true})
            return res;
        }catch (e) {
            return e;
        }

    }


}


export async function getAllShopping() {
    const token = localStorage.getItem('token')

    try {
        if (token != null){
            const res = await axios.get("http://localhost:8080/api/shopping",
                {
                    headers: {
                        Authorization: `Bearer ${token}`

                    }
                })
            return res.data
        }
        else {
            const res = await axios.get("http://localhost:8080/api/shopping/list-session",
                {withCredentials: true})
            return res.data
        }

    } catch (e) {
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






export const  getAll=async (page,sortBy,price,color,typeProduct,nameProduct) =>{
    try{
        const  res = await axios.get(`http://localhost:8080/api/products?page=${page}&sortBy=${sortBy}&price=${price}&color=${color}&typeProduct=${typeProduct}&nameProduct=${nameProduct}`);
        return res.data;
    }catch (e) {
        console.log(e)
    }
}
