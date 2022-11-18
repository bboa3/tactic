from pathlib import Path
from src.ATMsNumber.domain.requiredFields.atm import Indicator

def tradesInfra(indicator: Indicator):   
  db_name = indicator['db_name']
  path = str(Path(__file__).parents[1].joinpath(f'assets/{db_name}.xlsx')) 
  
  return path