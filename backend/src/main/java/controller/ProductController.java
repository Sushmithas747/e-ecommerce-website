//package com.sush.ecom_backend.controller;
//
//import java.util.ArrayList;
//
//import java.util.List;
//
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.sush.ecom_backend.model.Product;
//
//@RestController
//public class ProductController {
//
//    private List<Product> products = new ArrayList<>();
//
//    // Constructor to add sample products
//    public ProductController() {
//
//        products.add(new Product(
//                1L,
//                "Red Crop Top",
//                "Crop Tops",
//                "https://img.tatacliq.com/images/i8/437Wx649H/MP000000014753009_437Wx649H_202210041901291.jpeg",
//                444,
//                "15% OFF"
//        ));
//
//        products.add(new Product(
//                2L,
//                "Black Crop Top",
//                "Crop Tops",
//                "https://rukmini1.flixcart.com/image/300/300/xif0q/shopsy-top/7/u/2/m-croptop-dazeel-original-imags25uyrgtxzzg.jpeg",
//                444,
//                "15% OFF"
//        ));
//
//        products.add(new Product(
//                3L,
//                "Navy Blue Crop Top",
//                "Crop Tops",
//                "https://m.media-amazon.com/images/I/61WkjdM3daL._UY1100_.jpg",
//                444,
//                "15% OFF"
//        ));
//
//        products.add(new Product(
//                4L,
//                "Mint Green Crop Top",
//                "Crop Tops",
//                "https://i5.walmartimages.com/asr/e98f857a-a82c-43cd-8853-5cf333cfb671.e2cc10f74bb966f90e1ff67fb4ab1644.jpeg",
//                444,
//                "15% OFF"
//        ));
//
//        products.add(new Product(
//                5L,
//                "Lilac Crop Top",
//                "Crop Tops",
//                "https://gigstore.in/cdn/shop/files/RICH039_3.jpg?v=1742817503&width=1200",
//                444,
//                "15% OFF"
//        ));
//
//        products.add(new Product(
//                6L,
//                "Black Crop Hoodie",
//                "Cropped Hoodies",
//                "https://5.imimg.com/data5/SELLER/Default/2021/1/WR/UX/BC/121749566/basic-crop-hoodie.png",
//                855,
//                "15% OFF"
//        ));
//
//        products.add(new Product(
//                7L,
//                "Pink Crop Hoodie",
//                "Cropped Hoodies",
//                "https://m.media-amazon.com/images/I/41VU-rtGpuL._AC_UY1100_.jpg",
//                855,
//                "15% OFF"
//        ));
//
//        products.add(new Product(
//                8L,
//                "Lilac Crop Hoodie",
//                "Cropped Hoodies",
//                "https://cdn.lookastic.com/light-violet-hoodie/cropped-pullover-hoodie-original-959397.jpg",
//                855,
//                "15% OFF"
//        ));
//    }
//
//    // GET all products
//    @GetMapping("/products")
//    public List<Product> getAllProducts() {
//        return products;
//    }
//
//    // GET product by ID
//    @GetMapping("/products/{id}")
//    public Product getProductById(@PathVariable Long id) {
//        for (Product product : products) {
//            if (product.getId().equals(id)) {
//                return product;
//            }
//        }
//        return null;
//    }
//}
package com.sush.ecom_backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.sush.ecom_backend.model.Product;
import com.sush.ecom_backend.service.ProductService;

@RestController
public class ProductController {

    private final ProductService productService;

    // Constructor Injection
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // GET all products (FROM DATABASE)
    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    // GET single product by ID (FROM DATABASE)
    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable Integer id) {
        return productService.getProductById(id);
    }
}
