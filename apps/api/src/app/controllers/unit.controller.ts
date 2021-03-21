import { Controller } from '@nestjs/common';
import { UnitService } from '../services/unit.service';

@Controller('units')
export class UnitController {
  constructor(private readonly unitService: UnitService) {}
}
