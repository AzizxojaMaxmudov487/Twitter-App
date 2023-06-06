import PostListItem from '../PostListItem'
import './PostList.css'

const PostList = ({posts, onDelete, onToggleImportant,onToggleLiked}) => {
    let elements = posts.map((item) => {
    let {id, ...itemProps} = item
        return(
            <>
            <li className='list-group-item'>
                <PostListItem 
                key={id}
                {...itemProps}
                onDelete = {() => onDelete(id)}
                onToggleImportant = {() => onToggleImportant(id)}
                onToggleLiked = {() => onToggleLiked(id)}
                />
            </li>
            </>
        )
    })
    return (
        <>
            <ul className="app-list list-group">
               {/* <PostListItem label={posts[0].label} important={posts[0].important}/>
               <PostListItem label={posts[1].label} important={posts[1].important}/>
               <PostListItem label={posts[2].label} important={posts[2].important}/> */}
               {elements}
            </ul>
        </>
    )
}
export default PostList