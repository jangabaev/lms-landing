import React, { PropsWithChildren } from 'react'

export const Container:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className='max-w-[1300px] w-full mx-auto'>
        {
            children
        }
    </div>
  )
}
