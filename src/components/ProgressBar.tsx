/* =======================================================
 *
 * Created by anele on 2022/01/31.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React, { useEffect } from 'react';
import { useStorage } from '../hooks';
import { motion } from 'framer-motion';

export interface ProgressBarProps {
    file: File,
	setFile: any
}

const ProgressBar = ({file, setFile}: ProgressBarProps) => {
	const {url, progress} = useStorage(file);
	useEffect(() => {
		if (url) {
			setFile(null)
		}
	},[url, setFile]);

  	return (
  		<motion.div className='progress-bar'
		  initial={{width: 0}}
		  animate={{width: progress + '%'}}
		></motion.div>
	);
};

export default ProgressBar;
