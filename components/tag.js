import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

function Tag(props) {
  const backgroundColor = useColorModeValue('#825AD3', '#F9D390')
  const color = useColorModeValue('white', 'black')
  return (
    <Box
      as="span"
      bg={props.backgroundColor || backgroundColor}
      color={props.color || color}
      borderRadius="20px"
      p="5px 10px"
      m="5px"
      display="inline-block"
    >
      #{props.text}
    </Box>
  )
}

export default Tag
