import './TitleBlock.scss';

interface TitleBlockProps {
  title?: string
}

function TitleBlock({title= ''}: TitleBlockProps) {
  return (
    <div className="title-block">
      <h4 className='title'>{title}</h4>
      <div className="break-line"></div>
    </div>
  )
}

export default TitleBlock;