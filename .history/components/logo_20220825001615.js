/*
 * @Author: Langdon Lin langdon.lin@outlook.com
 * @Date: 2022-08-25 00:15:16
 * @LastEditors: Langdon Lin langdon.lin@outlook.com
 * @LastEditTime: 2022-08-25 00:16:15
 * @FilePath: \langdon.one-homepage\components\logo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Langdon Lin
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
