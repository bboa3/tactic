from fastapi import APIRouter
from src.internetBanking.main import internetBankingUseCase

internetBankingRouter = APIRouter(
    prefix='/internet-banking',
    tags=['Internet Banking']
)

@internetBankingRouter.get('/')
def controller():
  data = internetBankingUseCase()

  return data
  
  
  