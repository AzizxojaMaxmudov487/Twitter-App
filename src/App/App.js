import React, { Component } from 'react';
import './App.css'
import AppHeader from '../AppHeader';
import PostList from '../PostList'
import SearchPanel from '../SearchPanel'
import SearchStatus from '../SearchStatus'
import PostAddForm from '../PostAddForm';
// import SearchStatusFilter from '../SearchStatusFilter'
// import PostAddForm from '../PostAddForm'

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: 'Going to learn React JS', important: false, like: false, id: 1 },
        { label: 'Going to learn React JS', important: false, like: false, id: 2 },
        { label: 'Going to learn React JS', important: false, like: false, id: 3 },
      ],
      term: '',
    }
  
    this.deleteItem = this.deleteItem.bind(this)
    this.addItem = this.addItem.bind(this)
    this.onToggleImportant = this.onToggleImportant.bind(this)
    this.onToggleLiked = this.onToggleLiked.bind(this)
    this.searchPosts = this.searchPosts.bind(this)
    this.onUptadeSearch = this.onUptadeSearch.bind(this)
    this.onFilterSelect = this.onFilterSelect.bind(this)

    this.maxId = 4;
  }


  deleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)]
      return{
        data: newArr
      }
    })
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data,newItem]
      return{
        data: newArr
      }
    })
  }

  onToggleImportant(id){
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const oldItem = data[index]

      const newItem = { ...oldItem, important: !oldItem.important}

      const newArr = [...data.slice(0,index), newItem, ...data.slice(index + 1)]

      return {
        data: newArr
      }
    })
  }

  onToggleLiked(id){
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const oldItem = data[index]

      const newItem = { ...oldItem, like: !oldItem.like}

      const newArr = [...data.slice(0,index), newItem, ...data.slice(index + 1)]

      return {
        data: newArr
      }
    })
  }
  
  searchPosts(data, term){
    if(term.length === 0){
      return data
    }

    return data.filter(item => {
      return item.label.indexOf(term) > -1 
    })
  }

  filterPost(data, filter) {
    if(filter === 'like') {
      return data.filter(item => item.like)
    } else{
      return data
    }
  }

  onUptadeSearch(term) {
    this.setState({term})
  }

  onFilterSelect(filter) {
    this.setState({filter})
  }




  render(){
    const { data, term, filter} = this.state
    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;
    const visiblePosts = this.filterPost(this.searchPosts(data, term), filter)
    return (
      <div className="app">
        <AppHeader liked={liked} allPosts={allPosts}/>
        <div className='search-panel d-flex'>
          <SearchPanel onUptadeSearch={this.onUptadeSearch} />
          <SearchStatus filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>
        <PostList
        posts={visiblePosts} 
        onDelete={this.deleteItem}
        onToggleImportant={this.onToggleImportant}
        onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

