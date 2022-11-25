from pathlib import Path
from src.moneyCirculation.domain.requiredFields.money_circulation import Indicator

def moneyCirculationInfra(indicator: Indicator):   
  db_name = indicator['db_name']
  path = str(Path(__file__).parents[1].joinpath(f'assets/{db_name}.xlsx')) 
  
  return path