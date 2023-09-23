import React, { ReactElement } from "react";
import './Subitem.scss'

interface SubitemProps {
  link: string,
  children: ReactElement | string,
  className?: string,
}

function Subitem({children, link, className = ''}: SubitemProps) {
  return (
    <a href={link} className={`subitem ${className}`}>
      {children}
    </a>
    )
}

export default Subitem;