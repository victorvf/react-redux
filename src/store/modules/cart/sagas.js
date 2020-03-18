import { call, select, put, all, takeLatest } from 'redux-saga/effects';
<<<<<<< HEAD
import { toast } from 'react-toastify';
=======
>>>>>>> 04e5f70626b91420126bc3044d0ad3a8acf467ba

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

<<<<<<< HEAD
import { addToCartSuccess, updateAmountSuccess } from './actions';
=======
import { addToCartSuccess, updateAmount } from './actions';
>>>>>>> 04e5f70626b91420126bc3044d0ad3a8acf467ba

function* addToCart({ id }) {
    const productExists = yield select(state =>
        state.cart.find(p => p.id === id)
    );

<<<<<<< HEAD
    const stock = yield call(api.get, `/stock/${id}`);

    const stockAmount = stock.data.amount;
    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

    if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
    }

    if (productExists) {
        yield put(updateAmountSuccess(id, amount));
=======
    if (productExists) {
        const amount = productExists.amount + 1;

        yield put(updateAmount(id, amount));
>>>>>>> 04e5f70626b91420126bc3044d0ad3a8acf467ba
    } else {
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        };

        yield put(addToCartSuccess(data));
    }
<<<<<<< HEAD
}

function* updateAmount({ id, amount }) {
    if (amount <= 0) return;

    const stock = yield call(api.get, `/stock/${id}`);

    const stockAmount = stock.data.amount;

    if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
    }

    yield put(updateAmountSuccess(id, amount));
=======
>>>>>>> 04e5f70626b91420126bc3044d0ad3a8acf467ba
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
