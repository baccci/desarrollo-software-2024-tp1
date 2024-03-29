
// Exporta una función que reciba la categoría y devuelva las noticias filtradas por una categoría específica
// La función debe ser exportada por default

// Importar los datos desde el archivo data.ts
import { data } from '../data'

export default function filterByCategory(category: string) {
  return data.news.filter((news) => news.category === category)
}
