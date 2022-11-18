from src.ATMsTransactions.xlsx.read import readXlsx
from src.ATMsTransactions.xlsx.parser import parseXlsx
from src.ATMsTransactions.infra.main import tradesInfra
from src.ATMsTransactions.services.main import ATMsService
from src.ATMsTransactions.domain.entities.save_atm import saveATMsDB
from src.ATMsTransactions.indicators import indicators

def ATMsTransactionsUseCase():
    ATMs = []
    
    for indicator in indicators:
        file_path = tradesInfra(indicator=indicator)

        if file_path:
            response = readXlsx(documentPath=file_path)

            sheet = parseXlsx(response)
                
            ATMs = ATMsService(sheet, indicator)
            
            saveATMsDB(ATMs, indicator)

    return ATMs
