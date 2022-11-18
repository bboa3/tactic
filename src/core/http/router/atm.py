from fastapi import APIRouter
from src.ATMsNumber.main import ATMsNumberUseCase

ATMRouter = APIRouter(
    prefix='/atm',
    tags=['ATM']
)

@ATMRouter.get('/number')
def controller():
  data = ATMsNumberUseCase()

  return data
  
  
  
  