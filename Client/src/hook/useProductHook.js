import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as productAction from "../actions/productAction";

export const useProduct = (sort,category,searchProductKey,ltORgt,init) => {
    const dispatch = useDispatch();
    const [initialLoading, setInitialLoading] = useState(init);

    const productList = useSelector((state) => state.products);

    const {loading, products, count, error, success} = productList;
    //use Effect for price range change value
    useEffect(()=>{
        setInitialLoading(true)
    },[ltORgt])
    useEffect(() => {
        if ((success && initialLoading) ) {
            setInitialLoading(false);
        } else {
            fetchProductList();
        }
    }, [dispatch, searchProductKey, sort, category,ltORgt]);

    const fetchProductList = () => {
        dispatch(
            productAction.listProducts({
                searchProductKey,
                sort,
                category,
                initialLoading,
                ltORgt
            })

        );
    };

    return {products,loading,count,error,searchProductKey,fetchProductList,init};
}
