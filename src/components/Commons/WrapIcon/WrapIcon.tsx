import { ReactElement } from 'react';
import './WrapIcon.scss';

interface WrapIconProps {
  children: ReactElement
}
function WrapIcon({children}:  WrapIconProps) {
  return (
    <div className='wrap-icon'>
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default WrapIcon;