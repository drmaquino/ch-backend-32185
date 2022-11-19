export default class Superficie {
  static cuadrado(lado: number) {
    return lado ** 2;
  }

  static rectangulo(base: number, altura: number) {
    return base * altura;
  }

  static circulo(radio: number) {
    return Math.PI * radio ** 2;
  }
}
