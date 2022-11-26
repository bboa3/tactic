from typing import Union

def rowFormatter(
  row: list[Union[float, str]],
  date_row: list[str],
):
  values = []

  index = 0
  for new_date in date_row:
    dates = new_date.split('-')

    year = int(dates[0])
    month = int(dates[1])

    value = row[index]

    if (type(value) != type(0)) and (type(value) != type(0.2)):
      value = None

    values.append({
      'date': {
        'year': year,
        'month': month
      },
      'value': value
    })

    index += 1

  return values