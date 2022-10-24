from src.monthlyCurrencyTrades.xlsx.type_format import dataTypeFormatter

def parseXlsx(table: list[list[str]]):
  newTable = []

  for row in table:
    newRow = []

    for el in row:
      value = dataTypeFormatter(el)
      newRow.append(value)
    
    newTable.append(newRow)
    
  return newTable