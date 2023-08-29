import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import {
  IoPaperPlane,
  IoBookmark,
  IoNewspaper,
  IoLogoGithub
} from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false} legacyBehavior>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem
            target="_blank"
            href="https://blog.langdon.one"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoBookmark />
            Blog
          </LinkItem>

          <LinkItem
            target="_blank"
            href="https://channel.langdon.one"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoPaperPlane />
            Channel
          </LinkItem>

          <LinkItem
            target="_blank"
            href="https://superlangdon.zhubai.love"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoNewspaper />
            Newsletter
          </LinkItem>

          <LinkItem
            target="_blank"
            href="https://github.com/SuperLangdon"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Github
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink
                  href="https://blog.langdon.one"
                  passHref
                  legacyBehavior
                >
                  <MenuItem as={Link}>Blog</MenuItem>
                </NextLink>

                <NextLink
                  href="https://channel.langdon.one"
                  passHref
                  legacyBehavior
                >
                  <MenuItem as={Link}>Channel</MenuItem>
                </NextLink>

                <NextLink
                  href="https://superlangdon.zhubai.love"
                  passHref
                  legacyBehavior
                >
                  <MenuItem as={Link}>Newsletter</MenuItem>
                </NextLink>

                <NextLink
                  href="https://github.com/SuperLangdon"
                  passHref
                  legacyBehavior
                >
                  <MenuItem as={Link}>Github</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
