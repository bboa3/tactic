import { Request, Response } from "express";
import { resolve } from "path"
import xlsx from 'xlsx'

const path = resolve(__dirname, '..', '..', 'files', 'demographic', 'moçambique-em-bairros.xlsx');

export const demographics = (request: Request, response: Response) => {
  const file = xlsx.readFile(path);

  const firstTabName = file.SheetNames[2];
    
  const data: any = xlsx.utils.sheet_to_json(file.Sheets[firstTabName], {
    blankrows: false,
    header: 1,
  })

  response.status(200).json(data)
}