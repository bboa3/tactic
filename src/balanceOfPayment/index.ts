import { Request, Response } from "express"
import { resolve } from "path"
import fs from 'fs/promises'
import xlsx from 'xlsx'
import { BalanceOfPaymentData, balanceOfPaymentFormatter } from "@src/balanceOfPayment/formatter"

const path = resolve(__dirname, '..', '..', 'files', 'balanceOfPayment', 'balanca-de-pagamento.xlsx')
const dest = resolve(__dirname, '..', '..', 'files', 'balanceOfPayment', 'balanceOfPayment.json')

export const balanceOfPayment = async (_request: Request, response: Response) => {
  const file = xlsx.readFile(path);

  const tabName = file.SheetNames[0]
    
  const data: any = xlsx.utils.sheet_to_json(file.Sheets[tabName], {
    blankrows: false,
    header: 1,
  }) 

  const removeFirstElement = (ns: number[]) => {
    const values = []
    let i = 0

    for (const n of ns) {
      if (i !== 0) {
        values.push(n)
      }
      i++
    }

    return values
  }

  const balanceOfPaymentData: BalanceOfPaymentData =  {
    line3: removeFirstElement(data[3]),
    line4: removeFirstElement(data[4]),
    line6: removeFirstElement(data[6]),
    line7: removeFirstElement(data[7]),
    line9: removeFirstElement(data[9]),
    line10: removeFirstElement(data[10]),
    line12: removeFirstElement(data[12]),
    line13: removeFirstElement(data[13]),
    line15: removeFirstElement(data[15]),
    line16: removeFirstElement(data[16])
  }

  const balanceOfPayment = balanceOfPaymentFormatter(balanceOfPaymentData, 2005)

  await fs.writeFile(dest, JSON.stringify(balanceOfPayment))

  response.status(200).json(balanceOfPayment)
}
