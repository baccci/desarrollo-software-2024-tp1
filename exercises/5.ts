
// Exporta una función que devuelva true si es que existe al menos un plan de suscripciones con coste menor a dos dolares
// La función debe ser exportada por default

// Importar los datos desde el archivo data.ts
import { data } from '../data'

export default function thereIsLessThan2DollarsSuscription() {
  return data.plans.some(subscriptionPlan => subscriptionPlan.price < 2)
}
