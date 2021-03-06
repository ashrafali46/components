import PropTypes from 'prop-types'
import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import {COMMON, SystemCommonProps, SystemTypographyProps, TYPOGRAPHY} from './constants'
import useMouseIntent from './hooks/useMouseIntent'
import theme from './theme'
import {ComponentProps} from './utils/types'

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body { margin: 0; }
  table { border-collapse: collapse; }
  body.intent-mouse {
    [role="button"]:focus,
    [role="tabpanel"][tabindex="0"]:focus,
    button:focus,
    summary:focus,
    a:focus {
      outline: none;
      box-shadow: none;
    }

    [tabindex="0"]:focus,
    details-dialog:focus {
      outline: none;
    }
  }
`

const Base = styled.div<SystemTypographyProps & SystemCommonProps>`
  ${TYPOGRAPHY};
  ${COMMON};
`

export type BaseStylesProps = ComponentProps<typeof Base>

function BaseStyles(props: BaseStylesProps) {
  const {children, ...rest} = props
  useMouseIntent()
  return (
    <Base {...rest}>
      <GlobalStyle />
      {children}
    </Base>
  )
}

BaseStyles.defaultProps = {
  color: 'gray.9',
  fontFamily: 'normal',
  lineHeight: 'default',
  theme
}

BaseStyles.propTypes = {
  ...TYPOGRAPHY.propTypes,
  ...COMMON.propTypes,
  theme: PropTypes.object
}

export default BaseStyles
