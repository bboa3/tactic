from datetime import datetime
from src.POSsNumber.domain.requiredFields.pos import Indicator
from src.POSsNumber.services.utils.content.manica import manicaFormatter
from src.POSsNumber.services.utils.content.gaza import gazaFormatter
from src.POSsNumber.services.utils.content.inhambane import inhambaneFormatter
from src.POSsNumber.services.utils.content.nampula import nampulaFormatter
from src.POSsNumber.services.utils.content.niassa import niassaFormatter
from src.POSsNumber.services.utils.content.sofala import sofalaFormatter
from src.POSsNumber.services.utils.content.tete import teteFormatter
from src.POSsNumber.services.utils.content.zambezia import zambeziaFormatter
from src.POSsNumber.services.utils.content.cabo_delgado import caboDelgadoFormatter
from src.POSsNumber.services.utils.content.maputo_city import maputoCityFormatter
from src.POSsNumber.services.utils.content.maputo_province import maputoProvinceFormatter

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