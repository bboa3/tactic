from src.monthlyCurrencyTrades.xlsx.read import readXlsx
from src.monthlyCurrencyTrades.xlsx.parser import parseXlsx
from src.monthlyCurrencyTrades.infra.main import tradesInfra
from src.monthlyCurrencyTrades.services.current_trades import currencyTradesService
from src.monthlyCurrencyTrades.domain.entities.save_trades import saveCurrentTradesDB
from src.monthlyCurrencyTrades.domain.entities.get_all_currencies import getAllCurrenciesDB
from src.monthlyCurrencyTrades.indicators import indicators

def monthlyCurrencyTradesUseCase():
    currenciesTrades = []
    
    for indicator in indicators:
        file_path = tradesInfra(indicator=indicator)

        if file_path:
            response = readXlsx(documentPath=file_path)

            sheet = parseXlsx(response)

            currencies = getAllCurrenciesDB(indicator)
                
            currenciesTrades = currencyTradesService(currencies, sheet)

            # saveCurrentTradesDB(currenciesTrades, indicator)

    return currenciesTrades
