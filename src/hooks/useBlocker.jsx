import  { useEffect, useContext } from 'react'
import { UNSAFE_NavigationContext } from 'react-router-dom'
export function useBlocker(blocker, when = true) {
  const navigator = useContext(UNSAFE_NavigationContext)
  console.log(navigator)
  useEffect(() => {
    if (!when) return
    const unblock = navigator.navigator.block((tx) => {
      const autoUnblockingTx = {
        ...tx,
        retry() {
          unblock()
          tx.retry()
        },
      }
      blocker(autoUnblockingTx)
    })
    return unblock
  }, [navigator, blocker, when])
}