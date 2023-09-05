package com.example.back_end_spring2.repository;


import com.example.back_end_spring2.DTO.IImageDTO;
import com.example.back_end_spring2.DTO.IProductDTO;
import com.example.back_end_spring2.model.Images;
import com.example.back_end_spring2.model.ProductType;
import com.example.back_end_spring2.model.Products;
import com.example.back_end_spring2.model.Sizes;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface IProductRepository extends JpaRepository<Products, Integer> {

//
//    @Query(value = "SELECT p.id as id ,\n" +
//            "        p.name_product as nameProduct,\n" +
//            "        p.price as price,\n" +
//            "    p.description as description,\n" +
//            "    i.img_url as images\n" +
//            " p.stock_quantity as stockQuantity\n" +
//            "FROM products p\n" +
//            "                     INNER JOIN images i on p.id = i.product_id\n" +
//            "\n" +
//            "                      WHERE p.is_delete = false AND i.id in (select min(i.id)\n" +
//            "                                                             from images i\n" +
//            "                                                             group by i.product_id)\n" +
//            "                      ORDER BY p.price DESC ", nativeQuery = true)
//    Page<IProductDTO> getAll(Pageable pageable);

    @Query(value = "select p.* from products p where p.id = :id", nativeQuery = true)
    Products findByProduct(@Param("id") Integer id);


    @Query(value = "SELECT\n" +
            "    p.id AS id ,\n" +
            "\n" +
            "    c.name_color     AS colorName,\n" +
            "       p.name_product   AS nameProduct,\n" +
            "       p.price          AS price,\n" +
            "       p.description    AS description,\n" +
            "       i.img_url        as images,\n" +
            "       p.stock_quantity as stockQuantity\n" +
            "FROM products p\n" +
            "        INNER JOIN colors c on c.id = p.colors_id\n" +
            "         INNER JOIN product_type pt on p.product_type_id = pt.id\n" +
            "         INNER JOIN images i on p.id = i.product_id\n" +
            "WHERE p.is_delete = FALSE\n" +
            "  AND p.stock_quantity > 0\n" +
            "  AND p.price BETWEEN :from AND :to\n" +
            "  AND c.name_color LIKE :color\n" +
            "  AND pt.name_type LIKE :typeProduct\n" +
            "  AND p.name_product LIKE :nameProduct\n" +
            "  AND i.id IN (select min(i.id)\n" +
            "               from images i\n" +
            "               group by i.product_id)", nativeQuery = true)
    Page<IProductDTO> getProducts(Pageable pageable, @Param("from") double from, @Param("to") double to, @Param("color") String color, @Param("nameProduct") String nameProduct, @Param("typeProduct") String typeProduct);


    @Query(value = "SELECT MAX(price)\n" +
            "            FROM products\n" +
            "            WHERE is_delete = FALSE\n" +
            "              AND  products.stock_quantity > 0", nativeQuery = true)
    double getMaxPrice();

    @Transactional
    @Modifying
    @Query(value = "UPDATE product p SET p.is_delete = true where p.id  = :id ", nativeQuery = true)
    void deleteByIdShopping(@Param("id") Integer id);

    @Query(value = "SELECT p.id as id ,\n" +
            "        p.name_product as nameProduct,\n" +
            "        p.price as price,\n" +
            "    p.description as description,\n" +
            "    i.img_url as images\n" +
            "FROM products p\n" +
            "                     INNER JOIN images i on p.id = i.product_id\n" +
            "\n" +
            "                      WHERE p.is_delete = false AND i.id in (select min(i.id)\n" +
            "                                                             from images i\n" +
            "                                                             group by i.product_id)\n" +
            "                      ORDER BY p.price DESC  LIMIT 4", nativeQuery = true)
    List<IProductDTO> findNewProduct();

    @Query(value = "SELECT * FROM products p INNER JOIN product_type pt on p.product_type_id = pt.id\n" +
            "where pt.id = 4 LIMIT 4", nativeQuery = true)
    List<Products> findProductType();

    @Query(value = "SELECT * FROM products p\n" +
            "                  INNER JOIN product_type pt ON p.product_type_id = pt.id\n" +
            "WHERE pt.id = 2\n" +
            "ORDER BY RAND()\n" +
            "LIMIT 4;", nativeQuery = true)
    List<Products> findProduct();

    @Query(value = "SELECT c.id AS idColor,p.id AS id ,p.name_product AS nameProduct ,p.price AS price ,p.description AS description ,i.img_url AS imgURL , c.name_color AS colorName\n" +
            "            FROM products p\n" +
            "                     INNER JOIN colors c on c.id = p.colors_id\n" +
            "                     INNER JOIN images i on p.id = i.product_id\n" +
            "            WHERE p.is_delete = FALSE\n" +
            "\n" +
            "              AND p.name_product LIKE :nameProduct\n" +
            "              AND c.id in (select min(c.id)\n" +
            "                           from colors c\n" +
            "                           group by c.id)", nativeQuery = true)
    List<IImageDTO> findColor(@Param("nameProduct") String nameProduct);


    @Query(value = "SELECT\n" +
            "                p.id AS id ,\n" +
            "                c.name_color     AS colorName,\n" +
            "                   p.name_product   AS nameProduct,\n" +
            "                   p.price          AS price,\n" +
            "                   p.description    AS description,\n" +
            "                   i.img_url        as images,\n" +
            "                   p.stock_quantity as stockQuantity\n" +
            "            FROM products p\n" +
            "                    INNER JOIN colors c on c.id = p.colors_id\n" +
            "                     INNER JOIN product_type pt on p.product_type_id = pt.id\n" +
            "                     INNER JOIN images i on p.id = i.product_id\n" +
            "            WHERE p.is_delete = FALSE\n" +
            "              AND p.stock_quantity > 0\n" +
            "              AND pt.name_type LIKE :typeProduct\n" +
            "              AND p.name_product LIKE :nameProduct\n" +
            "              AND i.id IN (select min(i.id)\n" +
            "                           from images i\n" +
            "                           group by i.product_id)", nativeQuery = true)
    Page<IProductDTO> findAllProductByOther(Pageable pageable, @Param("nameProduct") String nameProduct, @Param("typeProduct") String typeProduct);

    @Transactional
    @Modifying
    @Query(value = "UPDATE  products p   SET p.is_delete = true WHERE p.id = :id",nativeQuery = true)
    void deleteByIdProduct(@Param("id") Integer id);

    @Transactional
    @Modifying
    @Query(value = "UPDATE products SET name_product = :name_product,price=:price,description=:description,stock_quantity=:stock_quantity,sizes_id=:sizes_id,product_type_id=:product_type_id\n" +
            ", img = :img WHERE id = :id",nativeQuery = true)
    void updateProduct(@Param("id") Integer id,@Param("name_product") String nameProduct,@Param("price") Double price,@Param("description") String description,
                       @Param("stock_quantity") Integer stock_quantity, @Param("sizes_id") Integer sizes_id,@Param("product_type_id") Integer product_type_id
            ,@Param("img") String img);


//    @Query(value = "INSERT INTO   products ( name_product, price, stock_quantity,description, product_type_id,sizes_id, colors_id, img)  \n" +
//            "VALUES (:nameProduct , :price,:description,:stockQuantity,:productTypeId,1,:colorsId,:img)",nativeQuery = true)
//    void createProductManager(@Param("nameProduct") String nameProduct,@Param("price") Double price, @Param("description") String description,@Param("stockQuantity") Integer stockQuantity,@Param("productTypeId") Integer productTypeId,@Param("sizesId") Integer sizesId,@Param("colorsId") Integer colosId, @Param("img") String img);
//}
}