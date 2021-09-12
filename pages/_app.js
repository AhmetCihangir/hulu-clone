import { motion } from 'framer-motion'
import '../styles/globals.css'



function MyApp({ Component, pageProps , router}) {
  return ( 
    <motion.div initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial : {
        opacity : 0
      },
      pageAnimate : {
        opacity : 1
      }
    }} key={router.route} >
      <Component {...pageProps} /> 
    </motion.div>
  
  )
}

export default MyApp
