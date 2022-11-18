from fastapi import APIRouter
from src.ATMsNumber.main import ATMsNumberUseCase
from src.ATMsTransactions.main import ATMsTransactionsUseCase

ATMRouter = APIRouter(
    prefix='/atm',
    tags=['ATM']
)

@ATMRouter.get('/number')
def controller():
  data = ATMsNumberUseCase()

@ATMRouter.get('/transactions')
def controller():
  data = ATMsTransactionsUseCase()

  return data
  
  
  
  