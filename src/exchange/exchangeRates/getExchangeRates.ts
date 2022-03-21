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

  if (usdRates(exchanges).buy) {
    exchangeRates['USD'] = usdRates(exchanges)
  }
  if (zarRates(exchanges).buy) {
    exchangeRates['ZAR'] = zarRates(exchanges)
  }
  if (szlRates(exchanges).buy) {
    exchangeRates['SZL'] = szlRates(exchanges)
  }
  if (aedRates(exchanges).buy) {
    exchangeRates['AED'] = aedRates(exchanges)
  }
  if (audRates(exchanges).buy) {
    exchangeRates['AUD'] = audRates(exchanges) 
  }
  if (brlRates(exchanges).buy) {
    exchangeRates['BRL'] = brlRates(exchanges)
  }
  if (zwlRates(exchanges).buy) {
    exchangeRates['ZWL'] = zwlRates(exchanges)
  }
  if (tzsRates(exchanges).buy) {
    exchangeRates['TZS'] = tzsRates(exchanges)
  }
  if (bwpRates(exchanges).buy) {
    exchangeRates['BWP'] = bwpRates(exchanges)
  }
  if (mwkRates(exchanges).buy) {
    exchangeRates['MWK'] = mwkRates(exchanges)
  }
  if (cadRates(exchanges).buy) {
    exchangeRates['CAD'] = cadRates(exchanges)
  }
  if (chfRates(exchanges).buy) {
    exchangeRates['CHF'] = chfRates(exchanges)
  }
  if (cnyRates(exchanges).buy) {
    exchangeRates['CNY'] = cnyRates(exchanges)
  }
  if (dkkRates(exchanges).buy) {
    exchangeRates['DKK'] = dkkRates(exchanges)
  }
  if (eurRates(exchanges).buy) {
    exchangeRates['EUR'] = eurRates(exchanges)
  }
  if (gbpRates(exchanges).buy) {
    exchangeRates['GBP'] = gbpRates(exchanges)
  }
  if (kwdRates(exchanges).buy) {
    exchangeRates['KWD'] = kwdRates(exchanges)
  }
  if (murRates(exchanges).buy) {
    exchangeRates['MUR'] = murRates(exchanges)
  }
  if (nokRates(exchanges).buy) {
    exchangeRates['NOK'] = nokRates(exchanges)
  }
  if (nzdRates(exchanges).buy) {
    exchangeRates['NZD'] = nzdRates(exchanges)
  }
  if (sekRates(exchanges).buy) {
    exchangeRates['SEK'] = sekRates(exchanges)
  }
  if (zmwRates(exchanges).buy) {
    exchangeRates['ZMW'] = zmwRates(exchanges)
  }

  return exchangeRates
}

export default getExchangeRates;
