/* =======================================================
 *
 * Created by anele on 2022/01/31.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React, { useState } from 'react';
import { ProgressBar } from '.';


const UploadForm = () => {
	const [file, setFile] = useState<File | null>(null);
	const [error, setError] = useState<string | null>(null);

	const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

	const changeHandler = (e: any) => {
		let selected = e.target.files[0];
		if (selected &&  allowedTypes.includes(selected.type)) {
			setFile(selected);
			setError('')
		} else {
			setFile(null);
			setError('Please select image file');
		}
	}

	return (
	  <form>
		  <label>
		  	<input type='file' onChange={changeHandler} />
			  <span>+</span>
		  </label>
		  
		  <div className='output'>
			  {error && <div className='error'>{error}</div> }
			  {file && <div>{file.name}</div> }
			  {file && <ProgressBar file={file} setFile={setFile}/> }
		  </div>
	  </form>
	);
};

export default UploadForm;
