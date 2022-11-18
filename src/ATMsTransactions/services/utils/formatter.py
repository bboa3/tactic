from datetime import datetime
from src.ATMsTransactions.domain.requiredFields.atm import Indicator
from src.ATMsTransactions.services.utils.content.transfers import transfersFormatter
from src.ATMsTransactions.services.utils.content.cash_withdrawals import cashWithdrawalsFormatter
from src.ATMsTransactions.services.utils.content.payments_for_services import paymentsForServicesFormatter

def formatter(
  table: list[list[float]],
  date_row: list[datetime],
  indicator: Indicator
):
  transfers = transfersFormatter(table, date_row, indicator)
  cashWithdrawals = cashWithdrawalsFormatter(table, date_row, indicator)
  paymentsForServices = paymentsForServicesFormatter(table, date_row, indicator)

  return [
    transfers,
    cashWithdrawals,
    paymentsForServices
  ]