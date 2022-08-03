import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-agua-para-beber.json')

export const getInhambane = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return [
      {
        name: 'canalizada',
        value: pop[2]
      },
      {
        name: 'fontanário/torneira pública',
        value: pop[6]
      },
      {
        name: 'furo/poço com bomba manual',
        value: pop[7]
      },
      {
        name: 'poço sem bomba manual',
        value: pop[8]
      },
      {
        name: 'nascente/rio/lago/lagoa',
        value: pop[11]
      },
      {
        name: 'chuva',
        value: pop[14]
      },
      {
        name: 'tanques camiões/carregada em tambores',
        value: pop[15]
      },
      {
        name: 'mineral/engarrafada',
        value: pop[16]
      },
      {
        name: 'outra',
        value: pop[17]
      },
      {
        name: 'desconhecida',
        value: pop[18]
      }
    ]
  }

  const people = {
    'cidade de inhambane': getPeople(data[130]),
    'funhalouro': getPeople(data[131]),
    'govuro': getPeople(data[132]),
    'homoine': getPeople(data[133]),
    'inharrime': getPeople(data[134]),
    'inhassoro': getPeople(data[135]),
    'jangamo': getPeople(data[136]),
    'mabote': getPeople(data[137]),
    'massinga': getPeople(data[138]),
    'cidade de maxixe': getPeople(data[139]),
    'morrumbene': getPeople(data[140]),
    'panda': getPeople(data[141]),
    'vilankulo': getPeople(data[142]),
    'zavala': getPeople(data[143])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['inhambane'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}