import re

def dataTypeFormatter (el: str):
  el = str(el)
  el = el.replace(',', '.')
  el = el.strip()

  intMatch = re.search(r'^[-+]?\d+$', el)
  floatMatch = re.search(r'^[-+]?\d+\.\d+$', el)

  if floatMatch is not None:
    return float(el)

  elif intMatch is not None:
    return int(el)

  else:
    return el
