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
      'petróleo/parafina/querosene': pop[5],
      'velas': pop[6],
      'baterias': pop[7],
      'lenha': pop[8],
      'pilhas': pop[9],
      'outras': pop[10],
      'desconhecida': pop[11]
    }
  }

  const people = {
    'distrito cidade de inhambane': getPeople(data[130]),
    'distrito funhalouro': getPeople(data[131]),
    'distrito govuro': getPeople(data[132]),
    'distrito homoine': getPeople(data[133]),
    'distrito inharrime': getPeople(data[134]),
    'distrito inhassoro': getPeople(data[135]),
    'distrito jangamo': getPeople(data[136]),
    'distrito mabote': getPeople(data[137]),
    'distrito Massinga': getPeople(data[138]),
    'distrito cidade de maxixe': getPeople(data[139]),
    'distrito morrumbene': getPeople(data[140]),
    'distrito panda': getPeople(data[141]),
    'distrito vilankulo': getPeople(data[142]),
    'distrito zavala': getPeople(data[143])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['inhambane'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}