import { Pipe, PipeTransform } from '@angular/core';
import { SeasonDto } from '@cooking-recipe/api-interfaces';

@Pipe({
  name: 'season',
})
export class SeasonPipe implements PipeTransform {
  transform(seasons: SeasonDto[]): any {
    return seasons.map((s) => s.label).join(', ');
  }
}
