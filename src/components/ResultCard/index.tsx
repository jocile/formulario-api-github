import ResultItem from 'components/ResultItem';

import './styles.css';

type Props = {
   avatar_url: string;
   url: string;
   followers: string;
   location: string;
   name: string;
};

const ResultCard = ({ avatar_url, url, followers, location, name }: Props) => {
   return (
      <div className="card-container">
         <div className="card-image">
            <img src={avatar_url} alt="Foto do perfil" />
         </div>
         <div className="card-content">
            <h6>Informações</h6>
            <ResultItem title="Perfil:" description={url} classText="color-url" />
            <ResultItem title="Seguidores:" description={followers} />
            <ResultItem title="Localidade:" description={location} />
            <ResultItem title="Nome:" description={name} />
         </div>
      </div>
   );
};

export default ResultCard;