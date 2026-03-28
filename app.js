import {
  db, storage,
  doc, setDoc,
  ref, uploadBytes, getDownloadURL
} from './firebase.js';

async function uploadFile(file, path){
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}

window.createPage = async function(){

  const id = Date.now().toString();

  const name = document.getElementById("name").value;
  const letter = document.getElementById("letter").value;

  const pfpFile = document.getElementById("pfp").files[0];
  const videoFile = document.getElementById("video").files[0];
  const photoFiles = document.getElementById("photos").files;

  const reasons = document.getElementById("reasons").value.split(",");

  const pfp = pfpFile ? await uploadFile(pfpFile, `users/${id}/pfp`) : "";
  const video = videoFile ? await uploadFile(videoFile, `users/${id}/video`) : "";

  let photos = [];
  for(let i=0;i<photoFiles.length;i++){
    const url = await uploadFile(photoFiles[i], `users/${id}/photo${i}`);
    photos.push(url);
  }

  await setDoc(doc(db,"users",id),{
    name,
    letter,
    pfp,
    video,
    photos,
    reasons
  });

  const link = `${window.location.origin}/index.html?id=${id}`;
  document.getElementById("link").innerText = "💖 Send this: " + link;
};