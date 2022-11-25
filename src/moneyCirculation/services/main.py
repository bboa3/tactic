from src.moneyCirculation.domain.requiredFields.money_circulation import Indicator
from src.moneyCirculation.services.utils.formatter import formatter
from src.moneyCirculation.services.utils.find.find_date import findDateRow

def moneyCirculationService(table: list,  indicator: Indicator):
    date_row = findDateRow(table)

    formatted = formatter(
        table=table,
        date_row=date_row,
        indicator=indicator
    )

    return formatted
