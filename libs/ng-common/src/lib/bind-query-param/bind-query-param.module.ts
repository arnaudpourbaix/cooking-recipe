import { NgModule } from '@angular/core';
import { BindGroupQueryParamDirective } from './bind-group-query-param.directive';

@NgModule({
  declarations: [BindGroupQueryParamDirective],
  exports: [BindGroupQueryParamDirective],
})
export class BindQueryParamModule {}
