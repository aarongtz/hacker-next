import React from 'react';
import styles from '../styles/Home.module.css'
import Error from 'next/error';


import axios from 'axios';
import StoryList from '../components/StoryList';
import Layout from '../components/Layout';
import Link from 'next/link';

class Index extends React.Component {


   render() {
      const { stories, page } = this.props;

      if (stories.length === 0) {
         //console.log(stories);
         return <Error statusCode={503} />
      }

      return (
         <Layout title="Hacker Next" description="A Hacker News clone made with Next JS">

            <main className={styles.main}>
               <h1 className={styles.title}>
                  Welcome to <a href="#">Hacker-Next!</a>
               </h1>
               
               <StoryList stories={stories} />
               <footer>
                  <Link href={`/?page=${page + 1}`}>
                     <a>Next Page ({page + 1})</a>
                  </Link>
               </footer>
            </main>

            <style jsx>{`
               footer {
                  padding: 1em;
               }

               footer a{
                  font-weight: bold;
                  color: #000;
                  text-decoration: none;
               }
            `}</style>
         </Layout>
      )
   }
}

export function getServerSideProps(context) {
   let stories = [];
   let page = 1;
   let query = context.query;

   page = Number(query.page) || 1;

   let config = {
      method: 'get',
      url: `https://api.hackerwebapp.com/news?page=${page}`,
   };

   return axios(config)
      .then(function (response) {
         stories = response.data;

         

         return { props: { page, stories } };
      })
      .catch(function (error) {
         //console.log(error);
         stories = [];
         return { props: { page, stories } };
      });
}

export default Index;
