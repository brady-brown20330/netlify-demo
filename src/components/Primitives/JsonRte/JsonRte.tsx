import { FunctionComponent } from 'react'
import parse from 'html-react-parser'

import {JsonRte as JsonRteProps}  from '@/types/components'

const JsonRte: FunctionComponent<JsonRteProps> = (props: JsonRteProps) => {
  const { body } = props

  return (
    <>
      {body && parse(body)}
    </>
  )
}

export default JsonRte