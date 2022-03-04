
export const createRates = (ratesElements: { textContent: string }[]) => {
  const rates: string[] = ratesElements.map(rate => rate.textContent)

  console.log(rates);
  
  if (rates.length == 3) {
    return { 
      "FPD": Number(rates[1].split(',').join('.')),
      "FPC": Number(rates[4].split(',').join('.')),
      "Taxa MIMO": Number(rates[7].split(',').join('.')),
      "Prime rate": Number(rates[10].split(',').join('.'))
    }
  }
  
  return { 
    "FPD": Number(rates[1].split(',').join('.')),
    "FPC": Number(rates[4].split(',').join('.')),
    "Taxa MIMO": null,
    "Prime rate": null
  }
}