from src.moneyPrinting.domain.requiredFields.money_printing import Indicator
from src.moneyPrinting.services.utils.formatter import formatter
from src.moneyPrinting.services.utils.find.find_date import findDateRow

def moneyPrintingService(table: list,  indicator: Indicator):
    date_row = findDateRow(table)

    formatted = formatter(
        table=table,
        date_row=date_row,
        indicator=indicator
    )

    return formatted
