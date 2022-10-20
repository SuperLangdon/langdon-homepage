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
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
import styled from "@emotion/styled"

const ProfileImage = chakra(Image, {
	shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Quote = styled(Text)`
	font-size: 16px;
	font-family: 'Libre Baskerville';
	font-weight: bold;
	text-align: center;
	margin-top: 1.5em;
`

const Home = () => (
	<Layout>
		<Container maxW="container.md">
			<Box
				borderRadius="lg"
				mb={6}
				p={3}
				textAlign="center"
				bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
				css={{ backdropFilter: 'blur(10px)' }}
			>
				Hi there, I&apos;m a student in software engineering based in Italy.
			</Box>

			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading>
						Francesco Raso
					</Heading>
					<p>Student in Software Engineering | Developer | Tech enthusiast</p>
					<Quote>&ldquo;Arranging 0&apos;s and 1&apos;s in the exact right order.&rdquo;</Quote>
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
							src="/images/fraso.png"
							alt="Profile image"
							borderRadius="full"
							width="150px"
							height="150px"
						/>
					</Box>
				</Box>
			</Box>

			<Divider my={6} borderColor={useColorModeValue('purple.300', 'orange.200')} />

			<Section delay={0.1}>
				<Heading as="h3" variant="section-title" >
					.is()
				</Heading>
				<Paragraph>
					Hi, my real name is <strong>Francesco Raso</strong> but I prefer the name <strong>fraso</strong> on the web.
					<br/>
					<br/>
					Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
				</Paragraph>
				<Box align="right" my={4}>
					<NextLink href="/works" passHref scroll={false}>
						<Button
							colorScheme={useColorModeValue('purple', 'orange')}
							rightIcon={<ChevronRightIcon />}
						>
							Visit my portfolio
						</Button>
					</NextLink>
				</Box>
			</Section>

			<Section delay={0.2}>
				<Heading as="h2" variant="section-title">
					.bio()
				</Heading>
				<BioSection>
					<BioYear>1996</BioYear>
					Born in Sciacca, Italy.
				</BioSection>
				<BioSection>
					<BioYear>2021</BioYear>
					Started studies in Computer Science and Software Engineering at University of Bologna.
				</BioSection>
			</Section>

			<Section delay={0.3}>
				<Heading as="h2" variant="section-title">
					.hobbies()
				</Heading>
				<Paragraph>
					Crypto, Open Source, Gaming, {' '}
					<Link href="https://www.legavolley.it/player/RAS-FRA-97">Volleyball</Link>
					, Beach Volleyball, Anime, Playing guitar,
				</Paragraph>
			</Section>

			<Section delay={0.3}>
				<Heading as="h2" variant="section-title">
					.social()
				</Heading>

				<List>
					<ListItem>
						<Link href="https://github.com/0xfraso" target="_blank">
							<Button
								variant="ghost"
								colorScheme={useColorModeValue('purple', 'orange')}
								leftIcon={<IoLogoGithub />}
							>
								0xfraso
							</Button>
						</Link>
					</ListItem>

					<Link href="https://twitter.com/fraso141" target="_blank">
						<Button
							variant="ghost"
							colorScheme={useColorModeValue('purple', 'orange')}
							leftIcon={<IoLogoTwitter />}
						>
							fraso141
						</Button>
					</Link>

					<ListItem>
						<Link href="https://instagram.com/f.raso3" target="_blank">
							<Button
								variant="ghost"
								colorScheme={useColorModeValue('purple', 'orange')}
								leftIcon={<IoLogoInstagram />}
							>
								f.raso3
							</Button>
						</Link>
					</ListItem>
				</List>
			</Section>
			<Divider my={6} borderColor={useColorModeValue('purple.300', 'orange.200')} />
		</Container>
	</Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
