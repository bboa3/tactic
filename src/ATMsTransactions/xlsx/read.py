import pandas as pd

def readXlsx(documentPath: str):
  table = []

  try:
    lx = pd.ExcelFile(documentPath)
    sheet_name = lx.sheet_names[0]

    df = pd.read_excel(documentPath, sheet_name=sheet_name)
    sheet = df.values.tolist()

    return sheet

  except Exception as err:
    print(err)

  return table