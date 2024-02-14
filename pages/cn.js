import NextLink from 'next/link'

import {
  Divider,
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Text,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { UseSection, UseTitle, UseText } from '../components/use'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoSteam,
  IoLogoGithub,
  IoLogoMastodon,
  IoSave,
  IoTerminal,
  IoBookmark,
  IoPaperPlane
} from 'react-icons/io5'
import {
  SiXiaomi,
  SiWindows11,
  SiUbuntu,
  SiPleroma,
  SiDebian,
  SiMacos,
  SiIos,
  SiV2Ex,
  SiLineageos,
  SiWindows10,
  SiDouban
} from 'react-icons/si'
import {
  MdMouse,
  MdKeyboard,
  MdHeadphones,
  MdMic,
  MdMonitor,
  MdLaptop,
  MdDns,
  MdPhoneAndroid,
  MdTabletMac,
  MdCamera
} from 'react-icons/md'
import { RiStockFill, RiOpenSourceFill, RiSparklingFill } from 'react-icons/ri'
import { FaDonate } from 'react-icons/fa'
import { PiButterflyFill } from 'react-icons/pi'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { IconContext } from 'react-icons'
import Image from 'next/image'
import styled from '@emotion/styled'
import Tag from '../components/tag'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Quote = styled(Text)`
  font-size: 16px;
  font-family: 'Noto Sans', 'Noto Sans Simplified Chinese';
  font-weight: bold;
  text-align: left;
  margin-top: 1.5em;
  font-style: italic;
`

