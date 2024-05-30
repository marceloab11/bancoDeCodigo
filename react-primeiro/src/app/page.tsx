"use client"

import { Button } from "./components/button"
import { Container } from "./components/container"
import { ThemaToggle } from "./components/toggle-tema"
import { ThemeProvider } from "./contexts/theme-contexts"

function Page() {

  return (
    <ThemeProvider>
       <div>
      <Container>
        <header className="py-5">
        <h1 className="text-3xl">Titulo da pagina</h1>
        </header>
        <section>
            <p className="my-5">Conteudo da pagina</p>
            <Button label="Clique aqui" onClick={() => { }} />
        </section>
        <ThemaToggle/>
      </Container>
    </div>
    </ThemeProvider>
  )
}

export default Page