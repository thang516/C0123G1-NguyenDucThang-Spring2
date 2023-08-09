package com.example.back_end_spring2.repository;

import com.example.back_end_spring2.model.Images;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IImageRepository extends JpaRepository<Images,Integer> {
//
//    @Query(value = "select i.id,i.product_id, i.img_url\n" +
//            "            from products p\n" +
//            "                     inner join images i on p.id = i.product_id\n" +
//            "            where i.id in (select min(i.id)\n" +
//            "                           from images i\n" +
//            "                           group by i.product_id)",nativeQuery = true)
//    List<Images> getAll();
//

    @Query(value = "SELECT i.* FROM images i\n" +
            "INNER JOIN products p on i.product_id = p.id WHERE i.product_id = :id",nativeQuery = true)
    List<Images> getAllImageById(@Param("id") Integer id);
}
