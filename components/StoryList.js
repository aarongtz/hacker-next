import Link from 'next/link';

const StoryList = ({ stories }) => (
   <div className="story-list">
      <br />
      <br />
      {stories.map(story => (
         <div key={story.id} className="story">
            <h2 className="story-title">
               <a href={story.url} target="_blank">{story.title}</a>
            </h2>
            <div className="story-details">
               <span>{ story.points || 0} points</span>
               <Link href={`/stories/${story.id}`}>
                  <a>{story.comments_count || 0} comments</a>
               </Link>
            </div>
         </div>
      ))}

      <style jsx>{`

         .story{
            margin: 0 0 15px;
         }

         .story-title{
            margin: 0;
            margin-bottom: 0.5em;
         }

         .story-title a{
            text-decoration: none;
         }

         .story-title a:hover{
            text-decoration: underline;
         }

         .story-details span{
            margin-right: 1em;
         }

         .story-details a{
            color #0070f3;
         }

         .story-details a:hover{
            text-decoration: underline;
         }
      `}</style>
   </div>
);


export default StoryList;