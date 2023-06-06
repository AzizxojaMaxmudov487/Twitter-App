import './AppHeader.css'

const AppHeader = ({liked, allPosts}) => {
    return(
        <>
        <div className="app_header d-flex">
            <h1>Azizxo'ja Maxmudov</h1>
            <h2>{allPosts} posts, {liked} like</h2>
        </div>
        </>
    )
}
export default AppHeader