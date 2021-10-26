export class Tarjeta{

    numero: number;
    propietario: String;
    vigencia: String;
    cvv: number;

    constructor(numero: number, propietario: String, vigencia: String, cvv: number ) {
        this.numero = numero;
        this.propietario = propietario;
        this.vigencia = vigencia;
        this.cvv = cvv;
    }


    get getNumero() {
        return this.numero;

    }

    set setNumero(numero: number) {
        this.numero = numero;

    }

    get getPropietario() {
        return this.propietario;

    }

    set setPropietario(propietario: String) {
        this.propietario = propietario;

    }

    get getVigencia() {
        return this.vigencia;

    }

    set setVigencia(vigencia: String) {
        this.vigencia = vigencia;

    }

    get getCvv() {
        return this.cvv;

    }

    set setCvv(cvv: number) {
        this.cvv = cvv;

    }


}