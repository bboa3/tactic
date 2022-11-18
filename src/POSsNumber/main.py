from src.POSsNumber.xlsx.read import readXlsx
from src.POSsNumber.xlsx.parser import parseXlsx
from src.POSsNumber.infra.main import tradesInfra
from src.POSsNumber.services.main import POSsService
from src.POSsNumber.domain.entities.save_pos import savePOSsDB
from src.POSsNumber.indicators import indicators

def POSsNumberUseCase():
    POSs = []
    
    for indicator in indicators:
        file_path = tradesInfra(indicator=indicator)

        if file_path:
            response = readXlsx(documentPath=file_path)

            sheet = parseXlsx(response)
                
            POSs = POSsService(sheet, indicator)
            
            savePOSsDB(POSs, indicator)

    return POSs
