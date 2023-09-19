import TitleBlock from 'components/Commons/CustomCard/TitleBlock/TitleBlock';
import './CustomCard.scss';
import React, { ReactElement } from "react";
import { ChildrenElement } from 'models/common';

interface CustomCardProps {
  children: ReactElement | string | ChildrenElement,
  title?: string
}

function CustomCard({children, title}: CustomCardProps) {
  return (
    <div className="rounded custom-card">
      {title ? <TitleBlock title={title}/> : <></>}
      <div className="custom-card-body">
        {children}
      </div>
    </div>
  )
}

export default CustomCard;