export class IDireccionesPedido {

    [k: string]: string | number;

    constructor(

        public _id:          string = '',
        public nroPedido:    number = 0,
        public nom_personal: string = '',
        public distrito:     string = '',
        public departamento: string = '',
        public provincia:    string = '',
        public urb_Barrio:   string = '',
        public calle:        string = '',
        public numero:       number = 0,
        public complemento:  string = '',
        public referencia:   string = '',
        public flagVisitado:   number = 0
        
        
    ){}


}
