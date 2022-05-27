import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css';
import  Layout  from '@/components/Layout';
import Link from 'next/link';
import { Container } from 'reactstrap';
import { NextPage } from 'next';

const Home : NextPage = () => {
  return (
   <Layout>
    <Container className='my-5 py-5'>
      <h1>뭐라카노 타입스크립트</h1>
    </Container>
   </Layout>
   )
}
export default Home