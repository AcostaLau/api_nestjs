import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

    @Get()
    getCategories(): string {
        return 'Categorias'
    }

    @Get(':type')
    getTypeCategories(@Param('type') tipo: string): string {
        return `El tipo de categoria es ${tipo}`
    }



    // generar categoria

    @Post()
    createProduct(@Body() info: any) {
        return info
    }
}
