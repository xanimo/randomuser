import React from 'react';
import Gender from '../Gender/Gender';
import { calculateAge } from '../../Helpers';

const Filter = (props) => {
		return (
		<form className="filter">
		<div>
			Age: <input type="text" required placeholder="Minimum Age" defaultValue="18"/>
			To: <input type="text" required placeholder="Maximum Age" defaultValue="100"/>
		</div>
		<div>
		<div>
		<Gender />
		</div>
		</div>
		<button type="submit">Reset</button>
		</form>
		)
}

export default Filter;