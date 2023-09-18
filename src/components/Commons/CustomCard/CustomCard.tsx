import TitleBlock from 'components/Commons/CustomCard/TitleBlock/TitleBlock';
import './CustomCard.scss';
import React, { ReactElement } from "react";
import { ChildrenElement } from 'models/common';

interface CustomCardProps {
  children: ReactElement | string | ChildrenElement
}

function CustomCard({children}: CustomCardProps) {
  return (
    <div className="custom-card">
      <TitleBlock/>
      <div className="break-line"></div>
      {children}
    </div>
  )
}

export default CustomCard;