import React from 'react'
import UseEffectComponent from './UseEffectComponent'
import UseStateComponent from './UseStateComponent'

export default function Top() {
  return (
    <div>
      <h1>Tippy Toppy of the Hello World</h1>
      <h3>UseState</h3>
      <UseStateComponent />
      <h3>UseEffect</h3>
      <UseEffectComponent />
    </div>
  )
}
