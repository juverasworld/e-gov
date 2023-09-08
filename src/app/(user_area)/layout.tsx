import { Footer } from "@/components/templates"

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <main className={`scrollbar-none max-h-[100vh] overflow-y-auto`}>
      <section className={`h-[100vh] overflow-hidden flex bg-[#F3F3F3]`}>

        <section className={`flex-1 max-h-[100vh] max-w-[78vw]`}>
          {children}
        </section>
      </section>
      <Footer />
    </main>
  )
}

export default Layout;
