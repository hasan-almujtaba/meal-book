import Navbar from 'components/Navbar'
import { DefaultLayout } from 'types/layout'

const DefaultLayout = ({ children }: DefaultLayout) => {
  return (
    <div className="dark:bg-zinc-800 dark:text-white">
      <div className="container">
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default DefaultLayout
