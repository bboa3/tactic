from src.monthlyCurrencyTrades.domain.requiredFields.currencies import Indicator
from src.core.db.connect_db import economist_db

def getAllCurrenciesDB (indicator: Indicator):
  db_name = indicator['db_name']
  currencies = []

  try: 
    database = economist_db()
    collection = database[db_name]

    currencies = collection.find()

  except Exception as err:
    print(err)

  return currencies