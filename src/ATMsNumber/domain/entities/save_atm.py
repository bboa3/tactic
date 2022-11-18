import json
from pathlib import Path
from src.ATMsNumber.domain.requiredFields.atm import Indicator
from src.ATMsNumber.domain.requiredFields.atm import ATM

def saveATMsDB (ATMs: list[ATM], indicator: Indicator):
  db_name = indicator['db_name']
  path = str(Path(__file__).parents[2].joinpath(f'assets/{db_name}.json')) 

  try:
    data = json.dumps(ATMs, indent=4)
 
    with open(path, "w") as outfile:
        outfile.write(data)

  except Exception as err:
    print(err)

  return 'Done'