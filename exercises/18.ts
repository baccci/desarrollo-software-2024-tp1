// Exportar una funcion que devuelva las noticias simplificadas utilizando una estrategia segun su categoría
import { data } from '../data'

// Si es deporte
// Devolver esta interfaz
interface SportNews {
  category: 'sports'
  title: string
  sourceName: string
}

// Si es ciencia
// Devolver esta interfaz
interface SciencieNews {
  category: 'science'
  title: string
  description: string
}

// Si es technology
// Devolver esta interfaz
interface SciencieNews {
  category: 'science'
  title: string
  stars: number
  url: string
}

// Si es cualquier otra
interface SimpleNews {
  title: string
}

export default function getSimpleNews(): Array<SportNews | SciencieNews | SciencieNews | SimpleNews> {
  return data.news.map((news) => {
    if (news.category === 'sports') {
      return {
        category: 'sports',
        title: news.title,
        sourceName: news.source.name
      }
    }

    if (news.category === 'science') {
      return {
        category: 'science',
        title: news.title,
        description: news.description
      }
    }

    if (news.category === 'technology') {
      return {
        category: 'science',
        title: news.title,
        stars: news.stars,
        url: news.url
      }
    }

    return {
      title: news.title
    }
  })
}
