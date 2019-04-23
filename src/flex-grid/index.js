import React from 'react'
import styled from '@emotion/styled'
import { Box } from '../box'
import { Flex } from '../flex'
import { createFlexGridStyle, flexGridItemStyle } from './styles'

const flexGridStyle = createFlexGridStyle({
  rowSelector: () => `${StyledFlexGrid} + &`,
  childSelector: (props) => props.spaceTarget
    ? `& > ${StyledFlexGridItem} > ${props.spaceTarget}`
    : `& > ${StyledFlexGridItem}`
})

const StyledFlexGrid = styled(Flex)(
  flexGridStyle
)

const FlexGrid = (props) => (
  <StyledFlexGrid
    flexWrap='wrap'
    {...props}
  />
)

FlexGrid.propTypes = {
  ...Flex.propTypes,
  ...flexGridStyle.propTypes
}

const StyledFlexGridItem = styled(Box)(
  flexGridItemStyle
)

const FlexGridItem = (props) => (
  <StyledFlexGridItem
    flex='1 1 auto'
    minHeight={1}
    minWidth={0}
    {...props}
  />
)

FlexGrid.Item = FlexGridItem

FlexGrid.Item.propTypes = {
  ...Box.propTypes,
  ...flexGridItemStyle.propTypes
}

export {
  FlexGrid,
  FlexGridItem
}
