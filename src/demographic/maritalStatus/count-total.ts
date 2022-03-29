import { PeopleNum } from "@src/demographic/population"

export const countTotal = (people: any) => {
  const DISTRITOs = Object.values(people)
  let total = {
    homens: 0,
    mulheres: 0,
    total: 0
  }
  
  for (const DISTRIT of DISTRITOs) {
    
    const DISTRITO = Object.values(DISTRIT)
    
    for (const POSTO of DISTRITO as any) {
      
      const counted = countPosto(POSTO)
      
      total = {
        homens: total.homens + counted.homens,
        mulheres: total.mulheres + counted.mulheres,
        total: total.total + counted.total,
      }
    }
    
  }
  
  return total
}

function countPosto (peopleNum: PeopleNum[]) {
  let num = {
    homens: 0,
    mulheres: 0,
    total: 0
  }
  
  for (const peopl of peopleNum) {
    num = {
      mulheres: num.mulheres + peopl.mulheres,
      homens: num.homens + peopl.homens,
      total: num.total + peopl.homens + peopl.mulheres,
    }
  }
  
  return num
}