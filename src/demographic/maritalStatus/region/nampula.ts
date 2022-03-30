import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'estado-civil.json')

export const getNampula = async (data: any) => {
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
    'distrito cidade de nampula': getPeople(data[43]),
    'distrito angoche': getPeople(data[44]),
    'distrito erati': getPeople(data[45]),
    'distrito ilha de Mocambique': getPeople(data[46]),
    'distrito lalaua': getPeople(data[47]),
    'distrito malema': getPeople(data[48]),
    'distrito meconta': getPeople(data[49]),
    'distrito mecuburi': getPeople(data[50]),
    'distrito memba': getPeople(data[51]),
    'distrito mogincual': getPeople(data[52]),
    'distrito mogovolas': getPeople(data[53]),
    'distrito moma': getPeople(data[54]),
    'distrito monapo': getPeople(data[55]),
    'distrito mossuril': getPeople(data[56]),
    'distrito muecate': getPeople(data[57]),
    'distrito murrupula': getPeople(data[58]),
    'distrito nacala Porto': getPeople(data[59]),
    'distrito nacala Velha': getPeople(data[60]),
    'distrito nacaroa': getPeople(data[61]),
    'distrito rapale': getPeople(data[62]),
    'distrito ribaue': getPeople(data[63]),
    'distrito larde': getPeople(data[64]),
    'distrito liupo': getPeople(data[65])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['nampula'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}