from datetime import datetime
from src.POSsTransactions.domain.requiredFields.pos import Indicator
from src.POSsTransactions.services.utils.content.payments import paymentsFormatter

def formatter(
  table: list[list[float]],
  date_row: list[datetime],
  indicator: Indicator
):
  payments = paymentsFormatter(table, date_row, indicator)

  return [
    payments
  ]