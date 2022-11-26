from src.moneyCirculation.xlsx.read import readXlsx
from src.moneyCirculation.xlsx.parser import parseXlsx
from src.moneyCirculation.infra.main import moneyCirculationInfra
from src.moneyCirculation.services.main import moneyCirculationService
from src.moneyCirculation.domain.entities.save_money_circulation import saveMoneyCirculationDB
from src.moneyCirculation.indicators import indicators

def moneyCirculationUseCase():
    money = []
    
    for indicator in indicators:
        file_path = moneyCirculationInfra(indicator=indicator)

        if file_path:
            response = readXlsx(documentPath=file_path)

            sheet = parseXlsx(response)
                
            money = moneyCirculationService(sheet, indicator)
            
            saveMoneyCirculationDB(money, indicator)

    return money
