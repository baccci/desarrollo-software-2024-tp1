// Exportar una funcion que reciba dos parametros , una palabra clave y la categoria.
// debe devolver las noticias que contengan la palabra clave dentro del titulo o descripción y pertenezcan a esa categoría
// solo deben mostrarse las noticias donde el usuario publicante se encuentre activo .
import { data } from '../data'

export default function searchNews(keyword: string, category: string) {
  const lowercaseKeyword = keyword.toLowerCase()
  const lowercaseCategory = category.toLowerCase()
  const filteredNews = data.news.filter(news => {
    const isActive = data.users.find(user => user.email === news.emailUser)?.active ?? false
    const isCategory = news.category.toLowerCase() === lowercaseCategory
    const hasKeywordInTitle = news.title.toLowerCase().includes(lowercaseKeyword)
    const hasKeywordInDescription = news.description.toLowerCase().includes(lowercaseKeyword)
    const hasKeyword = hasKeywordInTitle || hasKeywordInDescription

    return isActive && hasKeyword && isCategory
  })

  return filteredNews
}

console.log(searchNews('covid', 'world'))
