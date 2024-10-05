import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error, reFetch } = useFetch("/hotels/countByType");
  
  const titles = [
   "Hotels",
   "Apartaments",
   "resort",
   "Villa",
   "Cabin"
  ];
  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
  ];


  if (loading) {
    return <div className="pList">Carregando, por favor aguarde...</div>;
  }

  if (error) {
    return <div className="pList">Erro ao carregar propriedades.</div>;
  }

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div className="pList">Nenhuma propriedade disponível.</div>;
  }

  return (
    <div className="pList">
      {data.map((property, i) => (
        <div className="pListItem" key={property.type || i}>
          <img
            src={images[i] || images[0]} // Fallback to first image if index exceeds
            alt={property.type || "Property Image"}
            className="pListImg"
          />
          <div className="pListTitles">
            <h1>{titles[i]}</h1>
            <h2>
     
             {data[i]?.count} {titles[i].toLocaleLowerCase()}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
