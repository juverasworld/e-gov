import { FooterForms } from "@/components/templates";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <main className={`bg-[#F3F3F3]`}>
      <header className={`text-white font-cabinet bg-[#073131] py-4 flex justify-between items-center px-7`}>
        <h2 className={`font-bold text-xl text-white`}>enugustate.gov.ng</h2>

        <div>
          <img src="" alt="" />
        </div>
      </header>

      {children}

      <FooterForms />
    </main>
  )
}

export default Layout;