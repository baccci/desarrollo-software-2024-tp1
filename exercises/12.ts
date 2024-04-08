// Exporta una función que devuelva un array de usuarios solo con su nombre completo (nombre + apellido) y su edad actual en años
// La función debe ser exportada por default

// Importar los datos desde el archivo data.ts
import { data } from '../data'
interface SimpleUser {
  fullname: string
  years: number
}

export default function getUsersAndAge(): SimpleUser[] {
  return data.users.map((user) => ({
    fullname: `${user.name} ${user.lastName}`,
    years: calculatePreciseAge(user.birthdate)
  }))
}

function calculatePreciseAge(birthdate: string): number {
  const birth = new Date(birthdate)
  const now = new Date()
  let age = now.getFullYear() - birth.getFullYear()
  if (now.getMonth() < birth.getMonth() || (now.getMonth() === birth.getMonth() && now.getDate() < birth.getDate())) {
    age--
  }
  return age
}
