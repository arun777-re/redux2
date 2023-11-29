import {combineReducers} from 'redux';
import amountReducers from './amountreducer';
import bringreducers from './bringreducer';

const reducers = combineReducers({
    quantity:amountReducers,
    amount:bringreducers
})

export default reducers;