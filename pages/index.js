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
        Hi, I&apos;m Langdon, a Chinese amateur developer, individual Investor,
        and independent writer.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Langdon Lin
          </Heading>
          <p>&#91;&#712;læŋdən&#93; / aka &ldquo;澜璒&rdquo;</p>
          <p>Amateur developer | Individual Investor | Independent Writer</p>
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
          Bio
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
            Hi, my real name is <strong>Langdon Lin</strong> but I prefer the
            name <strong>&quot;澜璒&quot;</strong> on internet. Now based in
            China mainland, working in a university. I&apos;m a:
          </Paragraph>
          <Heading
            as="h4"
            variant="subsection-title"
            className="subsection-title"
          >
            <RiOpenSourceFill />
            <strong> Amateur developer</strong>
          </Heading>
          <Paragraph>
            I am passionate about using my spare time to develop some toy
            projects, such as planning and designing something according to my
            own ideas (like this homepage), solving reallife problems with code.
            I love programming, enjoy experimenting with new technologies, and
            like building my own tools. I&apos;m relatively specialize in
            Javascript, and learning Python now.
          </Paragraph>
          <Paragraph>
            I&apos;m currently working on my quantitative trading project based
            on LLM (Large Language Models).
          </Paragraph>
          <Heading
            as="h4"
            variant="subsection-title"
            className="subsection-title"
          >
            <RiStockFill />
            <strong> Individual Investor</strong>
          </Heading>
          <Paragraph>
            Since 2015, I&#39;ve actively involved in the stock and financial
            derivatives markets. My primary investments are mainly in the Hong
            Kong and US stock markets. In 2023, my overall return rate reached
            87.7%. In addition, I have passed the PRC Securities Regulations
            Examination.
          </Paragraph>
          <Heading
            as="h4"
            variant="subsection-title"
            className="subsection-title"
          >
            <RiSparklingFill />
            <strong> Independent Writer</strong>
          </Heading>
          <Paragraph>
            In my spare time, I take pleasure in observing the world , and
            writing about it in articles on my you can see in my <IoBookmark />
            <NextLink
              href="https://blog.langdon.one"
              passHref
              scroll={false}
              legacyBehavior
            >
              <Link>Blog</Link>
            </NextLink>
            . I will write about the process and results of my own practice and
            reflections, or what I have see and hear in life and work. Some of
            the content is also the result of my sudden inspiration. I also
            write lyrics or translate foreign content into Chinese.
          </Paragraph>
          <Paragraph>
            Moreover, you can follow my <IoPaperPlane />
            <NextLink
              href="https://sapphe1r0s.t.me"
              passHref
              scroll={false}
              legacyBehavior
            >
              <Link>Channel </Link>
            </NextLink>
            where I share what I watch and create on the internet. Subscribing
            will keep you updated on my latest activities.
          </Paragraph>
          <Paragraph>
            When offline, I enjoy reading and writing, immersing myself in my
            own &quot;InfinitySpace&quot;.
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
            Read my posts
          </Button>
        </NextLink>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About &ldquo;而浮生若梦，为欢几何&#65311;&rdquo;
        </Heading>
        <Paragraph>
          This line originates from a Chinese poem by the Tang dynasty poet Li
          Bai, which I hold in great affection. It translates to the English
          sentiment as &#8216;Our floating life is like a dream; how often one
          can enjoy oneself&#63;&#8217; The poet intended to convey through this
          line that human life is ephemeral, akin to a fleeting illusion, urging
          us to embrace each day with a carefree attitude.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Uses
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
            <UseTitle> Environment</UseTitle>
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
              <SiXiaomi /> Xiaomi HyperOS 1.0 (Android 14)
            </UseText>
          </IconContext.Provider>
        </UseSection>
        <UseSection>
          <IconContext.Provider value={{ style: { display: 'inline' } }}>
            <IoTerminal />
            <UseTitle> Techs</UseTitle>
            <UseText>
              <MdKeyboard /> Keyboard - Akko 3108 V2
            </UseText>
            <UseText>
              <MdMouse /> Mouse - Logitech G304
            </UseText>
            <UseText>
              <MdHeadphones /> Headphone - EDIFIER W860NB
            </UseText>
            <UseText>
              <MdMic /> Microphone - Razer Seiren V2 Pro
            </UseText>
            <UseText>
              <MdMonitor /> Monitor - LG UltraGear 27GL850
            </UseText>
            <UseText>
              <MdLaptop /> Laptop - Lenovo Legion Y9000P (2022) & MacBook Pro
              (15-inch, 2017)
            </UseText>
            <UseText>
              <MdDns /> Workstation - Dell Precision T7810
            </UseText>
            <UseText>
              <MdPhoneAndroid /> Phone - Xiaomi 13 Ultra & Xiaomi Mi 10
            </UseText>
            <UseText>
              <MdTabletMac /> Tablet - iPad (8th Gen)
            </UseText>
            <UseText>
              <MdCamera /> Camera - Sony Cyber-shot DSC-RX100 II
            </UseText>
          </IconContext.Provider>
        </UseSection>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Tags
        </Heading>
        <Tag text="Freelance Writer" />
        <Tag text="Entrepreneurship in Progress" />
        <Tag text="Retail Investor" />
        <Tag text="Low Technical Ability" />
        <Tag text="Alumni of Prestigious School" />
        <Tag text="Atheist" />
        <Tag text="Progressive Conservative" />
        <Tag text="ISTP" />
        <Tag text="Otaku" />
        <Tag text="Fountain Pen" />
        <Tag text="Keyboard" />
        <Tag text="Hi-Fi" />
        <Tag text="Gamer" />
        <Tag text="GuGu" />
        <Tag text="Obsessive Compulsive" />
        <Tag text="Touhou Project" />
        <Tag text="TYPE-MOON" />
        <Tag text="Evangelion" />
        <Tag text="Liyuu Fan" />
        <Tag text="FFXIV" />
        <Tag text="Reverse 1999" />
        <Tag text="Arknights" />
        <Tag text="Microsoft Fan" />
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact me
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
              <Link>Send me an Email</Link>
            </NextLink>
            , or find more of my contact information at &quot;On the web&quot;
            section below. In order to facilitate smooth communication, please
            use Simplified Chinese or English (US).
          </IconContext.Provider>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
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
                CyberLangdon@X
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
                Sembers@o3o.ca
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
                Langdon@dabr.ca
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
                澜璒@Douban
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
                澜璒@Afdian
              </Button>
            </Link>
          </ListItem>

          <Heading as="h3" variant="section-title">
            Newsletter
          </Heading>
          <Paragraph>
            Join InnerEcho - it&apos;s currently in testing. Every two weeks,
            I&apos;ll provide you with my insights, observations, and thoughts.
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
            Sign up my newsletter here
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
