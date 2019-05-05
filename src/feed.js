import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { fallbackTo, initArr } from '@exah/utils'
import { DEFAULT_GRID } from './constants'
import { useMatchMediaContext } from './match-media'
import { FlexGrid } from './flex-grid'
import { Box } from './box'

const groupChildren = (items = [], length = 3) =>
  items.reduce((target, value, index) => {
    const key = Math.floor(index % length)

    if (target[key]) {
      target[key].push(value)
    }

    return target
  }, initArr(length, () => []))

function useGroupChildren (size, children) {
  return useMemo(() => {
    const childrenArr = React.Children.toArray(children)

    return size > 1
      ? groupChildren(childrenArr, size)
      : childrenArr
  }, [ size, children ])
}

function Feed ({ children, grid, column, item: itemProps, ...rest }) {
  const matchedMedia = useMatchMediaContext()

  const columnForMedia = fallbackTo(
    column[matchedMedia.key],
    column.all,
    column,
    grid
  )

  const groupSize = grid / columnForMedia
  const childrenGroups = useGroupChildren(groupSize, children)

  return (
    <FlexGrid spaceTarget={Feed.Item} {...rest} columns={grid}>
      {childrenGroups.map((child, index) => (
        <FlexGrid.Item
          key={index}
          {...itemProps}
          column={columnForMedia}
        >
          {child}
        </FlexGrid.Item>
      ))}
    </FlexGrid>
  )
}

Feed.propTypes = {
  grid: PropTypes.number.isRequired,
  column: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.objectOf(PropTypes.number)
  ]).isRequired
}

Feed.defaultProps = {
  grid: DEFAULT_GRID,
  column: DEFAULT_GRID
}

Feed.Item = styled(Box)()

export {
  Feed
}
