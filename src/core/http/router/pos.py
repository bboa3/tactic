from fastapi import APIRouter
from src.POSsNumber.main import POSsNumberUseCase
from src.POSsTransactions.main import POSsTransactionsUseCase

POSRouter = APIRouter(
    prefix='/pos',
    tags=['POS']
)

@POSRouter.get('/number')
def controller():
  data = POSsNumberUseCase()

@POSRouter.get('/transactions')
def controller():
  data = POSsTransactionsUseCase()

  return data
  
  
  
  