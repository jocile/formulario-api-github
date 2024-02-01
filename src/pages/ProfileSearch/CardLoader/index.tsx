import ContentLoader from 'react-content-loader';

const CardLoader = () => (
   <div className="card-loader-container">
      <ContentLoader
         speed={2}
         width={700}
         height={700}
         viewBox="0 0 700 700"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
      >
         <rect x="10" y="30" rx="0" ry="0" width="90" height="90" />
         <rect x="110" y="35" rx="0" ry="0" width="80" height="10" />
         <rect x="110" y="50" rx="0" ry="0" width="160" height="10" />
         <rect x="110" y="65" rx="0" ry="0" width="160" height="10" />
         <rect x="110" y="80" rx="0" ry="0" width="160" height="10" />
         <rect x="110" y="95" rx="0" ry="0" width="160" height="10" />
      </ContentLoader>
   </div>
);

export default CardLoader;