const getNum0a255 = ():number => Math.floor(Math.random() * 256)

class Color {
    get():string {
        let color:string = `rgb(${getNum0a255()},${getNum0a255()},${getNum0a255()})`
        return color
    }
}

const color:Color = new Color()
console.log(color.get())