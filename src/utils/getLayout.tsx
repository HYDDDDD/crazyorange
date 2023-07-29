import type { IDefaultLayoutProps } from '@/layouts/Default'
import Layout from '@/layouts/Default'
import ErrorLayout from '@/layouts/Error'
import type { GetLayout } from '@/types/layout'

export const getDefaultLayout: GetLayout<IDefaultLayoutProps> = (page, props) => {
  //GetLayout <T = type of children content (type inside layouts folder)>
  return <Layout {...props}>{page}</Layout> //this return a react component for the layout.
}

export const getErrorLayout: GetLayout = (page) => {
  return <ErrorLayout>{page}</ErrorLayout>
}
