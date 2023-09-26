// import Menu from './Menu'
import { useGetMenuQuery } from "../app/services/api";

const Home = () => {

  const {data, isLoading,error} = useGetMenuQuery();
  
  return (
    <main>
      {
        error ? (<p>Error Occur!</p>):
        isLoading ? (<p>Loading...</p>):
        data ? (<section>
        <p>Home Section</p>
        </section>) : null
      }
    </main>
  )
}

export default Home