const Home = () => (
  <Layout>
    <Container maxW="container.md">
      <Box
        borderRadius="lg"
        mb={6}
        mt={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        你好！我是澜璒，一位来自中国的业余开发者、个人投资者和独立作者。
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Langdon Lin
          </Heading>
          <p>&#91;&#712;læŋdən&#93; / aka &ldquo;澜璒&rdquo;</p>
          <p>业余开发者 | 个人投资者 | 独立作者</p>
          <Quote>&#10077;而浮生若梦，为欢几何&#65311;&#10078;</Quote>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderStyle="solid"
            borderWidth={4}
            borderColor={useColorModeValue('purple.300', 'orange.200')}
            w="150px"
            h="150px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/langdon.jpg"
              alt="Profile image"
              borderRadius="full"
              width="150"
              height="150"
            />
          </Box>
        </Box>
      </Box>

      <Divider
        my={6}
        borderColor={useColorModeValue('purple.300', 'orange.200')}
      />

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          关于我
        </Heading>
        <IconContext.Provider
          value={{
            style: {
              display: 'inline',
              fontSize: '1em',
              verticalAlign: 'baseline'
            }
          }}
        >
          <Paragraph>
            你好，我叫<strong>Langdon Lin</strong>
            ，但在互联网上，我更为人所熟知的名字是{''}
            <strong>&ldquo;澜璒&rdquo;</strong>
            。现居中国大陆，在一所大学里工作。 我是一位：
          </Paragraph>
          <Heading
            as="h4"
            variant="subsection-title"
            className="subsection-title"
          >
            <RiOpenSourceFill />
            <strong> 业余开发者</strong>
          </Heading>
          <Paragraph>
            我热衷于利用业余时间开发一些小型项目，比如按照自己的想法去规划和设计某些东西（就像这个主页），用代码去解决现实生活中的问题。我热爱编程，喜欢尝试新技术，喜欢构建自己的工具。我比较擅长JavaScript，现在正在学习Python。
          </Paragraph>
          <Paragraph>
            目前，我正在开发一个基于LLM（大型语言模型）的量化交易项目。
          </Paragraph>
          <Heading
            as="h4"
            variant="subsection-title"
            className="subsection-title"
          >
            <RiStockFill />
            <strong> 个人投资者</strong>
          </Heading>
          <Paragraph>
            自2015年以来，我积极投身于在股票和金融衍生品市场，投资主要集中在港股和美股。在2023年，我的总收益率达到了
            87.7%。另外，我已经通过了中国的证券业从业人员资格考试。
          </Paragraph>
          <Heading
            as="h4"
            variant="subsection-title"
            className="subsection-title"
          >
            <RiSparklingFill />
            <strong> 独立作者</strong>
          </Heading>
          <Paragraph>
            在闲暇之余，我以观察世界为乐，并将它们写成文章，这些内容都在我的
            <IoBookmark />
            <NextLink
              href="https://blog.langdon.one"
              passHref
              scroll={false}
              legacyBehavior
            >
              <Link>Blog</Link>
            </NextLink>
            中。我会写下自己实践和思考的过程与结果，或者我在生活、工作中所见所闻的内容；也有一些是我一时迸发出的灵感所成。此外，我偶尔也会为歌曲填词，或把一些外文内容翻译成中文。
          </Paragraph>
          <Paragraph>
            另外，您还可以关注我的 <IoPaperPlane />
            <NextLink
              href="https://sapphe1r0s.t.me"
              passHref
              scroll={false}
              legacyBehavior
            >
              <Link>Channel</Link>
            </NextLink>
            ，我在互联网上的看的与创作的内容都会在这里分享，订阅即可获取我的最新动态。
          </Paragraph>
          <Paragraph>
            不在线时，我喜欢阅读和写作，沉浸在我自己的“无限空间”之中。
          </Paragraph>
        </IconContext.Provider>
      </Section>

      <Box align="center" my={4}>
        <NextLink
          href="https://blog.langdon.one/archives.html"
          passHref
          scroll={false}
          legacyBehavior
        >
          <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            查看我的文章
          </Button>
        </NextLink>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          关于 &ldquo;而浮生若梦，为欢几何&#65311;&rdquo;
        </Heading>
        <Paragraph>
          这句诗出自唐代诗人李白，是我很喜欢的一句诗。李白借这句诗揭示了生命的瞬息万变与虚无缥缈，将其比作转瞬即逝的云烟，从而向世人传递出珍惜光阴、及时享受生活的深邃哲理。
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          我使用的
        </Heading>
        <UseSection>
          <IconContext.Provider
            value={{
              style: {
                display: 'inline',
                fontSize: '1em'
              }
            }}
          >
            <IoSave />
            <UseTitle> 系统环境</UseTitle>
            <UseText>
              <SiWindows10 /> Windows 10 LTSC [21H2]
            </UseText>
            <UseText>
              <SiWindows11 /> Windows 11 [23H2]
            </UseText>
            <UseText>
              <SiUbuntu /> Ubuntu 20.04.6 LTS (Focal Fossa)
            </UseText>
            <UseText>
              <SiDebian /> Debian 11.5 &quot;bullseye&quot;
            </UseText>
            <UseText>
              <SiMacos /> macOS Ventura [13.6.4]
            </UseText>
            <UseText>
              <SiIos /> iPad OS 17.3 (21D50)
            </UseText>
            <UseText>
              <SiLineageos /> LineageOS 20 (Android 13)
            </UseText>
            <UseText>
              <SiXiaomi /> 澎湃OS 1.0 (Android 14)
            </UseText>
          </IconContext.Provider>
        </UseSection>
        <UseSection>
          <IconContext.Provider value={{ style: { display: 'inline' } }}>
            <IoTerminal />
            <UseTitle> 科技产品</UseTitle>
            <UseText>
              <MdKeyboard /> 键盘 - Akko 3108 V2
            </UseText>
            <UseText>
              <MdMouse /> 鼠标 - 罗技 G304
            </UseText>
            <UseText>
              <MdHeadphones /> 耳机 - 漫步者 W860NB
            </UseText>
            <UseText>
              <MdMic /> 麦克风 - 雷蛇魔音海妖 V2 专业版
            </UseText>
            <UseText>
              <MdMonitor /> 显示器 - LG UltraGear 27GL850
            </UseText>
            <UseText>
              <MdLaptop /> 笔记本 - 联想拯救者 Y9000P (2022) & MacBook Pro (15
              英寸, 2017)
            </UseText>
            <UseText>
              <MdDns /> 工作站 - 戴尔 Precision T7810
            </UseText>
            <UseText>
              <MdPhoneAndroid /> 手机 - 小米 13 Ultra & 小米 10
            </UseText>
            <UseText>
              <MdTabletMac /> 平板电脑 - iPad (第八代)
            </UseText>
            <UseText>
              <MdCamera /> 相机 - 索尼 Cyber-shot DSC-RX100 II
            </UseText>
          </IconContext.Provider>
        </UseSection>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          我的标签
        </Heading>
        <Tag text="自由撰稿人" />
        <Tag text="创业中" />
        <Tag text="韭菜" />
        <Tag text="低技术力" />
        <Tag text="名校校友" />
        <Tag text="无神论者" />
        <Tag text="进步保守主义者" />
        <Tag text="ISTP" />
        <Tag text="肥宅" />
        <Tag text="钢笔" />
        <Tag text="键盘" />
        <Tag text="Hi-Fi" />
        <Tag text="游戏" />
        <Tag text="咕咕" />
        <Tag text="强迫症患者" />
        <Tag text="越共" />
        <Tag text="月厨" />
        <Tag text="EVA厨" />
        <Tag text="鲤友" />
        <Tag text="FF14" />
        <Tag text="重返未来1999" />
        <Tag text="明日方舟" />
        <Tag text="软粉" />
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          联系我
        </Heading>
        <Paragraph>
          <IconContext.Provider
            value={{
              style: {
                display: 'inline',
                fontSize: '1em',
                verticalAlign: 'baseline'
              }
            }}
          >
            <EmailIcon />{' '}
            <NextLink
              href="mailto:email@langdon.one"
              passHref
              scroll={false}
              legacyBehavior
            >
              <Link>发电子邮件给我</Link>
            </NextLink>
            ，或者在下面找到更多联系我的方式。为了使我们的沟通顺畅，请使用简体中文或英语（美国）。
          </IconContext.Provider>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          在互联网上...
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/SuperLangdon" target="_blank">
              <Button
                variant="ghost"
                colorScheme={useColorModeValue('purple', 'orange')}
                leftIcon={<IoLogoGithub />}
              >
                SuperLangdon@Github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/CyberLangdon" target="_blank">
              <Button
                variant="ghost"
                colorScheme={useColorModeValue('purple', 'orange')}
                leftIcon={<FaSquareXTwitter />}
              >
                澜璒@X
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://o3o.ca/@sembers" target="_blank">
              <Button
                variant="ghost"
                colorScheme={useColorModeValue('purple', 'orange')}
                leftIcon={<IoLogoMastodon />}
              >
                余烬@o3o.ca
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://o3o.ca/@sembers" target="_blank">
              <Button
                variant="ghost"
                colorScheme={useColorModeValue('purple', 'orange')}
                leftIcon={<SiPleroma />}
              >
                澜璒@dabr.ca
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://bsky.app/profile/langd.one" target="_blank">
              <Button
                variant="ghost"
                colorScheme={useColorModeValue('purple', 'orange')}
                leftIcon={<PiButterflyFill />}
              >
                LangdonEvo@Bluesky
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://steamcommunity.com/id/superlangdon"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme={useColorModeValue('purple', 'orange')}
                leftIcon={<IoLogoSteam />}
              >
                GeniusLangdon@Steam
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.v2ex.com/member/CyberLangdon"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme={useColorModeValue('purple', 'orange')}
                leftIcon={<SiV2Ex />}
              >
                CyberLangdon@V2EX
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.douban.com/people/143158981/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme={useColorModeValue('purple', 'orange')}
                leftIcon={<SiDouban />}
              >
                澜璒@豆瓣
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://afdian.net/a/landeng" target="_blank">
              <Button
                variant="ghost"
                colorScheme={useColorModeValue('purple', 'orange')}
                leftIcon={<FaDonate />}
              >
                澜璒@爱发电
              </Button>
            </Link>
          </ListItem>

          <Heading as="h3" variant="section-title">
            新闻通讯
          </Heading>
          <Paragraph>
            订阅 InnerEcho -
            它目前正在试运营。每两周一期，我会为你提供我的见解、观察和思考。
          </Paragraph>
        </List>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://superlangdon.zhubai.love/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            订阅我的新闻通讯
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
