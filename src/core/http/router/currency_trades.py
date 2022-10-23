from fastapi import APIRouter
from src.monthlyCurrencyTrades.main import monthlyCurrencyTradesUseCase

currencyTradesRouter = APIRouter(
    prefix='/currency-trades',
    tags=['Currencies']
)

@currencyTradesRouter.get('/monthly')
def controller():
  data = monthlyCurrencyTradesUseCase()

  return data
  
  
  
  