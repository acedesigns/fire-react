/* =======================================================
 *
 * Created by anele on 2022/02/31.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { useEffect, useState } from 'react';
import { app } from '../firebase/config';
import { getDocs, getFirestore, collection, doc, onSnapshot, orderBy } from "firebase/firestore"; 

const useFireStore = (coll: string) => {
	const [docs, setDocs] = useState(Array);

	useEffect(() => {
		const dataBase = getFirestore(app);
		
		// Old way of getting Documents
		/*
		async function fetchMyImages() {
			const querySnapshot = await getDocs(collection(dataBase, coll));
			let myDocuments: Array<any> = [];
			querySnapshot.forEach((doc) => {
				myDocuments.push({...doc.data(), id: doc.id})
			});
			setDocs(myDocuments);
		};
		fetchMyImages();
		*/

		// Get Real-time db results as they happen
		const unsub = onSnapshot(
			collection (dataBase, "images"), 
			//.orderBy('createdAt', 'desc')
			(snap) => {
				setDocs(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
			},
			(err) => {},
		);

		return () => unsub();
		
	}, [coll]);

	return {docs};
}

export default useFireStore;
