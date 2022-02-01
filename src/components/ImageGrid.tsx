/* =======================================================
 *
 * Created by anele on 2022/01/31.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React from 'react';
import {useFireStore} from '../hooks';
import { motion } from 'framer-motion';

const ImageGrid = () => {
	const { docs } = useFireStore('images');

	return (
		<div className='img-grid'>
			{docs.length > 0 ? docs && docs.map((doc: any) => (
				<motion.div className='img-wrap' key={doc.id}
				layout
				whileHover={{opacity:1}}
				>
					<motion.img
					initial={{opacity:0}}
					animate={{opacity:1}}
					transition={{delay: 2}}
					src={doc.url} title='Hey' alt='heya' />
				</motion.div>
			)) : <div> <img src='https://via.placeholder.com/200x200.png?text=No+Imge+Yet' alt='Nothing  yet' /> </div>}
			
		</div>
	);
};

export default ImageGrid;
