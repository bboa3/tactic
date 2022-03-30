import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'marital-status.json')

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
    'DISTRITO Cidade de Inhambane': getPeople(data[137]),
    'DISTRITO Funhalouro': getPeople(data[138]),
    'DISTRITO Govuro': getPeople(data[139]),
    'DISTRITO Homoine': getPeople(data[140]),
    'DISTRITO Inharrime': getPeople(data[141]),
    'DISTRITO Inhassoro': getPeople(data[142]),
    'DISTRITO Jangamo': getPeople(data[143]),
    'DISTRITO Mabote': getPeople(data[144]),
    'DISTRITO Massinga': getPeople(data[145]),
    'DISTRITO Cidade de Maxixe': getPeople(data[146]),
    'DISTRITO Morrumbene': getPeople(data[147]),
    'DISTRITO Panda': getPeople(data[148]),
    'DISTRITO Vilankulo': getPeople(data[149]),
    'DISTRITO Zavala': getPeople(data[150])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['inhambane'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}