from datetime import datetime
from src.ATMsNumber.domain.requiredFields.atm import Indicator
from src.ATMsNumber.services.utils.content.manica import manicaFormatter
from src.ATMsNumber.services.utils.content.gaza import gazaFormatter
from src.ATMsNumber.services.utils.content.inhambane import inhambaneFormatter
from src.ATMsNumber.services.utils.content.nampula import nampulaFormatter
from src.ATMsNumber.services.utils.content.niassa import niassaFormatter
from src.ATMsNumber.services.utils.content.sofala import sofalaFormatter
from src.ATMsNumber.services.utils.content.tete import teteFormatter
from src.ATMsNumber.services.utils.content.zambezia import zambeziaFormatter
from src.ATMsNumber.services.utils.content.cabo_delgado import caboDelgadoFormatter
from src.ATMsNumber.services.utils.content.maputo_city import maputoCityFormatter
from src.ATMsNumber.services.utils.content.maputo_province import maputoProvinceFormatter

def formatter(
  table: list[list[float]],
  date_row: list[datetime],
  indicator: Indicator
):
  manica = manicaFormatter(table, date_row, indicator)
  gaza = gazaFormatter(table, date_row, indicator)
  maputoCity = maputoCityFormatter(table, date_row, indicator)
  maputoProvince = maputoProvinceFormatter(table, date_row, indicator)
  caboDelgado = caboDelgadoFormatter(table, date_row, indicator)
  zambezia = zambeziaFormatter(table, date_row, indicator)
  tete = teteFormatter(table, date_row, indicator)
  sofala = sofalaFormatter(table, date_row, indicator)
  niassa = niassaFormatter(table, date_row, indicator)
  inhambane = inhambaneFormatter(table, date_row, indicator)
  nampula = nampulaFormatter(table, date_row, indicator)

  return [
    manica,
    gaza,
    maputoProvince,
    maputoCity,
    caboDelgado,
    zambezia,
    tete,
    sofala,
    niassa,
    inhambane,
    nampula,
  ]