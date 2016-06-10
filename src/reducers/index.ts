import { combineReducers } from 'redux';
import { ISession, sessionReducer } from './session';
import { IQuotes, quotesReducer } from './quotes';
import { IQuote, quoteReducer } from './quote';

export interface IAppState {
  session?: ISession;
  quotes?: IQuotes;
  quote?: IQuote;
}

export default combineReducers<IAppState>({
  session: sessionReducer,
  quotes: quotesReducer,
  quote: quoteReducer,
});
