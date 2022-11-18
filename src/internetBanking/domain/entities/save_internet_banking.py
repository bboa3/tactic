import json
from pathlib import Path
from src.internetBanking.domain.requiredFields.internet_banking import Indicator
from src.internetBanking.domain.requiredFields.internet_banking import InternetBanking

def saveInternetBankingsDB (internetBankings: list[InternetBanking], indicator: Indicator):
  db_name = indicator['db_name']
  path = str(Path(__file__).parents[2].joinpath(f'assets/{db_name}.json')) 

  try:
    data = json.dumps(internetBankings, indent=4)
 
    with open(path, "w") as outfile:
        outfile.write(data)

  except Exception as err:
    print(err)

  return 'Done'