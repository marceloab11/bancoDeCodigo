"use client"
import { useState } from "react";
import { usePosts } from "./utils/queries";

const Page = () => {
    const limit = 3
    const [page, setPage] = useState(0)

    const posts = usePosts(limit, page *limit)

      
    function handleNext() {
      setPage(page + 1);
    }

    function handleBack() {
      setPage(page === 0? 0 : page - 1);
    }

  return(
    <div className="w-full h-screen bg-black text-white">
        <h1>Ta funcionando</h1>

        <div className="border border-white p-3 m-3">
          <div>Itens por página: {limit}</div>
          <div>Itens por página: {page}</div>
          <button onClick={handleBack} className="border mx-2 px-2">Página Anterios</button>
          <button onClick={handleNext} className="border mx-2 px-2">Página seguinte</button>
        </div>
        {posts.isLoading && 'Carregando...'}
        {!posts.isLoading && posts.isFetching && 'Recarregando a pagina...'}
        <ul>
          {posts.data?.map(item => 
            <li key={item.id}>{item.title}</li>
          )}
        </ul>
    </div>
  )
}

export default Page;