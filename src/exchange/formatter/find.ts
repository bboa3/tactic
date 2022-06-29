interface Find {
  id: number
  exchanges: any
}

export const find = ({ id: targetId, exchanges }: Find) => {
  const data = exchanges.find((d: any) => {
    const id = Number(d['$'].id)
    return id === targetId
  })

  return data.Line
}


export const filter = ({ id: targetId, exchanges }: Find) => {
  const data = exchanges.filter((d: any) => {
    const id = Number(d['$'].id)
    return id === targetId
  })

  return data
}