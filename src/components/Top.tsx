import UseContextComponent from './UseContextComponent'
import UseEffectComponent from './UseEffectComponent'
import UseReducerComponent from './UseReducerComponent'
import UseStateComponent from './UseStateComponent'

export default function Top() {
  return (
    <div>
      <h1>Tippy Toppy of the Hello World</h1>
      <h3>UseState</h3>
      <UseStateComponent />
      <h3>UseEffect</h3>
      <UseEffectComponent />
      <h3>UseContext</h3>
      <UseContextComponent />
      <h3>UseReducer</h3>
      <UseReducerComponent />
    </div>
  )
}
