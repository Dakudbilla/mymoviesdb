const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
  })
  
  export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number)
  }

  export const formatDate=(myDate:string)=>{
   return new Date(myDate).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })
  }