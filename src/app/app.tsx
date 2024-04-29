import { Filters, Pagination } from './components'

function App() {
  return (
    <>
      <div className='max-w-3xl m-auto p-12'>
        <div className='grid gap-5'>
          <h1 className='text-5xl'>Pagination Example</h1>

          <Filters />
          <Pagination />
        </div>
      </div>
    </>
  )
}

export default App
