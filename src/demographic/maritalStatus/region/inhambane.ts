import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'estado-civil.json')

export const getInhambane = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return [
      {
        gender: 'homens',
        status: [
          {
            name: 'solteiros',
            value: pop[8]
          },
          {
            name: 'casados',
            value: pop[9]
          },
          {
            name: 'união marital',
            value: pop[10]
          },
          {
            name: 'divorciados/separados',
            value:  pop[11]
          },
          {
            name: 'viúvos',
            value: pop[12]
          },
        ]
      },
      {
        gender: 'mulheres',
        status: [
          {
            name: 'solteiras',
            value: pop[14]
          },
          {
            name: 'casadas',
            value: pop[15]
          },
          {
            name: 'união marital',
            value: pop[16]
          },
          {
            name: 'divorciadas/separadas',
            value:  pop[17]
          },
          {
            name: 'viúvas',
            value: pop[18]
          }
        ]
      }
    ]
  }

  const people = {
    'cidade de inhambane': getPeople(data[137]),
    'funhalouro': getPeople(data[138]),
    'govuro': getPeople(data[139]),
    'homoine': getPeople(data[140]),
    'inharrime': getPeople(data[141]),
    'inhassoro': getPeople(data[142]),
    'jangamo': getPeople(data[143]),
    'mabote': getPeople(data[144]),
    'massinga': getPeople(data[145]),
    'cidade de maxixe': getPeople(data[146]),
    'norrumbene': getPeople(data[147]),
    'panda': getPeople(data[148]),
    'vilankulo': getPeople(data[149]),
    'zavala': getPeople(data[150])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['inhambane'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}