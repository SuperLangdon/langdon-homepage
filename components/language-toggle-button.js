import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { IoLanguage } from 'react-icons/io5'

const LanguageToggleButton = () => {
  const router = useRouter()

  const handleClick = () => {
    let newPath = ''
    if (router.pathname === '/cn') {
      newPath = '/'
    } else if (router.pathname.startsWith('/cn')) {
      newPath = router.pathname.replace('/cn', '')
    } else {
      newPath = '/cn' + router.pathname
    }
    router.push(newPath)
  }
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={router.pathname.startsWith('/cn') ? 'cn' : 'en'}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle language"
          onClick={handleClick}
          icon={<IoLanguage />}
          colorScheme={useColorModeValue('teal', 'teal')}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default LanguageToggleButton
