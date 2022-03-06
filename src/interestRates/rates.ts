
export const createRates = (preRates: number[]) => {

  if (preRates.length === 4) {
    return { 
      "FPD": preRates[0],
      "FPC": preRates[1],
      "Taxa MIMO": preRates[2],
      "Prime rate": preRates[3]
    }
  }
  
  return { 
    "FPD": preRates[0],
    "FPC": preRates[1],
    "Taxa MIMO": null,
    "Prime rate": null
  }
}