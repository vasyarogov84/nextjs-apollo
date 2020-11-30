const PortfolioDetail = ({ id }) => {
  return <h1>Detail page for {id}</h1>;
};

PortfolioDetail.getInitialProps = async ({ query }) => {
  return {
    id: query.id,
  };
};

export default PortfolioDetail;
