import React from 'react'
import ContentContainer from '../../sections/ApplicationSteps/Internals/ContentContainer'
import CategoryHeader from '../RequestApplication/CategoryHeader'
import { laptopConstants } from './Internals/constants'
const { TITLE, SUPPORT_TYPE } = laptopConstants

export const LaptopStipend = () => {
  return (
    <ContentContainer>
      <section>
        <CategoryHeader header={TITLE} category={TITLE} support={SUPPORT_TYPE} />
      </section>
    </ContentContainer>
  )
}
