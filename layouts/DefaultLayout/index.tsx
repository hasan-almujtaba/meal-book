import Navbar from 'components/Navbar'
import { DefaultLayout } from 'types/layout'

const DefaultLayout = ({ children }: DefaultLayout) => {
  return (
    <div className="container">
      <Navbar />
      {children}
    </div>
  )
}

export default DefaultLayout
