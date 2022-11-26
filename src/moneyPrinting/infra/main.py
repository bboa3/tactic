from pathlib import Path
from src.moneyPrinting.domain.requiredFields.money_printing import Indicator

def moneyPrintingInfra(indicator: Indicator):   
  db_name = indicator['db_name']
  path = str(Path(__file__).parents[1].joinpath(f'assets/{db_name}.xls')) 
  
  return path