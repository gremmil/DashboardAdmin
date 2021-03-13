export class IPedidoDescripcion {

    [k: string]: string | number;

    constructor(

        public _id:                string = '',
        public nroPedido:          number = 0,
        public idUsuario:          number = 0,
        public idEvento:           number = 0,
        public imagenReferencial:  string = '',
        public imagenCargo:        string = '',
        public observaciones:      string = ''

    ){}

}