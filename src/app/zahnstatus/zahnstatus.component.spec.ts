import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ZahnstatusComponent} from './zahnstatus.component';

describe('ZahnstatusComponent', () => {
  let component: ZahnstatusComponent;
  let fixture: ComponentFixture<ZahnstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZahnstatusComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahnstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
