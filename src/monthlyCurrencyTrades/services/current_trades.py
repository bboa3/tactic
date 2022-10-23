from src.monthlyCurrencyTrades.services.utils.format_currency_trades import formatCurrencyTrades
from src.monthlyCurrencyTrades.services.utils.find_currency_trades import findCurrencyTrades
from src.monthlyCurrencyTrades.domain.requiredFields.currencies import Currency

def currencyTradesService(currencies: list[Currency], sheet: list):
    newCurrenciesTrades = []
    
    for currency in currencies:
        countryName: str = currency['country']
        found = findCurrencyTrades(countryName=countryName, currenciesTrades=sheet)

        if found is not None:
            tableRow = found['row']
            divider = found['divider']

            currency['_id'] = ''
            currency['monthlyTrades'] = formatCurrencyTrades(
                tableRow=tableRow,
                divider=divider
            )

            newCurrenciesTrades.append(currency)

        if tableRow is None:
            errorMessage = f'The {countryName} currency could not be found'
            print(errorMessage)

    return newCurrenciesTrades
