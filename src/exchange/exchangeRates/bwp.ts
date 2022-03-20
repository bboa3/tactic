
const bwpRates = (text: string) => {

  const buy = text.split('\n')[55].split(',').join('.');
  
  const sale = text.split('\n')[128].split(',').join('.');

  const medium = text.split('\n')[152].split(',').join('.');


  return {
    buy: Number(buy),
    sale: Number(sale),
    medium: Number(medium)
  }

}

export default bwpRates;
