import Card from "../../components/Card/Card"
import Carrousel1 from "../../components/Carrousel/CarrouselHome";
import useFetchProducts from "../../hooks/Products/useFetchProducts"
import Layout from "../../layouts/Layout"

function Home() {

  const items = useFetchProducts();

  return (
    <>
      <Layout>
        <Carrousel1 />
        <h1 className="mt-6 text-4xl font-medium">Nuestros Diseños</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
          {
            items?.map(item => (
              <Card key={item.id} data={item}/>
            ))
          }
        </div>  
      </Layout>
    </>
  )
}

export default Home