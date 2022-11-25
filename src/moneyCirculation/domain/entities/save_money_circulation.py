import json
from pathlib import Path
from src.moneyCirculation.domain.requiredFields.money_circulation import Indicator
from src.moneyCirculation.domain.requiredFields.money_circulation import Indicator
from src.moneyCirculation.domain.requiredFields.money_circulation import MoneyCirculation

def saveMoneyCirculationDB (moneyCirculation: list[MoneyCirculation], indicator: Indicator):
  db_name = indicator['db_name']
  path = str(Path(__file__).parents[2].joinpath(f'assets/{db_name}.json')) 

  try:
    data = json.dumps(moneyCirculation, indent=4)
 
    with open(path, "w") as outfile:
        outfile.write(data)

  except Exception as err:
    print(err)

  return 'Done'