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


export const exchangeRatesHistoriesFormatter = (tableRows: string[]): Formatted[] => {
  const date = dayjs(new Date()).format('YYYY-MM-DD HH:mm')

  const formatted: Formatted[] = [
    { iso: 'USD', trade: { ...usdRates(tableRows), date}},
    { iso: 'ZAR', trade: { ...zarRates(tableRows), date}},
    { iso: 'AED', trade: { ...aedRates(tableRows), date}},
    { iso: 'AUD', trade: { ...audRates(tableRows), date}},
    { iso: 'BRL', trade: { ...brlRates(tableRows), date}},
    { iso: 'ZWL', trade: { ...zwlRates(tableRows), date}},
    { iso: 'TZS', trade: { ...tzsRates(tableRows), date}},
    { iso: 'BWP', trade: { ...bwpRates(tableRows), date}},
    { iso: 'MWK', trade: { ...mwkRates(tableRows), date}},
    { iso: 'CAD', trade: { ...cadRates(tableRows), date}},
    { iso: 'CHF', trade: { ...chfRates(tableRows), date}},
    { iso: 'CNY', trade: { ...cnyRates(tableRows), date}},
    { iso: 'DKK', trade: { ...dkkRates(tableRows), date}},
    { iso: 'EUR', trade: { ...eurRates(tableRows), date}},
    { iso: 'GBP', trade: { ...gbpRates(tableRows), date}},
    { iso: 'KWD', trade: { ...kwdRates(tableRows), date}},
    { iso: 'MUR', trade: { ...murRates(tableRows), date}},
    { iso: 'NOK', trade: { ...nokRates(tableRows), date}},
    { iso: 'NZD', trade: { ...nzdRates(tableRows), date}},
    { iso: 'SEK', trade: { ...sekRates(tableRows), date}},
    { iso: 'ZMW', trade: { ...zmwRates(tableRows), date}},
    { iso: 'INR', trade: { ...inrRates(tableRows), date}},
    { iso: 'IQD', trade: { ...iqdRates(tableRows), date}},
    { iso: 'JPY', trade: { ...jpyRates(tableRows), date}},
    { iso: 'RUB', trade: { ...rubRates(tableRows), date}},
    { iso: 'XDR', trade: { ...xdrRates(tableRows), date}}
  ]

  return formatted
}
