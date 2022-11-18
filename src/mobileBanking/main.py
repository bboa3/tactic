from src.mobileBanking.xlsx.read import readXlsx
from src.mobileBanking.xlsx.parser import parseXlsx
from src.mobileBanking.infra.main import tradesInfra
from src.mobileBanking.services.main import mobileBankingService
from src.mobileBanking.domain.entities.save_mobile_banking import saveMobileBankingsDB
from src.mobileBanking.indicators import indicators

def mobileBankingUseCase():
    mobileBanking = []
    
    for indicator in indicators:
        file_path = tradesInfra(indicator=indicator)

        if file_path:
            response = readXlsx(documentPath=file_path)

            sheet = parseXlsx(response)
                
            mobileBanking = mobileBankingService(sheet, indicator)
            
            saveMobileBankingsDB(mobileBanking, indicator)

    return mobileBanking
