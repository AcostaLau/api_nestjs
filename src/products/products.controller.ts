import { Controller, Get, Param, Post, Body, Put, Delete, Patch } from '@nestjs/common';
import { listOfProducts } from "../listaProductos/listProducts";

@Controller('products')
export class ProductsController {

    @Get()
    getProducts(): any {
        return listOfProducts
    }


    @Get(':idProduct')
    getProductFilter(@Param('idProduct') idProduct: string) {
        let producto = listOfProducts.filter(product => product.id === parseInt(idProduct))
        return producto
    }

    // post

    @Post()
    createProduct(@Body() info: any) {
        const producto = info
        listOfProducts.push(producto)
        return producto
    }


    // delete

    @Delete(':idProduct')
    deleteProduct(@Param('idProduct') idProduct: string) {
        const indice = listOfProducts.findIndex(producto => producto.id === parseInt(idProduct))


        if (indice >= 0) {
            listOfProducts.splice(indice, 1)
        }

        return 'producto eliminado'
    }


    // patch

    @Patch(':idProduct')
    updateProduct(@Param('idProduct') idProduct: string, @Body() info: any) {
        const infoActualizada = info;

        const indice = listOfProducts.findIndex(producto => producto.id === parseInt(idProduct))

        if (indice >= 0) {
            const productoModificar = listOfProducts[indice]

            // modifico los datos
            Object.assign(productoModificar, infoActualizada)

        }

        return 'Producto actualizado'
    }
}   
