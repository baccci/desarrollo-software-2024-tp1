// Exportar una funcion que reciba el nombre del "origen" de la noticia , por ejemplo ('cnn') y devuelva la última noticia publicada desde ese origen
import { data } from '../data'

export default function getLatestNewsFromOrigin(origin: string) {
  const lowercaseOrigin = origin.toLowerCase()
  const filteredNews = data.news.filter(news => news.source.name.toLowerCase() === lowercaseOrigin)
  const sortedNews = filteredNews.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  const lastNews = sortedNews?.[0]

  return lastNews
}

console.log(getLatestNewsFromOrigin('cnn'))