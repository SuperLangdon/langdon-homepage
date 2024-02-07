import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Langdon Lin. All Rights Reserved.{' '}
      <Link
        href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
        isExternal
      >
        CC BY-NC-ND
      </Link>
    </Box>
  )
}

export default Footer
