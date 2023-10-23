import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

export function useTask() {
  return useContext(AppContext)
}
