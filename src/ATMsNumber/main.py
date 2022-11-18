from src.ATMsNumber.xlsx.read import readXlsx
from src.ATMsNumber.xlsx.parser import parseXlsx
from src.ATMsNumber.infra.main import tradesInfra
from src.ATMsNumber.services.main import ATMsService
from src.ATMsNumber.domain.entities.save_atm import saveATMsDB
from src.ATMsNumber.indicators import indicators

def ATMsNumberUseCase():
    ATMs = []
    
    for indicator in indicators:
        file_path = tradesInfra(indicator=indicator)

        if file_path:
            response = readXlsx(documentPath=file_path)

            sheet = parseXlsx(response)
                
            ATMs = ATMsService(sheet, indicator)
            
            saveATMsDB(ATMs, indicator)

    return ATMs
