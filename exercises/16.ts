// Exportar una funcion que devuelva ordenadas las noticias de acuerdo al precio de la suscripcion del usuario, primero las de suscripcion con más valor.
import { data } from '../data'

export default function getNewsOrderedBySubscriptionPrice() {
  return data.news.sort((a, b) => {
    const aPlan = data.users.find(user => user.email === a.emailUser)?.subscriptionPlan
    const bPlan = data.users.find(user => user.email === b.emailUser)?.subscriptionPlan
    const aPrice = data.plans.find(plan => plan.code === aPlan)?.price ?? 0
    const bPrice = data.plans.find(plan => plan.code === bPlan)?.price ?? 0

    return bPrice - aPrice
  })
}