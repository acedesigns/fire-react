/* =======================================================
 *
 * Created by anele on 2022/01/31.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { useEffect, useState } from 'react';
import { app, timeStamp } from '../firebase/config';
import { ref, getStorage, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from "firebase/firestore"

const useStorage = (file: File) => {
	const [progress, setProgress] = useState<number>(0);
	const [error, setError] = useState<string | null>(null);
	const [url, setUrl] = useState<string | null>(null);

	useEffect(() => {
		//References
		const storage = getStorage(app);
		const collectionRef = getFirestore(app);

		const storageRef = ref(storage, file.name);
		const uploadTask = uploadBytesResumable(storageRef, file);

		// Get Images
		//const querySnapshot = getDocs(collection(collectionRef, "images"));

		uploadTask.on('state_changed',
			(snapshot) => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setProgress(progress)
			},
			(error: any) => {
				setError(error)
			},
			async () => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      				//console.log('File available at', downloadURL);
					try {
						addDoc(collection(collectionRef, "images"), {
							url: downloadURL,
							createdAt: timeStamp
						});
					} catch (error) {
						console.error("Error adding document: ", error);
					}
					setUrl(downloadURL);
    			});
			}
		)
		
		
	}, [file]);
	return { progress, url, error }
};

export default useStorage;
