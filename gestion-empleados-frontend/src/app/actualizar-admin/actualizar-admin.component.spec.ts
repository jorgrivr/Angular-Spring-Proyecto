import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAdminComponent } from './actualizar-admin.component';

describe('ActualizarAdminComponent', () => {
  let component: ActualizarAdminComponent;
  let fixture: ComponentFixture<ActualizarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
