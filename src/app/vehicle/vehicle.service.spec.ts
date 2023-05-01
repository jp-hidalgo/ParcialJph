/* tslint:disable:no-unused-variable */

import { TestBed,getTestBed, async, inject } from '@angular/core/testing';
import { VehicleService } from './vehicle.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Vehicle', () => {
  let injector: TestBed;
  let service: VehicleService;
  let httpMock: HttpClientTestingModule;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehicleService]
    });
    injector = getTestBed();
      service = injector.get(VehicleService);
      httpMock = injector.get(HttpClientTestingModule);

  });

  it('should ...', inject([VehicleService], (service: VehicleService) => {
    expect(service).toBeTruthy();
  }));
});
