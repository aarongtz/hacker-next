import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';

const Layout = ({ children, title, description, backButton }) => (
   <div>
      <Head>
         <title>{ title }</title>
         <meta name="content" description={description} />
      </Head>
      <div>
         <div className="container-nav">
            <nav>
               {backButton && 
                  <span onClick={() => Router.back()} className="back-button">&#x2b05;</span>
               }
               <Link href="/">
                  <a>
                     <span className="main-title">Hacker Next</span>
                  </a>
               </Link>
            </nav>
         </div>


         {children}
      </div>

      <style jsx>{`
         .container-nav{
            max-width: 940px;
            margin: 0 auto;
            background: #f6f6ef;
         }

         nav{
            background: #0070f3;
            padding: 1em;
         }

         nav > * {
            display: inline-block;
            color: #000;
         }

         nav a{
            text-decoration: none;
         }

         nav .main-title{
            font-weight: bold;
            color: #fff;
         }

         nav .back-button{
            font-size: 0.9rem;
            padding-right: 1em;
            cursor: pointer;
         }
      `}</style>
      <style global jsx>{`
         body{
            background: white;
         }
      `}</style>
   </div>
);


export default Layout;