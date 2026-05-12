import{useState} from 'react';
function LikeButton() {
    const [likes, setLiked] = useState(0);
function addLike(){
    setLiked(likes+1);

}
return (<div className="card">
    <h2>Like Button</h2>
    <p className="big">{likes} </p>
    <button onClick={addLike}>Like</button>
    <p className='muted'>
        events name in react are camelcase (onClick,ONCHANGE,ONMOUSEOVER...) and event handler is a function reference (not a onchange)
    </p>
</div>);
}
