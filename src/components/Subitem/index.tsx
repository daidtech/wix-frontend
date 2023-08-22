import React from "react";
import './styles.scss'

interface SubitemProp {
  link: string,
  children: string | JSX.Element | JSX.Element[],
}

function Subitem({link, children}: SubitemProp) {
  return (
    <a href={link} className='subitem'>
      {children}
    </a>
    )
}

export default Subitem;