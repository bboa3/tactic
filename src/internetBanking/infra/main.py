from pathlib import Path
from src.internetBanking.domain.requiredFields.internet_banking import Indicator

def tradesInfra(indicator: Indicator):   
  db_name = indicator['db_name']
  path = str(Path(__file__).parents[1].joinpath(f'assets/{db_name}.xlsx')) 
  
  return path