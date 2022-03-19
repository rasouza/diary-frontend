import React from 'react'
import { Input } from 'reactstrap'

export default React.forwardRef((props, ref) => (
  <Input innerRef={ref} {...props} />
))
