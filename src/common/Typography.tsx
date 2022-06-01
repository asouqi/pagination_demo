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

export type TextProps = {
  backgroundColor?: string
  color?: string
  margin?: string
  marginBottom?: string
  marginTop?: string
  marginLeft?: string
  marginRight?: string
  maxWidth?: string
}

const commonStyles = css<TextProps>`
  box-sizing: border-box;
  ${(props) =>
    props.backgroundColor && 'background-color: ' + props.backgroundColor + ';'}
  ${(props) => props.color && 'color: ' + props.color + ';'}
  margin: ${(props) => props.margin || 0};
  ${(props) =>
    props.marginBottom && 'margin-bottom: ' + props.marginBottom + ';'}
  ${(props) => props.marginTop && 'margin-top: ' + props.marginTop + ';'}
  ${(props) => props.marginLeft && 'margin-left: ' + props.marginLeft + ';'}
  ${(props) => props.marginRight && 'margin-right: ' + props.marginRight + ';'}
  ${(props) => props.maxWidth && 'max-width: ' + props.maxWidth + ';'}

  &.ellipsis {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &.line-clamp {
    display: -webkit-box;
    max-width: 100%;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  &.line-clamp-3 {
    display: -webkit-box;
    max-width: 100%;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  strong,
  b,
  &.bold {
    font-weight: ${(props) => props.theme.font.weight.bold};
  }
  &.smallSize {
    font-size: ${(props) => props.theme.font.size.small};
  }
  &.normalSize {
    font-size: ${(props) => props.theme.font.size.normal};
  }
  &.mediumSize {
    font-size: ${(props) => props.theme.font.size.medium};
    line-height: ${(props) => props.theme.font.lineHeight.large};
  }
  &.largeSize {
    font-size: ${(props) => props.theme.font.size.large};
    line-height: ${(props) => props.theme.font.lineHeight.large};
  }
  &.normalWeight {
    font-weight: ${(props) => props.theme.font.weight.normal};
  }
  &.largeHeight {
    line-height: ${(props) => props.theme.font.lineHeight.large};
  }

  &.grey {
    color: ${(props) => props.theme.colors.text.secondary};
  }

  &.centered {
    text-align: center;
  }
`

export const PrimaryHeading = styled.h1<TextProps>`
  font: ${(props) => props.theme.font.weight.bold}
    ${(props) => props.theme.font.size.xlarge} / 1.25
    ${(props) => props.theme.font.family.sans};
  margin: 0 0 ${(props) => props.theme.grid.unit * 6}px;
  ${commonStyles}
`
export const SecondaryHeading = styled.h2<TextProps>`
  font: ${(props) => props.theme.font.weight.bold}
    ${(props) => props.theme.font.size.large} /
    ${(props) => props.theme.font.lineHeight.large}
    ${(props) => props.theme.font.family.sans};
  ${commonStyles}
`

export const SectionTitle = styled.h2<TextProps>`
  font: ${(props) => props.theme.font.weight.bold}
    ${(props) => props.theme.font.size.normal} /
    ${(props) => props.theme.font.lineHeight.large}
    ${(props) => props.theme.font.family.sans};
  ${commonStyles}
`

export const MediumHeading = styled.h2<TextProps>`
  font: ${(props) => props.theme.font.weight.normal}
    ${(props) => props.theme.font.size.medium} /
    ${(props) => props.theme.font.lineHeight.large}
    ${(props) => props.theme.font.family.sans};
  margin: 0;
  ${commonStyles}
`

export const LargeSectionTitle = styled(SectionTitle)`
  font-size: ${(props) => props.theme.font.size.large};
`

export const MediumSectionTitle = styled(SectionTitle)`
  font-size: ${(props) => props.theme.font.size.medium};
`

export const Text = styled.p<TextProps>`
  font: ${(props) => props.theme.font.weight.normal}
    ${(props) => props.theme.font.size.normal} /
    ${(props) => props.theme.font.lineHeight.normal}
    ${(props) => props.theme.font.family.sans};

  ${commonStyles}
`

export const Small = styled.small<TextProps>`
  font: ${(props) => props.theme.font.weight.normal}
    ${(props) => props.theme.font.size.small} /
    ${(props) => props.theme.font.lineHeight.small}
    ${(props) => props.theme.font.family.sans};

  ${commonStyles}
`

export const TinyBadgeText = styled(Small)`
  font-size: 10px;
  line-height: 12px;
  font-weight: ${(props) => props.theme.font.weight.xbold};
`

export const PlaceholderHeading = styled(MediumHeading)`
  width: ${(props) => props.theme.grid.unit * 21}px;
  height: ${(props) => props.theme.grid.unit * 12}px;
  text-align: center;
  color: ${(props) => props.theme.custom.colors.text.muted};
`
