from fastapi import APIRouter
from src.mobileBanking.main import mobileBankingUseCase

mobileBankingRouter = APIRouter(
    prefix='/mobile-banking',
    tags=['Mobile Banking']
)

@mobileBankingRouter.get('/')
def controller():
  data = mobileBankingUseCase()

  return data
  
  
  