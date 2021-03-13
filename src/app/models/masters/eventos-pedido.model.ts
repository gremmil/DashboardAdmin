export class IEventosPedido {

    [k: string]: string | number;

    constructor(

        public _id:         string = '',
        public idEvento:    number = 0,
        public descripcion: string = '',
        public flagFotoApp: string = '',
        public flagObsApp:  string = ''
        
    ){}


}
