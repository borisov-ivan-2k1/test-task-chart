import React from 'react'
import { cn } from '@bem-react/classname'

import './Navigation.css'

const navigation = cn('navigation')

const Navigation = (props) => {
  let onSelect = e => {
    const type = e.target.value
    props.setType(type)
  }


  return (
    <div className={navigation()}>
      <div>
        <input
          onChange={onSelect}
          checked={props.type === 'days'}
          type="radio"
          id="days"
          value="days"
        />
        <label 
        className={navigation('item', { active: props.type === 'days' })} 
        htmlFor="days">Дни</label>
      </div>

      <div>
        <input
          onChange={onSelect}
          checked={props.type === 'months'}
          type="radio"
          id="months"
          value="months"
        />
        <label
          className={navigation('item', { active: props.type === 'months' })}
          htmlFor="months">Месяца</label>
      </div>

      <div>
        <input
          onChange={onSelect}
          checked={props.type === 'years'}
          type="radio"
          id="years" 
          value="years"
        />
        <label 
        className={navigation('item', { active: props.type === 'years' })}
        htmlFor="years">Года</label>
      </div>
    </div>
  )
}

export default Navigation
