import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefralComponent } from './refral.component';

describe('RefralComponent', () => {
  let component: RefralComponent;
  let fixture: ComponentFixture<RefralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
