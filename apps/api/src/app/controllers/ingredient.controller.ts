import { Controller, Get, Query } from '@nestjs/common';
import { Ingredient } from '../database/entities/ingredient.entity';
import { IngredientService } from '../services/ingredient.service';
import { IngredientFindParams } from '@cooking-recipe/api-interfaces';
import { TypeIngredient } from '../database/entities/type-ingredient.entity';
import { Season } from '../database/entities/season.entity';

@Controller('')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Get('ingredients')
  find(@Query() params: IngredientFindParams): Promise<Ingredient[]> {
    return this.ingredientService.find(params);
  }

  @Get('typesIngredients')
  getTypes(): Promise<TypeIngredient[]> {
    return this.ingredientService.getTypes();
  }

  @Get('seasons')
  getSeasons(): Promise<Season[]> {
    return this.ingredientService.getSeasons();
  }

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
