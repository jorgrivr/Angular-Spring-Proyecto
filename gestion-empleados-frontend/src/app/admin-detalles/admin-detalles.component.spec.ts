import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetallesComponent } from './admin-detalles.component';

describe('AdminDetallesComponent', () => {
  let component: AdminDetallesComponent;
  let fixture: ComponentFixture<AdminDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
