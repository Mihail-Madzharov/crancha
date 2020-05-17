import { async, TestBed } from '@angular/core/testing';
import { FeatureMapModule } from './map.module';

describe('FeatureMapModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureMapModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureMapModule).toBeDefined();
  });
});
