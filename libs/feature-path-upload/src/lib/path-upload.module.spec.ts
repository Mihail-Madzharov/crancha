import { async, TestBed } from '@angular/core/testing';
import { FeaturePathUploadModule } from './path-upload.module';

describe('FeaturePathUploadModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeaturePathUploadModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeaturePathUploadModule).toBeDefined();
  });
});
