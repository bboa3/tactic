from src.POSsNumber.domain.requiredFields.pos import Indicator
from src.POSsNumber.services.utils.formatter import formatter
from src.POSsNumber.services.utils.find.find_date import findDateRow

def POSsService(table: list,  indicator: Indicator):
    date_row = findDateRow(table)

    formatted = formatter(
        table=table,
        date_row=date_row,
        indicator=indicator
    )

    return formatted
