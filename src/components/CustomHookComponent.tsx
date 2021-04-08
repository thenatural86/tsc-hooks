import { useState, useEffect } from 'react'

export interface Beverage {
  name: string
  brand: string
}

function UseFetchData<Payload>(
  url: string
): {
  data: Payload | null
  done: boolean
} {
  const [data, setData] = useState<Payload | null>(null)
  const [done, setDone] = useState<boolean>(false)

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: Payload) => {
        setData(d)
        setDone(true)
      })
  }, [url])
  return { data, done }
}

export default function CustomHookComponent() {
  const { data, done } = UseFetchData<Beverage[]>('/og.json')
  return <div>{done && data![0].name}</div>
}
