import json
from pathlib import Path
from src.moneyPrinting.domain.requiredFields.money_printing import Indicator
from src.moneyPrinting.domain.requiredFields.money_printing import MoneyPrinting

def saveMoneyPrintingDB (moneyPrinting: list[MoneyPrinting], indicator: Indicator):
  db_name = indicator['db_name']
  path = str(Path(__file__).parents[2].joinpath(f'assets/{db_name}.json')) 

  try:
    data = json.dumps(moneyPrinting, indent=4)
 
    with open(path, "w") as outfile:
        outfile.write(data)

  except Exception as err:
    print(err)

  return 'Done'