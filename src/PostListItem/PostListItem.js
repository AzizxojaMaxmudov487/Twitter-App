import './PostListItem.css'
import PostList from '../PostList/PostList'
import { Component } from 'react'

export default class PostListItem extends Component{

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         important: false,
    //         like: true
    //     }
    //     this.onImportant = this.onImportant.bind(this)
    //     this.onLike = this.onLike.bind(this)
    // }

    // onImportant() {
    //     this.setState(({important}) => ({important: !important}))
    // }

    // onLike() {
    //     this.setState(({like}) => ({like: !like}))
    // }

    render(){

    const {label, important,like, onDelete, onToggleImportant, onToggleLiked} = this.props
    
    let classNames = 'app-list-item d-flex justify-content-between'

    if(important){
        classNames += ' important'
    }

    if(like) {
        classNames += ' like'
    }
    
    return (
        <>
            <div className={classNames}>
                <span className='app-list-item-label'
                onClick={onToggleLiked}
                >
                    {label}
                </span>
                <div className='d-flex justify-content-between align-items-center'>
                    <button className='btn-star btn-sm' onClick={onToggleImportant}>
                        <i className='fa fa-star'></i>
                    </button>
                    <button className='btn-trash btn-sm' onClick={onDelete}>
                        <i className='fa fa-trash'></i>
                    </button>
                    <i className='fa fa-heart' 
                    
                    ></i>
                </div>
            </div>

        </>
    )
    }
}