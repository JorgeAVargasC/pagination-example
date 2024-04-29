import { Resolver, useForm } from 'react-hook-form'
import { IFormValues, schema } from '../model'
import { useSearchParams } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'

export const useFiltersForm = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const params = new URLSearchParams(searchParams)

  const defaultValues: IFormValues = {
    title: params.get('title') || '',
    description: params.get('description') || ''
  }

  const methods = useForm<IFormValues>({
    defaultValues,
    resolver: yupResolver(schema) as Resolver<IFormValues>
  })

  const handleChange = methods.handleSubmit((data) => {
    data.title ? params.set('title', data.title) : params.delete('title')
    data.description
      ? params.set('description', data.description)
      : params.delete('description')

    setSearchParams(params)
  })

  const { description, title } = methods.watch()

  useEffect(() => {
    handleChange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [description, title])

  return {
    methods
  }
}
