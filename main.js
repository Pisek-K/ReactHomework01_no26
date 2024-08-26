
let data1 = {
    name: 'Julienne Moore',
    email: 'julienne.moore@company.com'
}


function CardHeader(){
    return(
        <div className="image1">
            <img src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="photo" />
        </div>
    )
}


function CardMiddle(){
    return(
        <div className="middle">
                <h2>{data1.name}</h2>
                <h3>{data1.email}</h3>
         </div>
    )
}


function CardBottom(){
    return(
        <div className="btm1">
                <div className="post">
                    <h1>25</h1>
                    <h3>Posts</h3>
                </div>
                <div className="following">
                    <h1>0</h1>
                    <h3>Following</h3>
                </div>
                <div className="follower">
                    <h1>1m.</h1>
                    <h3>Followers</h3>
                </div>
            </div>
    )
}


function Card() {
    return (
        <div className="body">
        <CardHeader />
        <CardMiddle />
        <CardBottom />
            
        </div>
    )
}


ReactDOM.createRoot(document.querySelector("#root")).render(<Card />);
