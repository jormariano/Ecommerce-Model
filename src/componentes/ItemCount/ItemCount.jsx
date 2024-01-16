import { useState } from "react"
import { useTranslation } from 'react-i18next'

const ItemCount = ({ initial, stock, addFunction }) => {

  const { t } = useTranslation(['global'])

  const [counter, setCounter] = useState(initial);


  const increase = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  }

  const decrease = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  }

  return (
    <div className='count-cart'>
      <div className='count-add'>
        <button type="button" onClick={decrease}> - </button>
        <strong> {counter} </strong>
        <button type="button" onClick={increase}> + </button>
      </div>
      <button type="button" className="button-add" onClick={() => addFunction(counter)} > {t('itemcount.add')} </button>
    </div>
  )
}

export default ItemCount