from datetime import datetime
from src.moneyPrinting.domain.requiredFields.money_printing import Indicator
from src.moneyPrinting.services.utils.content.banknotes import banknotesFormatter
from src.moneyPrinting.services.utils.content.coins import coinsFormatter

def formatter(
  table: list[list[float]],
  date_row: list[datetime],
  indicator: Indicator
):
  banknotes = banknotesFormatter(table, date_row, indicator)
  coins = coinsFormatter(table, date_row, indicator)

  return [
    banknotes,
    coins
  ]