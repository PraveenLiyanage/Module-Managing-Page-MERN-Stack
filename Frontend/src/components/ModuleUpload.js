import {useEffect, useState} from 'react';
import {storage} from '../firebase';
import {ref, uploadBytes, listAll, getDownloadURL} from 'firebase/storage';
import {v4} from 'uuid';

function ModuleUpload() {
    const [videoUpload, setVideoUpload] = useState(null);
    const [videoList, setVideoList] = useState([]);
  
  
    const videoListRef = ref(storage, "recordings/")
    const uploadVideo = () => {
      if (videoUpload == null) return;
      const videoRef = ref(storage, `recordings/${videoUpload.name + v4()}`);
      uploadBytes(videoRef, videoUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setVideoList((prev) => [...prev, url]);
        });
      });
    };
  
  
    useEffect (() => {
      listAll(videoListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setVideoList((prev) => [...prev, url]);
          });
        });
      });
    }, []);
  

    return(
        <div className="ModuleUpload">
        <input type = "file" 
        onChange={(event) => {
            setVideoUpload(event.target.files[0]);
            }}
        />

        <button className="Upload_btn" onClick={uploadVideo}>Upload Video</button>

        <div>
        {videoList.map((url) => {

            return (
            <video width="320" height="240" controls>
              <source src = {url} />
            </video>
            )
          })}
          </div>

        </div>
    )
    }

    export default ModuleUpload