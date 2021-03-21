import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { IngredientService } from '../services/ingredient.service';

@Controller('ingredients')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  //   @Get()
  //   findAll(@Query() paginationQuery: PaginationQueryDto) {
  //     return this.ingredientService.findAll(paginationQuery);
  //   }

  //   @Get(':id')
  //   findOne(@Param('id') id: string) {
  //     return this.ingredientService.findOne(id);
  //   }

  //   @Post()
  //   create(@Body() dto: CreateCoffeeDto) {
  //     return this.ingredientService.create(dto);
  //   }

  //   @Patch(':id')
  //   update(@Param('id') id: string, @Body() dto: UpdateCoffeeDto) {
  //     return this.ingredientService.update(id, dto);
  //   }

  //   @Delete(':id')
  //   remove(@Param('id') id: string) {
  //     return this.ingredientService.remove(id);
  //   }
}
