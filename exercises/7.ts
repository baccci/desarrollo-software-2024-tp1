
// Exporta una función que reciba una fecha y devuelva la primera que tenga una fecha igual a la recibida
// La función debe ser exportada por default

// Importar los datos desde el archivo data.ts
import { data } from '../data'

export default function findFirstByDate(date: string | Date) {
  const parsedDate = typeof date === 'string' ? new Date(date) : date
  return data.news.find((news) => new Date(news.publishedAt).getTime() === parsedDate.getTime())
}
