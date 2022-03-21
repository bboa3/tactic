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
import zwlRates from './zwl';
import mwkRates from './mwk';
import tzsRates from './tzs';
import inrRates from './inr';
import iqdRates from './iqd';
import jpyRates from './jpy';
import rubRates from './rub';
import xdrRates from './xdr';

const getExchangeRates = (data: any) => {
  const exchanges = data.Page.Flow[0].Para

  const exchangeRates = {
    USD: usdRates(exchanges),
    ZAR: zarRates(exchanges),
    AED: aedRates(exchanges),
    AUD: audRates(exchanges),
    BRL: brlRates(exchanges),
    ZWL: zwlRates(exchanges),
    TZS: tzsRates(exchanges),
    BWP: bwpRates(exchanges),
    MWK: mwkRates(exchanges),
    CAD: cadRates(exchanges),
    CHF: chfRates(exchanges),
    CNY: cnyRates(exchanges),
    DKK: dkkRates(exchanges),
    EUR: eurRates(exchanges),
    GBP: gbpRates(exchanges),
    KWD: kwdRates(exchanges),
    MUR: murRates(exchanges),
    NOK: nokRates(exchanges),
    NZD: nzdRates(exchanges),
    SEK: sekRates(exchanges),
    ZMW: zmwRates(exchanges),
    INR: inrRates(exchanges),
    IQD: iqdRates(exchanges),
    JPY: jpyRates(exchanges),
    RUB: rubRates(exchanges),
    XDR: xdrRates(exchanges)
  }

  return exchangeRates
}

export default getExchangeRates;
