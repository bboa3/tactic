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

interface Tables {
  byUnitTable: string[],
  by1000UnitsTable: string[]
}

export const formatter = ({ byUnitTable, by1000UnitsTable }: Tables): Formatted[] => {
  const date = dayjs(new Date()).format('YYYY-MM-DD HH:mm')



  const formatted: Formatted[] = [
    { iso: 'USD', trade: { ...usdRates(byUnitTable), date}},
    { iso: 'ZAR', trade: { ...zarRates(byUnitTable), date}},
    { iso: 'AED', trade: { ...aedRates(byUnitTable), date}},
    { iso: 'AUD', trade: { ...audRates(byUnitTable), date}},
    { iso: 'BRL', trade: { ...brlRates(byUnitTable), date}},
    { iso: 'ZWL', trade: { ...zwlRates(by1000UnitsTable), date}},
    { iso: 'TZS', trade: { ...tzsRates(by1000UnitsTable), date}},
    { iso: 'BWP', trade: { ...bwpRates(byUnitTable), date}},
    { iso: 'MWK', trade: { ...mwkRates(by1000UnitsTable), date}},
    { iso: 'CAD', trade: { ...cadRates(byUnitTable), date}},
    { iso: 'CHF', trade: { ...chfRates(byUnitTable), date}},
    { iso: 'CNY', trade: { ...cnyRates(byUnitTable), date}},
    { iso: 'DKK', trade: { ...dkkRates(byUnitTable), date}},
    { iso: 'EUR', trade: { ...eurRates(byUnitTable), date}},
    { iso: 'GBP', trade: { ...gbpRates(byUnitTable), date}},
    { iso: 'KWD', trade: { ...kwdRates(byUnitTable), date}},
    { iso: 'MUR', trade: { ...murRates(byUnitTable), date}},
    { iso: 'NOK', trade: { ...nokRates(byUnitTable), date}},
    { iso: 'NZD', trade: { ...nzdRates(byUnitTable), date}},
    { iso: 'SEK', trade: { ...sekRates(byUnitTable), date}},
    { iso: 'ZMW', trade: { ...zmwRates(byUnitTable), date}},
    { iso: 'INR', trade: { ...inrRates(by1000UnitsTable), date}},
    { iso: 'IQD', trade: { ...iqdRates(by1000UnitsTable), date}},
    { iso: 'JPY', trade: { ...jpyRates(by1000UnitsTable), date}},
    { iso: 'RUB', trade: { ...rubRates(byUnitTable), date}},
    { iso: 'XDR', trade: { ...xdrRates(byUnitTable), date}}
  ]

  return formatted
}
