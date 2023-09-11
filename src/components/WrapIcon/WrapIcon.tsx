import './WrapIcon.scss';
import { ChildrenElement } from 'models/common';

interface WrapIconProps {
  children: ChildrenElement
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