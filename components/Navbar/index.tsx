import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="py-4 flex justify-between">
      <Link href="/">
        <a className="text-lg lg:text-2xl font-bold">Meal Book</a>
      </Link>
    </div>
  )
}

export default Navbar
