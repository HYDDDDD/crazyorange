import { NextGetLayout } from '@/types/layout'
import { getDefaultLayout } from '@/utils'
import React from 'react'

type StylesheetpageProps = NextGetLayout

const Stylesheetpage: StylesheetpageProps = () => {
  return <div>Stylesheetpage</div>
}

Stylesheetpage.getLayout = getDefaultLayout

export default Stylesheetpage
