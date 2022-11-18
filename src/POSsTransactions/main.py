from src.POSsTransactions.xlsx.read import readXlsx
from src.POSsTransactions.xlsx.parser import parseXlsx
from src.POSsTransactions.infra.main import tradesInfra
from src.POSsTransactions.services.main import POSsService
from src.POSsTransactions.domain.entities.save_pos import savePOSsDB
from src.POSsTransactions.indicators import indicators

def POSsTransactionsUseCase():
    POSs = []
    
    for indicator in indicators:
        file_path = tradesInfra(indicator=indicator)

        if file_path:
            response = readXlsx(documentPath=file_path)

            sheet = parseXlsx(response)
                
            POSs = POSsService(sheet, indicator)
            
            savePOSsDB(POSs, indicator)

    return POSs
