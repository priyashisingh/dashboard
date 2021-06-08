import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonIntentsComponent } from './common-intents.component';

describe('CommonIntentsComponent', () => {
  let component: CommonIntentsComponent;
  let fixture: ComponentFixture<CommonIntentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonIntentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonIntentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
