from typing import Union
from src.moneyCirculation.services.utils.content.utils.find_rows import findValuesRows, findVolumesRows
from src.moneyCirculation.services.utils.content.utils.formatter import rowFormatter
from src.moneyCirculation.domain.requiredFields.money_circulation import Indicator

name: str = 'Notas em circulação'

def banknotesFormatter(
  table: list[list[Union[float, str]]],
  date_row: list[str],
  indicator: Indicator
):
  volumes = []
  values = []

  try:
    values_row = findValuesRows(table, name, 9)
    volumes_row = findVolumesRows(table, name, 17)

    if (not bool(volumes_row)) or (not bool(values_row)):
      raise Exception(f"'{name}' have not found row of data.")

    volumes = rowFormatter(volumes_row, date_row)
    values = rowFormatter(values_row, date_row)

  except Exception as err:
    print(err)

  return {
    "_id": {
      "$oid": "63778ffe4fe16ee1e9bfeb15"
    },
    'name': name,
    'volumes': volumes,
    'values': values
  }
