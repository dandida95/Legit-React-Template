import React from "react"
import styled from "styled-components"

const DemoPara = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.typography.text};
  text-align: center;
`
export default DemoPara
