import { Input } from '@nextui-org/react'
import { useFiltersForm } from './hooks'

export const Filters = () => {
  const { methods } = useFiltersForm()

  return (
    <div className='grid gap-3'>
      <Input
        placeholder='Type something'
        label='Title'
        {...methods.register('title')}
      />

      <Input
        placeholder='Type something'
        label='Description'
        {...methods.register('description')}
      />
    </div>
  )
}
