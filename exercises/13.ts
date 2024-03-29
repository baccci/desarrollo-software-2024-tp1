// Imprimir en consola todos los precios de los planes de suscripcion
import { data } from '../data'

const plans = data.plans
plans.forEach(plan => {
  console.log(plan.price)
})