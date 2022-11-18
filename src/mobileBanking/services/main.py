from src.mobileBanking.domain.requiredFields.mobile_banking import Indicator
from src.mobileBanking.services.utils.formatter import formatter
from src.mobileBanking.services.utils.find.find_date import findDateRow

def mobileBankingService(table: list,  indicator: Indicator):
    date_row = findDateRow(table)

    formatted = formatter(
        table=table,
        date_row=date_row,
        indicator=indicator
    )

    return formatted
