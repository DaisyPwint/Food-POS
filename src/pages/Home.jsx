import Category from '../components/Category'
import Menu from '../components/Menu'
import { useGetMenuQuery } from "../app/services/jsonServerApi";

const Home = () => {

  const {data, isLoading,error} = useGetMenuQuery();
  
  return (
    <main>
      {
        error ? (<p>Error Occur!</p>):
        isLoading ? (<p>Loading...</p>):
        data ? (<>
          <Category categories={data}/>
          <Menu menu={data}/>
        </>) : null
      }
    </main>
  )
}

export default Home