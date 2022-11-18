import json
from pathlib import Path
from src.POSsTransactions.domain.requiredFields.pos import Indicator
from src.POSsTransactions.domain.requiredFields.pos import POS

def savePOSsDB (POSs: list[POS], indicator: Indicator):
  db_name = indicator['db_name']
  path = str(Path(__file__).parents[2].joinpath(f'assets/{db_name}.json')) 

  try:
    data = json.dumps(POSs, indent=4)
 
    with open(path, "w") as outfile:
        outfile.write(data)

  except Exception as err:
    print(err)

  return 'Done'