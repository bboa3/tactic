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
import dayjs from 'dayjs';

interface Trade {
  buy: number
  sale: number
  date: string
}

interface Formatted {
  iso: string
  trade: Trade
}

export const formatter = (data: any): Formatted[] => {
  const exchanges = data.Page.Flow[0].Para
  const date = dayjs(new Date()).format('YYYY-MM-DD HH:mm')

  const formatted: Formatted[] = [
    { iso: 'USD', trade: { ...usdRates(exchanges), date}},
    { iso: 'ZAR', trade: { ...zarRates(exchanges), date}},
    { iso: 'AED', trade: { ...aedRates(exchanges), date}},
    { iso: 'AUD', trade: { ...audRates(exchanges), date}},
    { iso: 'BRL', trade: { ...brlRates(exchanges), date}},
    { iso: 'ZWL', trade: { ...zwlRates(exchanges), date}},
    { iso: 'TZS', trade: { ...tzsRates(exchanges), date}},
    { iso: 'BWP', trade: { ...bwpRates(exchanges), date}},
    { iso: 'MWK', trade: { ...mwkRates(exchanges), date}},
    { iso: 'CAD', trade: { ...cadRates(exchanges), date}},
    { iso: 'CHF', trade: { ...chfRates(exchanges), date}},
    { iso: 'CNY', trade: { ...cnyRates(exchanges), date}},
    { iso: 'DKK', trade: { ...dkkRates(exchanges), date}},
    { iso: 'EUR', trade: { ...eurRates(exchanges), date}},
    { iso: 'GBP', trade: { ...gbpRates(exchanges), date}},
    { iso: 'KWD', trade: { ...kwdRates(exchanges), date}},
    { iso: 'MUR', trade: { ...murRates(exchanges), date}},
    { iso: 'NOK', trade: { ...nokRates(exchanges), date}},
    { iso: 'NZD', trade: { ...nzdRates(exchanges), date}},
    { iso: 'SEK', trade: { ...sekRates(exchanges), date}},
    { iso: 'ZMW', trade: { ...zmwRates(exchanges), date}},
    { iso: 'INR', trade: { ...inrRates(exchanges), date}},
    { iso: 'IQD', trade: { ...iqdRates(exchanges), date}},
    { iso: 'JPY', trade: { ...jpyRates(exchanges), date}},
    { iso: 'RUB', trade: { ...rubRates(exchanges), date}},
    { iso: 'XDR', trade: { ...xdrRates(exchanges), date}}
  ]

  return formatted
}
