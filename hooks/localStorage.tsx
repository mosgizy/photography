import { useEffect } from 'react';
import { cartItemI } from '../resources/interfaces';
import { useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/slice/cart';

const useLocal = (items: cartItemI[]) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const localData = localStorage.getItem(`cart`) || '[]';
		const datas: cartItemI[] = JSON.parse(localData);

		items.length === 0 &&
			datas &&
			datas.map((data: cartItemI) => dispatch(addToCart({ ...data })));
	}, []);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(items));
	}, [items]);
};

export default useLocal;
