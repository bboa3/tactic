from pydantic import BaseModel

class DatePOS(BaseModel):
  month: int
  year: int


class Value(BaseModel):
  date: DatePOS
  value: int

class POS(BaseModel):
  _id: str
  name: str
  volumes: list[Value]
  values: list[Value]

class Indicator(BaseModel):
  name: str
  description: str
  page_identifiers: list[str]
  db_name: str
  jobCode: str