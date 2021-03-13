export class IPedidoDescripcionImagen {

    [k: string]: string | number;
    
    constructor(

        public file: string = '',
        public data: string = '',
        public format: string = '',
        public type: string = ''

    ) {}
    
}
