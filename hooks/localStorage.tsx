import { useEffect } from 'react';
import { cartItemI } from '../resources/interfaces';
import { useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/slice/cart';
import { reactLocalStorage } from 'reactjs-localstorage';

const useLocal = (items: cartItemI[]) => {
	const dispatch = useAppDispatch();

	if (
		typeof window !== 'undefined' &&
		reactLocalStorage.get('cart') === undefined
	) {
		reactLocalStorage.set('cart', JSON.stringify(items));
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const localData = reactLocalStorage.get('cart');
			const datas: cartItemI[] = JSON.parse(`${localData}`);

			items.length === 0 &&
				datas &&
				datas.map((data: cartItemI) => dispatch(addToCart({ ...data })));
		}
	}, []);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			reactLocalStorage.set('cart', JSON.stringify(items));
		}
	}, [items]);
};

export default useLocal;
