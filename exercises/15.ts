// Exportar una funcion que devuelva el primer y ultimo usuario suscripto al plan free
import { data } from '../data'

export default function getFirstAndLastFreeUser() {
  const freeUsers = data.users.filter(user => user.subscriptionPlan === 'free')
  const firstFreeUser = freeUsers[0]
  const lastFreeUser = freeUsers[freeUsers.length - 1]

  return {
    first: firstFreeUser,
    last: lastFreeUser
  }
}