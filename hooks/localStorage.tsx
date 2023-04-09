import { useEffect } from 'react';
import { cartItemI } from '../resources/interfaces';
import { useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/slice/cart';

declare let window: { localStorage: any };

const useLocal = (items: cartItemI[]) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const localData = window.localStorage.getItem(`cart`);
		const datas: cartItemI[] = JSON.parse(localData);

		items.length === 0 &&
			datas &&
			datas.map((data: cartItemI) => dispatch(addToCart({ ...data })));
	}, []);

	useEffect(() => {
		window.localStorage.setItem('cart', JSON.stringify(items));
	}, [items]);
};

export default useLocal;
