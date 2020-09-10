import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">&copy; 2020.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Made by</span>
        <a href="https://github.com/nduba254" target="_blank" rel="noopener noreferrer">Lydia</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
