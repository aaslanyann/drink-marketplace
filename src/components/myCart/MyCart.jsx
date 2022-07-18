import Header from "../header/Header";
import styles from "./style.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { selectBasketData } from '../../redux/common/basket/selectors'
import { chooseAllDrink, chooseDrink, removeItemInBasket } from '../../redux/common/basket/action'
import { basketChooseLength, chooseAll, chooseItem, getSumOfItems, removeItem } from '../../utils/basket'
import { useCallback, useMemo } from 'react'
import EmptyBasket from './EmptyBasket/EmprtyBasket'
import BasketInfo from './BasketInfo/BasketInfo'
import BasketList from './BasketList/BasketList'
import Footer from '../footer/Footer'



export default function MyCart() {
  const dispatch = useDispatch()
  const basketData = useSelector(selectBasketData)
  const allMoney = getSumOfItems(basketData);
  const basketLengthOfChoose = basketChooseLength(basketData)

  const onChooseAll = useCallback(({checked}) => {
    const currentList = chooseAll({ list: basketData, checked });
    dispatch(chooseAllDrink(currentList))
  },[dispatch]);


  const onRemoveBasketItem = (id) => {
    const currentList = removeItem({ list: basketData, id });
    dispatch(removeItemInBasket(currentList))

  }

  const onBasketItemChange = (checked, id ) => {
    const currentList = chooseItem({list: basketData, id, choose: checked});
    dispatch(chooseDrink(currentList));
  }

  return (
        <>
            <Header />
            <div className={`containerWithHeader ${styles.block}`}>
              {
                basketData.length ?
                  <div className={styles.main}>
                    <BasketInfo onChooseAll={onChooseAll}  allMoney={allMoney} basketLength={basketLengthOfChoose} />
                    <div >
                      <BasketList onRemoveBasketItem={onRemoveBasketItem} onBasketItemChange={onBasketItemChange} basketData={basketData}/>
                    </div>
                  </div>

                  :
                <EmptyBasket/>
              }
            </div>
          <Footer />
        </>

    )
}