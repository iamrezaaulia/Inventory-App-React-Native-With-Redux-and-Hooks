import { combineReducers } from 'redux'

import products from './reducer/products'
import users from './reducer/users'

const rootReducer = combineReducers(
    {
        products,
        users
    }
)

export default rootReducer