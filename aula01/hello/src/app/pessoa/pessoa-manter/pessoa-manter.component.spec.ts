import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaManterComponent } from './pessoa-manter.component';

describe('PessoaManterComponent', () => {
  let component: PessoaManterComponent;
  let fixture: ComponentFixture<PessoaManterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaManterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaManterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
