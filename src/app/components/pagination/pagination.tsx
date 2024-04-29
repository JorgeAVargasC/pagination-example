import { Button } from '@nextui-org/react'
import { useSearchParams } from 'react-router-dom'

export const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = +(searchParams.get('page') || '1')
  const totalPages = 5

  const handlePrevious = () => {
    if (currentPage > 1) {
      const params = new URLSearchParams(searchParams)
      params.set('page', (currentPage - 1).toString())
      setSearchParams(params)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      const params = new URLSearchParams(searchParams)
      params.set('page', (currentPage + 1).toString())
      setSearchParams(params)
    }
  }

  return (
    <div className='flex gap-3'>
      <Button
        variant='bordered'
        onClick={handlePrevious}
        isDisabled={currentPage === 1}
        disabled={searchParams.get('page') === '1'}
      >
        Previous
      </Button>
      <Button
        variant='bordered'
        disabled
        isIconOnly
      >
        {currentPage}
      </Button>
      <Button
        variant='bordered'
        onClick={handleNext}
        isDisabled={currentPage === totalPages}
        disabled={searchParams.get('page') === totalPages.toString()}
      >
        Next
      </Button>
    </div>
  )
}
