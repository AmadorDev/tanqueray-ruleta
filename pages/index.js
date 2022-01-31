import Head from 'next/head'

import Layout from '../components/layouts/Layout'
import styles from '../styles/Home.module.css'
import Home from './home'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
return <Home></Home>
}
