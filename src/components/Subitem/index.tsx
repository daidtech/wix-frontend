import React from "react";
import './styles.scss'

interface SubitemProps {
  link: string,
  children: string | JSX.Element | JSX.Element[],
}

function Subitem({link, children}: SubitemProps) {
  return (
    <a href={link} className='subitem'>
      {children}
    </a>
    )
}

export default Subitem;