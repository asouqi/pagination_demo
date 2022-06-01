/*!
 * © 2020 Atypon Systems LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import styled, { css } from 'styled-components'

export type ContainerProps = {
  alignSelf?: string
  backgroundColor?: string
  border?: string
  borderRadius?: string
  color?: string
  flex?: string
  height?: string
  margin?: string
  padding?: string
  maxWidth?: string
  textAlign?: string
  width?: string
}
export const customScrollbar = css`
  ::-webkit-scrollbar {
    background-color: ${(props) => props.theme.colors.background.primary};
    height: ${(props) => props.theme.grid.unit * 2}px;
    width: ${(props) => props.theme.grid.unit * 2}px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.background.primary};
  }
  ::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: ${(props) => props.theme.grid.unit * 4}px;
    border: ${(props) => props.theme.grid.unit}px; solid ${(props) =>
  props.theme.colors.background.primary};
  }
`
const commonStyles = css<ContainerProps>`
  box-sizing: border-box;
  ${(props) =>
    props.backgroundColor && 'background-color:' + props.backgroundColor};
  ${(props) => props.border && 'border:' + props.border};
  ${(props) => props.borderRadius && 'border-radius:' + props.borderRadius};
  ${(props) => props.color && 'color:' + props.color};
  ${(props) => props.height && 'height:' + props.height};
  ${(props) => props.margin && 'margin:' + props.margin};
  ${(props) => props.maxWidth && 'max-width:' + props.maxWidth};
  ${(props) => props.padding && 'padding:' + props.padding};
  ${(props) => props.textAlign && 'text-align:' + props.textAlign};
  ${(props) => props.width && 'width:' + props.width};

  ${(props) => props.alignSelf && 'align-self:' + props.alignSelf};
  ${(props) => props.flex && 'flex: ' + props.flex};
`
export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.theme.colors.background.primary};
  ${commonStyles}
`

export const BorderedContainer = styled.div<ContainerProps & {
  smallPadding?: boolean
}>`
  border: 1px solid ${(props) => props.theme.colors.border.tertiary};
  border-radius: ${(props) => props.theme.grid.radius.default};
  padding: ${(props) =>
    props.smallPadding
      ? props.theme.grid.unit * 2 + 'px ' + props.theme.grid.unit * 4 + 'px'
      : props.theme.grid.unit * 4 + 'px ' + props.theme.grid.unit * 6 + 'px'};
  ${commonStyles}
`

export type FlexProps = ContainerProps & {
  alignItems?: string
  flexDirection?: string
  flexWrap?: string
  justifyContent?: string
}
const commonFlexStyles = css<FlexProps>`
  align-items: ${(props) => props.alignItems || 'center'};
  ${(props) => props.flexWrap && 'flex-wrap: ' + props.flexWrap};
  ${(props) =>
    props.justifyContent && 'justify-content: ' + props.justifyContent};
  ${(props) => props.flexDirection && 'flex-direction: ' + props.flexDirection};
  ${commonStyles}
`

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${commonFlexStyles}
`
export const InlineFlex = styled.div<FlexProps>`
  display: inline-flex;
  ${commonFlexStyles}
`

export type GridProps = ContainerProps & {
  alignItems?: string
  gridGap?: string
  templateColumns?: string
  templateRows?: string
}
const commonGridStyles = css<GridProps>`
  align-items: ${(props) => props.alignItems || 'stretch'};
  ${(props) => props.gridGap && 'grid-gap: ' + props.gridGap};
  ${(props) =>
    props.templateColumns && 'grid-template-columns: ' + props.templateColumns};
  ${(props) =>
    props.templateRows && 'grid-template-rows: ' + props.templateRows};
  ${commonStyles}
`
export const Grid = styled.div<GridProps>`
  display: grid;
  ${commonGridStyles}
`
export const InlineGrid = styled.div<GridProps>`
  display: inline-grid;
  ${commonGridStyles}
`

export const Main = styled(Flex).attrs(() => ({
  alignItems: 'flex-start',
  as: 'main',
  height: '100vh',
  width: '100vw',
}))<FlexProps>`
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  ${customScrollbar}
`

export const Sidebar = styled(Flex).attrs(() => ({
  alignItems: 'flex-start',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
}))<FlexProps>`
  background-color: ${(props) => props.theme.colors.background.tertiary};
  max-width: ${(props) => props.theme.grid.unit * 14}px;

  > div {
    width: 100%;
  }
`

export const TopNav = styled(Flex).attrs((props) => ({
  justifyContent: 'space-between',
  as: 'nav',
  flex: '0',
  height: '100%',
  padding: props.theme.grid.unit * 3 + 'px ' + props.theme.grid.unit * 8 + 'px',
  width: '100%',
}))<FlexProps>`
  border-bottom: 1px solid ${(props) => props.theme.colors.border.tertiary};
  max-height: ${(props) => props.theme.grid.unit * 16}px;
  z-index: 1;
`

export const InspectorWrapper = styled(Container)<{
  isOpen: boolean
}>`
  position: relative;
  display: block;
  height: 100%;
  border-left: 1px solid ${(props) => props.theme.colors.border.tertiary};
  flex: 0 0 ${(props) => (props.isOpen ? props.theme.grid.unit * 100 : 0)}px;
  overflow: auto;
  max-height: calc(100vh - ${(props) => props.theme.grid.unit * 16}px);
  ${customScrollbar}
`

export const PageWrapper = styled(Container).attrs(() => ({
  height: '100%',
  width: '100%',
}))<ContainerProps>`
  overflow: auto;
  z-index: 0;
  ${customScrollbar}
`

export const ArticlesWrapper = styled(Container)`
  padding: ${(props) => props.theme.grid.unit * 6}px;
`

export const Wrapper = styled(Grid).attrs(() => ({
  alignItems: 'flex-start',
  height: '100%',
  width: '100%',
}))<GridProps>``

export const FlexWrapper = styled(Flex).attrs(() => ({
  alignItems: 'flex-start',
  flex: '1 1 0%',
  height: '100%',
  width: '100%',
}))<FlexProps>``
