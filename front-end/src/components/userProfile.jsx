import React from 'react'
import Modal from 'react-modal';
import axios from 'axios'



class UserProfile extends React.Component {
    constructor(){
        super();
        this.state = {
            allPost: []
        }
        this.allPost = []
    }


    componentDidMount() {
        axios 
        
            .get('/users/getAllPost')
            .then((res) => {
                console.log(`neeeeeeeeeed`,res.data.post)
                this.setState({
                    allPost: res.data.post
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }



    handleNewPost = (e) => {
        
    }


    handleNewPostButton = () => {
        var url = prompt('enter a url')
       if(url) {
          return this.allPost.push(encodedURIComponent(url))
       }
    }





    render() {
        const { user, logout} = this.props
        console.log(this.allPost)
        return (
            <div>
             <header>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                 </header>
             <h1>{user}!</h1>
             <button>View Feed</button>
             <button>Edit Profile</button>
             <button className="addPost" onClick={this.handleNewPostButton}><i class="fa fa-plus-square" ></i></button>
             {this.allPost.map(pic => <img src={pic} alt={pic} />)}
           <button onClick={logout}>LOGOUT :(</button>
             <br />
       </div>
        )
    }
}




export default UserProfile





// const UserProfile = ({ user, logout }) => {
//     console.log(user)
//     return (
//         <div>
//             <header>
//             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
//                 </header>
//             <h1>{user}!</h1>
//             <button>View Feed</button>
//             <button>Edit Profile</button>
//             <button className="addPost"><i class="fa fa-plus-square" ></i></button>
//             <button onClick={logout}>LOGOUT :(</button>
//             <br />
//         </div>
//     )

// }