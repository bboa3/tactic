from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.core.http.router.atm import ATMRouter
from src.core.http.router.pos import POSRouter
from src.core.http.router.mobile_banking import mobileBankingRouter
from src.core.http.router.currency_trades import currencyTradesRouter
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(currencyTradesRouter)
app.include_router(ATMRouter)
app.include_router(POSRouter)
app.include_router(mobileBankingRouter)
