from fastapi import APIRouter
from src.POSsNumber.main import POSsNumberUseCase

POSRouter = APIRouter(
    prefix='/pos',
    tags=['POS']
)

@POSRouter.get('/number')
def controller():
  data = POSsNumberUseCase()

  return data
  
  
  
  