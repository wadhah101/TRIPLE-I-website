import * as React from 'react'
import * as Template from '../template/template'
import { withAnalytics } from 'use-analytics'

const BasePage: React.FunctionComponent<{
  className?: string
  analytics: { page: () => void }
}> = ({ children, className, analytics: { page } }) => {
  React.useEffect(() => {
    page()
  }, [])
  return <Template.Page className={className}> {children} </Template.Page>
}

export default withAnalytics(BasePage)
