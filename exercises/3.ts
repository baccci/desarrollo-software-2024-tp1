
// Exporta una función que  devuelva los usuarios activos mayores de 18 años
// La función debe ser exportada por default

// Importar los datos desde el archivo data.ts
import { data } from '../data'

export default function filterActiveAndAdultUsers() {
  return data.users.filter((user) => {
    const birthdate = new Date(user.birthdate)
    const age = new Date().getFullYear() - birthdate.getFullYear()

    return user.active && age > 18
  })
}