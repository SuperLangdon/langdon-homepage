/*
 * @Author: Langdon Lin langdon.lin@outlook.com
 * @Date: 2022-10-20 19:35:37
 * @LastEditors: Langdon Lin langdon.lin@outlook.com
 * @LastEditTime: 2022-10-20 19:39:57
 * @FilePath: \langdon.one-homepage\components\logo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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

	&:hover .dollar {
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
						<Text className="logo dollar" color={useColorModeValue('purple.600' ,'orange.200')}>&#36;</Text>
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
