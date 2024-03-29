
// Exporta una función que devuelva true si es que existe al menos una noticia de 5 estrellas
// La función debe ser exportada por default

// Importar los datos desde el archivo data.ts
import { data } from '../data'

export default function thereIsAtLeastOneFiveStarNews() {
  return data.news.some(news => news.stars === 5)
}
