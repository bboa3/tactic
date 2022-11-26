from datetime import datetime
from src.moneyCirculation.domain.requiredFields.money_circulation import Indicator
from src.moneyCirculation.services.utils.content.banknotes import banknotesFormatter
from src.moneyCirculation.services.utils.content.coins import coinsFormatter

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