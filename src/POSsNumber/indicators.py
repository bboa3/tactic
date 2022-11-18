# https://www.bancomoc.mz/fm_pgTab1.aspx?id=27

indicators = [
  {
    'name': 'Número de máquinas POSs',
    'description': 'Número de máquinas de POSs',
    'page_identifiers': [''],
    'db_name': 'pos-number',
    'jobCode': 'pos-number',
  }
]

# jobCode - used to identify the Job in database
# db_name - used to identify the indicator in database
# name - Name of the indicator, used to filter indicator data
# description - Indicator description
# page_identifiers - The identifies of the pdf page containing indicator table data, It's used to validate the pdf page containing table data.
