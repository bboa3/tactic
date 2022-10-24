from rapidfuzz.process import extractOne
from rapidfuzz.fuzz import partial_ratio

def find(countryName: str, table: list[list[str]]):
  names = [f'{row[0]}' for row in table]

  match = extractOne(countryName, names)
  matched = match[0]
  match_score  = match[1]
  matched_index  = match[2]

  if (match_score > 85):
    divider_1000_match_score = partial_ratio(matched, '*')

    if (divider_1000_match_score > 90):
      return {
        'divider': 1000,
        'row': table[matched_index]
      }

    else:
      return {
        'divider': 1,
        'row': table[matched_index]
      }

def findCurrencyTrades(countryName: str, currenciesTrades: list[list[str]]):
  if (countryName == 'Emirados Árabes Unidos'):
    return find(countryName='Emiratos A.Unid', table=currenciesTrades)

  if (countryName == 'Kuwait'):
    return find(countryName='Kowait', table=currenciesTrades)
  
  return find(countryName=countryName, table=currenciesTrades)    