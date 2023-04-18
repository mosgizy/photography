import { useEffect } from 'react';
import { cartItemI } from '../resources/interfaces';
import { useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/slice/cart';
import { reactLocalStorage } from 'reactjs-localstorage';

const useLocal = (items: cartItemI[]) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const localData = reactLocalStorage.get('cart');
		const datas: cartItemI[] = JSON.parse(`${localData}`);

		// console.log(JSON.parse(localData));

		items.length === 0 &&
			datas &&
			datas.map((data: cartItemI) => dispatch(addToCart({ ...data })));
	}, []);

	useEffect(() => {
		reactLocalStorage.set('cart', JSON.stringify(items));
	}, [items]);
};

export default useLocal;
