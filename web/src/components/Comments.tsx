import { io, Socket } from 'socket.io-client';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const socket: Socket = io('http://localhost:4000');

export const Comments = () => {
  const { category, id } = useParams();
  const [comment, setComment] = useState('');

  const addComment = (event: any) => {
    event.preventDefault();

    socket.emit('addComment', {
      comment,
      category,
      id,
      userId: localStorage.getItem('userId'),
    });

    setComment('');
  };

  return (
    <div className='comments__container'>
      <form className='comment__form' onSubmit={addComment}>
        <label htmlFor='comment'>Add a comment</label>
        <textarea
          placeholder='Type your comment...'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={5}
          id='comment'
          name='comment'
          required
        ></textarea>
        <button className='commentBtn'>ADD COMMENT</button>
      </form>
      <div className='comments__section'>
        <h2>Existing Comments</h2>
        <div></div>
      </div>
    </div>
  );
};
