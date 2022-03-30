import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-energia.json')

export const getInhambane = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      'electricidade': pop[2],
      'gerador/placa solar': pop[3],
      'gás': pop[4],
      'petróleoa/parafina/querosene': pop[5],
      'velas': pop[6],
      'baterias': pop[7],
      'lenha': pop[8],
      'pilhas': pop[9],
      'outras': pop[10],
      'desconhecida': pop[11]
    }
  }

  const people = {
    'DISTRITO Cidade de Inhambane': getPeople(data[130]),
    'DISTRITO Funhalouro': getPeople(data[131]),
    'DISTRITO Govuro': getPeople(data[132]),
    'DISTRITO Homoine': getPeople(data[133]),
    'DISTRITO Inharrime': getPeople(data[134]),
    'DISTRITO Inhassoro': getPeople(data[135]),
    'DISTRITO Jangamo': getPeople(data[136]),
    'DISTRITO Mabote': getPeople(data[137]),
    'DISTRITO Massinga': getPeople(data[138]),
    'DISTRITO Cidade de Maxixe': getPeople(data[139]),
    'DISTRITO Morrumbene': getPeople(data[140]),
    'DISTRITO Panda': getPeople(data[141]),
    'DISTRITO Vilankulo': getPeople(data[142]),
    'DISTRITO Zavala': getPeople(data[143])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['inhambane'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}