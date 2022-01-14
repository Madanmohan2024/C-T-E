//import axios from 'axios';
import React,{Component} from 'react';
import {storageRef} from "../firebase";
import "./Course.css"
class Course extends Component {
        constructor() {
          super()
          this.state = {
            uploading: false,
            percent: 100,
            file: '',
            error: ''
          }
          this.handleFileSelect = this.handleFileSelect.bind(this)
          this.handleFileUpload = this.handleFileUpload.bind(this)
        }
        handleFileSelect(e) {
          this.setState({file: e.target.files[0]})
        }
        handleFileUpload() {
          this.setState({uploading: true})
          storageRef.child('images')
            .put(this.state.file)
            .then(snap => {
              this.setState({uploading: false})
              // the loading percent logic here?
              // how do i keep tabs on the percent?
            })
            .catch(err => this.setState({error: err.message}))
        }
        render() {
          return (
            <div className='container'>
              <div className='form'>
                <input type='file' onChange={this.handleFileSelect}/>
                <button onClick={this.handleFileUpload}>Upload</button>
              </div>
              {this.state.uploading 
                ? <div>
                    <div className='load-bar'/>
                    <span>Uploading: {this.state.percent}%</span>
                  </div>
                : ''
              }
              <pre>
                <code>
                  {this.state.error ? <span className='error'>{this.state.error}</span> : ''}
                  {JSON.stringify(this.state.file, null, 2)}
                </code>
              </pre>
            </div>
          )
        }
      }

export default Course
