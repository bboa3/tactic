from typing import Union
from rapidfuzz.fuzz import partial_ratio
from src.mobileBanking.services.utils.find.filter_row import filter_row

def findValuesAndVolumesRows(table: list[list[Union[float, str]]], name: str):
  rows = []

  for row in table:
    row_name = f'{row[0]}'
    match_score = partial_ratio(name, row_name)

    if (match_score > 90):
      row = filter_row(row)
      rows.append(row)

  return rows