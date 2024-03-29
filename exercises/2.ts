
// Exporta una función que reciba el codigo del plan de suscripciones y devuelva los usuarios asociados a ese plan
// La función debe ser exportada por default

// Importar los datos desde el archivo data.ts
import { data } from '../data'

export default function filterBySubscriptionPlan(subscriptionPlan: string) {
  return data.users.filter((user) => user.subscriptionPlan === subscriptionPlan)
}
