import axios from "axios";

export async function detail(id) {
    const token = localStorage.getItem('token')
    const result = await axios.get(`http://localhost:8080/api/posts/detailPosts/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    return result.data
}


export async function findAllPosts() {
    const token = localStorage.getItem('token')
    const result = await axios.get(`http://localhost:8080/api/posts?_sort=createTime&_order=desc`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    return result.data
}


export async function findByName(title) {
    const token = localStorage.getItem('token')
    const result = await axios.get(`http://localhost:8080/api/posts?titleSearch=${title}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    return result.data
}


export async function deleteById(id) {
    const token = localStorage.getItem('token')

    try {
            const res = await axios.delete(`http://localhost:8080/api/products/delete/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
                });
            return res.data
    } catch (e) {
        console.log(e)
    }



}


export async function   getAll(page, typeProduct, nameProduct) {

    const token = localStorage.getItem('token')
        const  res = await axios.get(`http://localhost:8080/api/products/find-all?page=${page}&typeProduct=${typeProduct}&nameProduct=${nameProduct}`,
            {
                    headers: {
                            "Authorization": `Bearer ${token}`,
                    }
            })

        return res;
}
