import React, { ReactElement } from "react";
import './styles.scss'

interface SubitemProps {
  link: string,
  children: ReactElement | string
}

function Subitem({link, children}: SubitemProps) {
  return (
    <a href={link} className='subitem'>
      {children}
    </a>
    )
}

export default Subitem;