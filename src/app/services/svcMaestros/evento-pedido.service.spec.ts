import { TestBed } from '@angular/core/testing';

import { EventoPedidoService } from './evento-pedido.service';

describe('EventoPedidoService', () => {
  let service: EventoPedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventoPedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
