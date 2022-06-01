/*!
 * © 2022 Atypon Systems LLC
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
import HorizontalEllipsis from './HorizontalEllipsis'
import React, { useCallback, useMemo, useState } from 'react'
import styled, { css } from 'styled-components'

import { Container, Flex, Text, IconButton } from './common'
import ArrowLeft from './arrow-left'

const getPages = (numberOfPages: number, offset: number) => {
  const numberOfPills = 4

  const range = (start: number, length: number) =>
    Array.from({ length }, (_, index) => start + index)

  const rrr = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, index) => start + index)

  // case 1
  if (numberOfPills >= numberOfPages - 1) {
    return Array.from({ length: numberOfPages }, (_, index) => 1 + index)
  }

  const leftSiblingIndex = Math.max(offset - 1, 1)
  const rightSiblingIndex = Math.min(offset + 1, numberOfPages)
  console.log(leftSiblingIndex, rightSiblingIndex)
  const shouldShowLeftSibling = leftSiblingIndex > 2
  const shouldShowRightSibling = rightSiblingIndex < numberOfPages - 1

  // case 2
  if (shouldShowLeftSibling && !shouldShowRightSibling) {
    return [
      1,
      'DOTS',
      // ...range(
      //   numberOfPages - (offset === numberOfPages ? 1 : 2),
      //   offset === numberOfPages ? 1 : offset === numberOfPages - 1 ? 2 : 3
      // ),
      ...rrr(leftSiblingIndex, numberOfPages - 1),
      numberOfPages,
    ]
  }

  // case 3
  if (shouldShowRightSibling && !shouldShowLeftSibling) {
    return [
      1,
      // ...range(2, offset === 1 ? 1 : offset === 2 ? 2 : 3),
      ...rrr(2, offset + 1),
      'DOTS',
      numberOfPages,
    ]
  }

  // case 4
  if (shouldShowLeftSibling && shouldShowRightSibling) {
    return [1, 'DOTS', ...range(leftSiblingIndex, 3), 'DOTS', numberOfPages]
  }
}

const TablePagination: React.FC<{
  totalNumberOfSubmission: number
  limit: number
}> = ({ totalNumberOfSubmission, limit }) => {
  const [offset, setOffset] = useState(1)

  const onPageClick = useCallback((e: any) => {
    if (e.currentTarget.value && e.currentTarget.value !== 'DOTS') {
      setOffset(parseInt(e.currentTarget.value))
    }
  }, [])

  const { pages, numberOfPages } = useMemo(() => {
    const numberOfPages = Math.ceil(totalNumberOfSubmission / limit)
    return {
      pages: getPages(numberOfPages, offset) || [],
      numberOfPages,
    }
  }, [limit, offset, totalNumberOfSubmission])

  console.log(pages)

  const onLeftArrowClick = useCallback(() => setOffset(offset - 1), [offset])
  const onRightArrowClick = useCallback(() => setOffset(offset + 1), [offset])

  if (totalNumberOfSubmission <= limit) {
    return null
  }

  return (
    <Wrapper alignItems="center">
      <Container>
        <ArrowButton disabled={offset === 1} onClick={onLeftArrowClick}>
          <ArrowLeft />
        </ArrowButton>
        {pages.map(
          (pageNumber, index) =>
            (pageNumber !== 'DOTS' && (
              <PillButton
                key={index}
                value={pageNumber}
                onClick={onPageClick}
                active={pageNumber === offset}
              >
                {pageNumber}
              </PillButton>
            )) || (
              <DotsButton key={index} disabled>
                <HorizontalEllipsis />
              </DotsButton>
            )
        )}
        <RightArrowButton
          disabled={offset === numberOfPages}
          onClick={onRightArrowClick}
        >
          <ArrowLeft />
        </RightArrowButton>
      </Container>
      <Divider />
      <Text className="grey mediumSize">
        {totalNumberOfSubmission} Articles in total
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  padding-top: 16px;
  border-top: 1px solid #E2E2E2;
`

const Divider = styled(Flex)`
  border: 1px solid #f2f2f2;
  height: 19px;
  margin: 0 20px;
`

const ArrowButton = styled(IconButton)`
  background: white !important;
  border: none !important;
  path {
    fill: ${(props) =>
      (props.disabled && "#E2E2E2") ||
      "#6E6E6E"} !important;
  }
`

const RightArrowButton = styled(ArrowButton)`
  svg {
    transform: rotate(180deg);
    align-self: center;
  }
`

const pillStyle = css`
  background: #f2fbfc !important;
  border-radius: 32px;
`

const activePillStyle = css`
  border: 1px solid #bce7f6 !important;
`

const PillButton = styled(IconButton)<{ active: boolean }>`
  color: #353535 !important;
  margin: 0 2px;

  :hover {
    border: 1px solid #e2e2e2 !important;
    ${pillStyle}
  }

  :active {
    ${pillStyle}
    ${activePillStyle}
  }

  ${(props) => props.active && [pillStyle, activePillStyle]}
`

const DotsButton = styled(ArrowButton)`
  g {
    fill: ${(props) => props.theme.custom.colors.background.muted};
  }
`

export default TablePagination
