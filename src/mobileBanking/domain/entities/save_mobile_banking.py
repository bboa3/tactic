import json
from pathlib import Path
from src.mobileBanking.domain.requiredFields.mobile_banking import Indicator
from src.mobileBanking.domain.requiredFields.mobile_banking import MobileBanking

def saveMobileBankingsDB (mobileBankings: list[MobileBanking], indicator: Indicator):
  db_name = indicator['db_name']
  path = str(Path(__file__).parents[2].joinpath(f'assets/{db_name}.json')) 

  try:
    data = json.dumps(mobileBankings, indent=4)
 
    with open(path, "w") as outfile:
        outfile.write(data)

  except Exception as err:
    print(err)

  return 'Done'