//import axios from 'axios';
import React,{Component,useEffect} from 'react';
import {storageRef,db} from "../firebase";
import "./Course.css"
import fileLogo from "../images/fileLogo.png";

// class Course extends Component {
//         constructor() {
//           super().
//           this.state = {
//             uploading: false,
//             percent: 100,
//             file: '',
//             error: ''
//           }
//           this.handleFileSelect = this.handleFileSelect.bind(this)
//           this.handleFileUpload = this.handleFileUpload.bind(this)
//         }
//         handleFileSelect(e) {
//           this.setState({file: e.target.files[0]})
//         }
//         handleFileUpload() {
//           this.setState({uploading: true})
//           storageRef
//             .put(this.state.file)
//             .then(snap => {
//               this.setState({uploading: false})
//               // the loading percent logic here?
//               // how do i keep tabs on the percent?
//             })
//             .catch(err => this.setState({error: err.message}))
//         }
//         render() {
//           return (
//             <div className='container'>
//               <div className='form'>
//                 <input type='file' onChange={this.handleFileSelect}/>
//                 <button onClick={this.handleFileUpload}>Upload</button>
//               </div>
//               {this.state.uploading 
//                 ? <div>
//                     <div className='load-bar'/>
//                     <span>Uploading: {this.state.percent}%</span>
//                   </div>
//                 : ''
//               }
//               <pre>
//                 <code>
//                   {this.state.error ? <span className='error'>{this.state.error}</span> : ''}
//                   {JSON.stringify(this.state.file, null, 2)}
//                 </code>
//               </pre>
//             </div>
//           )
//         }
//       }
function App() {
    const [fileUrl, setFileUrl] = React.useState(null);
    const [users, setUsers] = React.useState([]);
    const [uploading, setuploading] = React.useState(false);
    const [success, setsuccess] = React.useState(false);
  
    const onFileChange = async (e) => {
        
        const file = e.target.files[0];
        setuploading(true);
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        const furl = await fileRef.getDownloadURL();
        console.log(furl);
        setFileUrl(furl);
        setuploading(false);
    };
  
    const onSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        console.log(username);
        if (!username || !fileUrl) {
            alert("Error");
            return;
        }
        console.log(fileUrl)
        await db.collection("users").doc(username).set({
            name: username,
            avatar: fileUrl,
        });
        setsuccess(true);
    };
  
    useEffect(() => {
      const fetchUsers = async () => {
        const usersCollection = await db.collection("users").get();
        setUsers(
          usersCollection.docs.map((doc) => {
            return doc.data();
          })
        );
      };
      fetchUsers();
    }, []);
  
    return (
        <>
            <div className="container">
                <div className="form">
                <form onSubmit={onSubmit}>
                <input type="file" onChange={onFileChange} />
                <input type="text" name="username" placeholder="NAME" />
                <button disabled={uploading}>Submit</button>
            </form>
            {uploading 
                ? <div>
                    <div className='load-bar'/>
                    <span>Uploading</span>
                  </div>
                : ''
            }
            {success
                ? <h1>Succesfully uploaded</h1>
            :''}
            <ul>
            {users.map((user) => {
                return (
                <li key={user.name}>
                    <img width="100" height="100" src={fileLogo} alt={fileLogo} />
                        <a href={user.avatar}>{user.name}</a>
                </li>
                );
            })}
            </ul>
                </div>
            </div>
        
      </>
    );
  }

export default App
