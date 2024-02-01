import './styles.css';

type Props = {
   title: string;
   description: string;
   classText?: string;
};

const ResultItem = ({ title, description, classText }: Props) => {
   return (
      <div className="card-info">
         <h3>{title}</h3>
         <p className={`line-break ${classText}`}>{description}</p>
      </div>
   );
};

export default ResultItem;