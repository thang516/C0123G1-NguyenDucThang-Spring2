import axios from "axios";

export async function getAll(page, typeProduct, nameProduct) {

    const token = localStorage.getItem('token')
        const  res = await axios.get(`http://localhost:8080/api/products/find-all?page=${page}&typeProduct=${typeProduct}&nameProduct=${nameProduct}`,
            {
                    headers: {
                            "Authorization": `Bearer ${token}`,
                    }
            })

        return res;
}
