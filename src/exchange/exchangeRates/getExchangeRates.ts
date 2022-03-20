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

const getExchangeRates = (text: string) => {
  const exchangeRates = {}

  exchangeRates['USD'] = usdRates(text)
  exchangeRates['ZAR'] = zarRates(text)
  exchangeRates['AED'] = aedRates(text)
  exchangeRates['AUD'] = audRates(text) 
  exchangeRates['BRL'] = brlRates(text)
  exchangeRates['BWP'] = bwpRates(text)
  exchangeRates['CAD'] = cadRates(text)
  exchangeRates['CHF'] = chfRates(text)
  exchangeRates['CNY'] = cnyRates(text)
  exchangeRates['DKK'] = dkkRates(text)
  exchangeRates['EUR'] = eurRates(text)
  exchangeRates['GBP'] = gbpRates(text)
  exchangeRates['KWD'] = kwdRates(text)
  exchangeRates['MUR'] = murRates(text)
  exchangeRates['NOK'] = nokRates(text)
  exchangeRates['NZD'] = nzdRates(text)
  exchangeRates['SEK'] = sekRates(text)
  exchangeRates['ZMW'] = zmwRates(text)

  return exchangeRates
}

export default getExchangeRates;