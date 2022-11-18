from typing import Union
from src.ATMsNumber.services.utils.find.filter_row import filter_row
from src.ATMsNumber.domain.requiredFields.atm import Indicator
from rapidfuzz.fuzz import partial_ratio

name: str = 'Zambézia'

def zambeziaFormatter(
  table: list[list[Union[float, str]]],
  date_row: list[str],
  indicator: Indicator
):
  values = []

  try:
    row_is_found = False

    for row in table:
      row_name = f'{row[0]}'
      match_score = partial_ratio(name, row_name)

      if (match_score > 90):
        row_is_found = True

        row = filter_row(row)

        index = 0
        for new_date in date_row:
          dates = new_date.split('-')
          year = int(dates[0])
          month = int(dates[1])

          value = row[index]

          if type(value) != type(0):
            value = None

          values.append({
            'date': {
              'year': year,
              'month': month
            },
            'value': value
          })

          index += 1

    if row_is_found == False:
      raise Exception(f"'{name}' is not found on the excel file.")

  except Exception as err:
    print(err)

  return {
    "_id": {
      "$oid": "63778ffe4fe16ee1e9bfeb16"
    },
    'name': name,
    'values': values
  }
