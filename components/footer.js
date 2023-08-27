import { Box, Link, Button, useColorModeValue } from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Langdon Lin. All Rights Reserved.
      <Link
        href="https://github.com/craftzdog/craftzdog-homepage"
        target="_blank"
      >
        <Button
          variant="ghost"
          colorScheme={useColorModeValue('purple', 'orange')}
          leftIcon={<IoLogoGithub />}
        >
          Source
        </Button>
      </Link>
    </Box>
  )
}

export default Footer
