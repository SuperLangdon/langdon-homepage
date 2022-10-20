import Link from 'next/link'
import { Text, Flex, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled(Text)`
  font-weight: bold;
  font-size: 24;
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  padding: 10px;

  .logo {
    transition: 200ms ease;
  }

	&:hover .hash {
		transform: translateX(-15px) rotate(-90deg) scale(1.2);
	}

  &:hover .left-bracket {
    transform: scale(1.2) translateX(-4px);
  }

  &:hover .right-bracket {
    transform: scale(1.2) translateX(4px);
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
					<Flex direction="row" gap={1}>
						<Text className="logo hash" color={useColorModeValue('purple.600' ,'orange.200')}>&#36;</Text>
						<Text className="logo left-bracket" color={useColorModeValue('purple.500' ,'orange.200')}>&#123;</Text>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
							fontFamily='Share Tech'
            fontWeight="bold"
          >
							Langdon
          </Text>
						<Text className="logo right-bracket" color={useColorModeValue('purple.500' ,'orange.200')}>&#125;</Text>
					</Flex>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
