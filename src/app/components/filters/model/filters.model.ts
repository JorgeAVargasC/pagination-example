import * as yup from 'yup'

export interface IFormValues {
  title: string
  description: string
}

export const schema = yup.object().shape({
  title: yup.string().notRequired(),
  description: yup.string().notRequired()
})
