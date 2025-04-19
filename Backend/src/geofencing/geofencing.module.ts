import { Module } from '@nestjs/common';
import { GeofencingController } from './geofencing.controller';
import { GeofencingService } from './geofencing.service';

@Module({
  controllers: [GeofencingController],
  providers: [GeofencingService]
})
export class GeofencingModule {}
