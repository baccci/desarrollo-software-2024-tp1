
// Exporta una función que devuelva la sumatoria del precio de todos los planes de suscripcion
// La función debe ser exportada por default

// Importar los datos desde el archivo data.ts
import { data } from '../data'

export default function sumSubscriptionPrices() {
  return data.plans.reduce((acc, plan) => acc + plan.price, 0)
}
