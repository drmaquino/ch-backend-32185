export default class Perimetro {
  static cuadrado(lado: number) {
    return lado * 4;
  }

  static rectangulo(base: number, altura: number) {
    return base * 2 + altura * 2;
  }

  static circulo(radio: number) {
    return 2 * Math.PI * radio;
  }
}
