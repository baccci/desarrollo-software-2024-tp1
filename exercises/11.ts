// Exporta una función que reciba el codigo de la moneda y devuelva los planes de suscripcion convertidos a esta moneda, conservando el precio en dolar respetando la interfaz
// La función debe ser exportada por default

// Importar los datos desde el archivo data.ts
import { data, type DolarConversion } from '../data'

interface PlanConverted {
  code: string
  price: number
  // aqui debe devolver la conversión
  usdConversion: number
  description: string
}

type CurrencyCode = keyof DolarConversion
export function plansCurrencyConverter(code: CurrencyCode): PlanConverted[] {
  return data.plans.map((plan) => ({
    ...plan,
    usdConversion: plan.price * data.dolarConversion[code]
  }))
}