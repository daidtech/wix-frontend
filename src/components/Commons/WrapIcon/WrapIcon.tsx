import { ReactElement } from 'react';
import './WrapIcon.scss';

interface WrapIconProps {
  children: ReactElement,
  className?: string
}
function WrapIcon({children, className=''}:  WrapIconProps) {
  return (
    <div className={`wrap-icon ${className}`}>
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default WrapIcon;