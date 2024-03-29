
// Exporta una función que devuelva el primer usuario que tenga un email asociado a gmail
// La función debe ser exportada por default

// Importar los datos desde el archivo data.ts
import { data } from '../data'

export default function findFirstGmailUser() {
  return data.users.find((user) => user.email.includes('gmail'))
}
