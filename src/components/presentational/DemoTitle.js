import React from "react"
import styled from "styled-components"

const DemoTitle = styled.h1`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 44px;
  font-family: ${({ theme }) => theme.typography.heading};
  font-weight: 300;
  text-shadow: 0 16px 24px rgba(0, 0, 0, 0.2);
`
export default DemoTitle
