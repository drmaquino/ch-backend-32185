import { faker } from '@faker-js/faker'
faker.locale = 'es'
const { name, internet, random } = faker
import { writeFile } from 'fs'

let str = 'NOMBRE;APELLIDO;EMAIL;TRABAJO;LUGAR\n'

for (let i = 0; i < 100; i++) {
    str += name.firstName() +
        ';' + name.lastName() +
        ';' + internet.email() +
        ';' + name.jobTitle() +
        ';' + random.locale() +
        '\n'
}

writeFile('./test.csv', str, err => {
    if (err) console.log(err);
    console.log('archivo guardado')
})