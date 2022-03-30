import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'estado-civil.json')

export const getInhambane = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      homens: {
        solteiros: pop[8],
        sasados: pop[9],
        'união marital':pop[10],
        'divorciados/separados': pop[11],
        viúvos: pop[12]
      },
      mulheres: {
        solteiras: pop[14],
        sasadas: pop[15],
        'união marital': pop[16],
        'divorciadas/separadas': pop[17],
        viúvas: pop[18]
      }
    }
  }

  const people = {
    'distrito cidade de inhambane': getPeople(data[137]),
    'distrito funhalouro': getPeople(data[138]),
    'distrito govuro': getPeople(data[139]),
    'distrito homoine': getPeople(data[140]),
    'distrito inharrime': getPeople(data[141]),
    'distrito inhassoro': getPeople(data[142]),
    'distrito jangamo': getPeople(data[143]),
    'distrito mabote': getPeople(data[144]),
    'distrito massinga': getPeople(data[145]),
    'distrito cidade de maxixe': getPeople(data[146]),
    'distrito norrumbene': getPeople(data[147]),
    'distrito panda': getPeople(data[148]),
    'distrito vilankulo': getPeople(data[149]),
    'distrito zavala': getPeople(data[150])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['inhambane'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}