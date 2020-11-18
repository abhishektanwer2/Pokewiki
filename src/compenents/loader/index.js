import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners'

const ClipLoaderComponent = (props) => {

  const [loading, setLoading] = useState(true)

  return (
    <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
      <ClipLoader
        color={'#123abc'}
        loading={loading}
      />
    </div>
  )
}

export default ClipLoaderComponent