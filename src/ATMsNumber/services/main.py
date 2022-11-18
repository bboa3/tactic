from src.ATMsNumber.domain.requiredFields.atm import Indicator
from src.ATMsNumber.services.utils.formatter import formatter
from src.ATMsNumber.services.utils.find.find_date import findDateRow

def ATMsService(table: list,  indicator: Indicator):
    date_row = findDateRow(table)

    formatted = formatter(
        table=table,
        date_row=date_row,
        indicator=indicator
    )

    return formatted
