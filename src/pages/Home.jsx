// import Menu from './Menu'
import { useGetMenuQuery } from "../app/services/jsonServerApi";

const Home = () => {

  const {data, isLoading,error} = useGetMenuQuery();
  
  return (
    <main>
      {
        error ? (<p>Error Occur!</p>):
        isLoading ? (<p>Loading...</p>):
        data ? (<section>
        <p>Home Section</p>
        {/* <Menu menu={data}/> */}
        </section>) : null
      }
    </main>
  )
}

export default Home