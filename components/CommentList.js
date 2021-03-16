import Comment from './Comment';
import styles from '../styles/Home.module.css';

const CommentList = ({comments}) => {

   return (
      <div className={styles.content}>
         {comments.map(comment =>(
            <div>
               <Comment key={comment.id} comment={comment} />
               <hr />
            </div>
         ))}
      </div>
   )
   
}

export default CommentList;
