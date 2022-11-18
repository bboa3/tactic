from src.internetBanking.domain.requiredFields.internet_banking import Indicator
from src.internetBanking.services.utils.formatter import formatter
from src.internetBanking.services.utils.find.find_date import findDateRow

def internetBankingService(table: list,  indicator: Indicator):
    date_row = findDateRow(table)

    formatted = formatter(
        table=table,
        date_row=date_row,
        indicator=indicator
    )

    return formatted
