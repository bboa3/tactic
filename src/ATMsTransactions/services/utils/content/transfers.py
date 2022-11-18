from typing import Union
from src.ATMsTransactions.services.utils.content.utils.find_rows import findValuesAndVolumesRows
from src.ATMsTransactions.services.utils.content.utils.formatter import rowFormatter
from src.ATMsTransactions.domain.requiredFields.atm import Indicator

name: str = 'Transferências'

def transfersFormatter(
  table: list[list[Union[float, str]]],
  date_row: list[str],
  indicator: Indicator
):
  volumes = []
  values = []

  try:
    rows = findValuesAndVolumesRows(table, name)

    volumes_row = rows[0]
    values_row = rows[1]

    if (not bool(volumes_row)) or (not bool(values_row)):
      raise Exception(f"'{name}' have not found row of data.")

    volumes = rowFormatter(volumes_row, date_row)
    values = rowFormatter(values_row, date_row)

  except Exception as err:
    print(err)

  return {
    "_id": {
      "$oid": "63778ffe4fe16ee1e9bfeb11"
    },
    'name': name,
    'volumes': volumes,
    'values': values
  }
