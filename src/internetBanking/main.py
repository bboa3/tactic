from src.internetBanking.xlsx.read import readXlsx
from src.internetBanking.xlsx.parser import parseXlsx
from src.internetBanking.infra.main import tradesInfra
from src.internetBanking.services.main import internetBankingService
from src.internetBanking.domain.entities.save_internet_banking import saveInternetBankingsDB
from src.internetBanking.indicators import indicators

def internetBankingUseCase():
    internetBanking = []
    
    for indicator in indicators:
        file_path = tradesInfra(indicator=indicator)

        if file_path:
            response = readXlsx(documentPath=file_path)
            sheet = parseXlsx(response)
                
            internetBanking = internetBankingService(sheet, indicator)
            
            saveInternetBankingsDB(internetBanking, indicator)

    return internetBanking
