import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathUploadComponent } from './path-upload.component';

describe('PathUploadComponent', () => {
  let component: PathUploadComponent;
  let fixture: ComponentFixture<PathUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
