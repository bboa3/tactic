import usdRates from './usd';
import zarRates from './zar';
import aedRates from './aed';
import audRates from './aud';
import brlRates from './brl';
import bwpRates from './bwp';
import cadRates from './cad';
import chfRates from './chf';
import cnyRates from './cny';
import dkkRates from './dkk';
import eurRates from './eur';
import gbpRates from './gbp';
import kwdRates from './kwd';
import murRates from './mur';
import nokRates from './nok';
import nzdRates from './nzd';
import sekRates from './sek';
import zmwRates from './zmw';
import szlRates from './szl';
import zwlRates from './zwl';
import mwkRates from './mwk';
import tzsRates from './tzs';

const getExchangeRates = (data: any) => {
  const exchanges = data.Page.Flow[0].Para

  const exchangeRates = {}

  exchangeRates['USD'] = usdRates(exchanges)
  exchangeRates['ZAR'] = zarRates(exchanges)
  exchangeRates['SZL'] = szlRates(exchanges)
  exchangeRates['AED'] = aedRates(exchanges)
  exchangeRates['AUD'] = audRates(exchanges) 
  exchangeRates['BRL'] = brlRates(exchanges)
  exchangeRates['ZWL'] = zwlRates(exchanges)
  exchangeRates['TZS'] = tzsRates(exchanges)
  exchangeRates['BWP'] = bwpRates(exchanges)
  exchangeRates['MWK'] = mwkRates(exchanges)
  exchangeRates['CAD'] = cadRates(exchanges)
  exchangeRates['CHF'] = chfRates(exchanges)
  exchangeRates['CNY'] = cnyRates(exchanges)
  exchangeRates['DKK'] = dkkRates(exchanges)
  exchangeRates['EUR'] = eurRates(exchanges)
  exchangeRates['GBP'] = gbpRates(exchanges)
  exchangeRates['KWD'] = kwdRates(exchanges)
  exchangeRates['MUR'] = murRates(exchanges)
  exchangeRates['NOK'] = nokRates(exchanges)
  exchangeRates['NZD'] = nzdRates(exchanges)
  exchangeRates['SEK'] = sekRates(exchanges)
  exchangeRates['ZMW'] = zmwRates(exchanges)

  return exchangeRates
}

export default getExchangeRates;
