const getNum0a255 = () => Math.floor(Math.random() * 256)

class Color {
    get() {
        const color = `rgb(${getNum0a255()},${getNum0a255()},${getNum0a255()})`
        return color
    }
}

const color = new Color()

console.log(color.get())
