from datetime import datetime
from src.internetBanking.domain.requiredFields.internet_banking import Indicator
from src.internetBanking.services.utils.content.transfers import transfersFormatter
from src.internetBanking.services.utils.content.payments import paymentsFormatter
from src.internetBanking.services.utils.content.number_of_subscribers import numberOfSubscribersFormatter

def formatter(
  table: list[list[float]],
  date_row: list[datetime],
  indicator: Indicator
):
  transfers = transfersFormatter(table, date_row, indicator)
  payments = paymentsFormatter(table, date_row, indicator)
  number_of_subscribers = numberOfSubscribersFormatter(table, date_row, indicator)

  return [
    transfers,
    payments,
    number_of_subscribers
  ]