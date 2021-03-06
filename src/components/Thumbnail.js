import PropTypes from 'prop-types'
import React from 'react'
import { css, StyleSheet } from 'aphrodite/no-important'

import defaults from '../theme'
import { deepMerge } from '../utils/util'


function Thumbnail ({ index, src, thumbnail, active, onClick, theme, CustomThumbComponent, img}) {
  const url = thumbnail || src
  const classes = StyleSheet.create(deepMerge(defaultStyles, theme))

  if (CustomThumbComponent != null) {
    return (
      <CustomThumbComponent
        className={css(classes.thumbnail, active && classes.thumbnail__active)}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          onClick(index)
        }}
        img={img}
        src={url}
      />
    )

  } else {
    return (
      <div
        className={css(classes.thumbnail, active && classes.thumbnail__active)}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          onClick(index)
        }}
        style={{ backgroundImage: `url("${url}")` }}
      />
    )
  }
  
}

Thumbnail.propTypes = {
  theme: PropTypes.object,
  active: PropTypes.bool,
  index: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string,
  thumbnail: PropTypes.string,
}

const defaultStyles = {
  thumbnail: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: 2,
    boxShadow: 'inset 0 0 0 1px hsla(0, 0%, 100%, .2)',
    cursor: 'pointer',
    display: 'inline-block',
    height: defaults.thumbnail.size,
    margin: defaults.thumbnail.gutter,
    overflow: 'hidden',
    width: defaults.thumbnail.size,
  },
  thumbnail__active: {
    boxShadow:`inset 0 0 0 2px ${defaults.thumbnail.activeBorderColor}`,
  }
}

export default Thumbnail
