from typing import Union
from rapidfuzz.fuzz import partial_ratio
from src.moneyPrinting.services.utils.find.filter_row import filter_row

def findValuesRows(table: list[list[Union[float, str]]], name: str, rows_to_jump: int):
  index = 0
  for row in table:
    row_name = f'{row[0]}'
    match_score = partial_ratio(name, row_name)

    if (match_score > 90):
      total_row = table[index + rows_to_jump]

      total_row_name = f'{total_row[0]}'
      match_score = partial_ratio('Total', total_row_name)

      if (match_score > 90):
        foundRow = filter_row(total_row)

        return foundRow
      
    index += 1


def findVolumesRows(table: list[list[Union[float, str]]], name: str, rows_to_jump: int):
  index = 0
  for row in table:
    row_name = f'{row[0]}'
    match_score = partial_ratio(name, row_name)

    if (match_score > 90):
      total_row = table[index + rows_to_jump]

      total_row_name = f'{total_row[0]}'
      match_score = partial_ratio('Total', total_row_name)

      if (match_score > 90):
        foundRow = filter_row(total_row)

        return foundRow
      
    index += 1
    