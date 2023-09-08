import { NavBar } from "@/components/molecules";
import { Footer } from "@/components/templates";

const Layout = ({children}:{children: React.ReactNode}): JSX.Element => {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout;