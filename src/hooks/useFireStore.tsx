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
import { getDocs, getFirestore, collection, doc, onSnapshot } from "firebase/firestore"; 

const useFireStore = (coll: string) => {
	const [docs, setDocs] = useState(Array);

	useEffect(() => {
		const dataBase = getFirestore(app);

		async function fetchMyImages() {
			let myDocuments: Array<any> = [];
			const querySnapshot = await getDocs(collection(dataBase, coll));
			
			querySnapshot.forEach((doc) => {
				//sconsole.log(`${doc.id} `);
				//console.log( doc.data());
				myDocuments.push({...doc.data(), id: doc.id})
			});
			setDocs(myDocuments);
		};
		fetchMyImages();
		
	}, [coll]);

	return {docs};
}

export default useFireStore;