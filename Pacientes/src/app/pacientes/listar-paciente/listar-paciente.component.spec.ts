import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPacienteComponent } from './listar-paciente.component';

describe('ListarPacienteComponent', () => {
  let component: ListarPacienteComponent;
  let fixture: ComponentFixture<ListarPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
