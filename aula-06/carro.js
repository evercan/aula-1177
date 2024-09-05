class Carro {
    constructor(marca, modelo, cor) {
      this.marca = marca;
      this.modelo = modelo;
      this.cor = cor;
    }
  
    acelerar() {
      console.log("O carro está acelerando.");
    }
  
    frear() {
      console.log("O carro está freando.");
    }
  }

  let meuCarro = new Carro("Toyota", "Corolla", "Vermelho");

  //console.log(meuCarro.marca);
  console.log(meuCarro.acelerar());

  module.exports = Carro;