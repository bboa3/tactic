from src.moneyPrinting.xlsx.read import readXlsx
from src.moneyPrinting.xlsx.parser import parseXlsx
from src.moneyPrinting.infra.main import moneyPrintingInfra
from src.moneyPrinting.services.main import moneyPrintingService
from src.moneyPrinting.domain.entities.save_money_printing import saveMoneyPrintingDB
from src.moneyPrinting.indicators import indicators

def moneyPrintingUseCase():
    money = []
    
    for indicator in indicators:
        file_path = moneyPrintingInfra(indicator=indicator)

        if file_path:
            response = readXlsx(documentPath=file_path)

            sheet = parseXlsx(response)
                
            money = moneyPrintingService(sheet, indicator)
            
            saveMoneyPrintingDB(money, indicator)

    return money
