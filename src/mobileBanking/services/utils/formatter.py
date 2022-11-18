from datetime import datetime
from src.mobileBanking.domain.requiredFields.mobile_banking import Indicator
from src.mobileBanking.services.utils.content.to_account import toAccountFormatter
from src.mobileBanking.services.utils.content.to_mobile import toMobileFormatter
from src.mobileBanking.services.utils.content.number_of_subscribers import numberOfSubscribersFormatter

def formatter(
  table: list[list[float]],
  date_row: list[datetime],
  indicator: Indicator
):
  to_account = toAccountFormatter(table, date_row, indicator)
  to_mobile = toMobileFormatter(table, date_row, indicator)
  number_of_subscribers = numberOfSubscribersFormatter(table, date_row, indicator)

  return [
    to_account,
    to_mobile,
    number_of_subscribers
  ]