from src.monthlyCurrencyTrades.domain.requiredFields.currencies import Indicator

def filterValues(row: list[int]):
  length = len(row) + 2
  x = slice(1,  length)

  return row[x]


def formatCurrencyTrades(tableRow: list[str], divider: int):
  values = []
  
  try:
    year = 2008
    month = 1

    row = filterValues(tableRow)

    for value in row:
      if value:
        print(value)
        values.append({
          'date': { 'year': year, 'month': month },
          'value': value / divider
        })

      if month == 12:
        month = 1
        year += 1
      else:
        month += 1
      
  except Exception as err:
    print(err)

  return values