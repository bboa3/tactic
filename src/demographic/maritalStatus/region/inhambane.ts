import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'maritalStatus', 'regions', 'inhambane.json')

export const getInhambane = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      homens: {
        Solteiros: pop[8],
        Casados: pop[9],
        'União Marital':pop[10],
        'Divorciados/Separados': pop[11],
        Viúvos: pop[12]
      },
      mulheres: {
        Solteiras: pop[14],
        Casadas: pop[15],
        'União Marital': pop[16],
        'Divorciadas/Separadas': pop[17],
        Viúvas: pop[18]
      }
    }
  }

  const people = {
    'DISTRITO Funhalouro': getPeople(data[137]),
    'DISTRITO Govuro': getPeople(data[138]),
    'DISTRITO Homoine': getPeople(data[139]),
    'DISTRITO Inharrime': getPeople(data[140]),
    'DISTRITO Inhassoro': getPeople(data[141]),
    'DISTRITO Jangamo': getPeople(data[142]),
    'DISTRITO Mabote': getPeople(data[143]),
    'DISTRITO Massinga': getPeople(data[144]),
    'DISTRITO Cidade de Maxixe': getPeople(data[145]),
    'DISTRITO Morrumbene': getPeople(data[146]),
    'DISTRITO Panda': getPeople(data[147]),
    'DISTRITO Vilankulo': getPeople(data[148]),
    'DISTRITO Zavala': getPeople(data[149])
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}