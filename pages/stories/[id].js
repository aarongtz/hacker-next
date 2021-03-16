import Layout from '../../components/Layout';
import axios from 'axios';
import styles from '../../styles/Home.module.css';
import Error from 'next/error';

import CommentList from '../../components/CommentList';

const Story = ({ story }) => {

   if(!story){
      return <Error statusCode={503} />
   }

   return (
      <Layout title={story.title} backButton={true}>
         <main className={styles.main}>
            <h1 className="story-title">
               <a href={story.url} target="_blank">{story.title}</a>
            </h1>
            <div className="story-details">
               <strong>{story.points} points</strong>
               <strong>{story.comments_count} comments</strong>
               <strong>{story.time_ago}</strong>
            </div>

            {story.comments.length > 0 ? (
               <CommentList comments={story.comments} />
            ): (
               <div>No comments for this story</div>
            )}
         </main>
         <style jsx>{`
            main{
               padding: 1em;
            }

            .story-title{
               font-size: 1.2rem;
               text-align: left;
               margin: 0;
               font-weight: 300;
               padding-bottom: 0.5em;
            }

            .story-title a{
               color: #333;
               text-decoration: none;
            }

            .story-title a:hover{
               text-decoration: underline;
            }

            .story-details{
               font-size: 0.8rem;
               pading-bottom: 1em;
               border-bottom: 1px solid rgba(0, 0, 0, 0.1);
               margin-bottom: 1em;
            }

            .story-details strong{
               margin-right: 1em;
            }

            .string-details a{
               color: #f60;
            }

         `}</style>
      </Layout>
   );
}

export async function getServerSideProps(context) {
   let params = context.params;
   let query = context.query;

   let storyId = params.id;
   let story = null;

   let config = {
      method: 'get',
      url: `https://api.hackerwebapp.com/item/${storyId}`,
   };

   return axios(config)
      .then(function (response) {
         story = response.data;

         return { props: { story } };
      })
      .catch(function (error) {
         //console.log(error);
         return { props: { story } };
      });
}

export default Story;