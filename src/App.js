/*
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
*/
import React from 'react';	
import authClient from './authClient';
import { StudentList } from './students';
import { GradeList } from './grades';

import {jsonServerRestClient, fetchUtils, Admin, Resource } from 'admin-on-rest';


const httpClient = (url, options = {}) => {
	if(!options.headers){
		options.headers = new Headers({Accept: 'application/json'});
	}
	const token = localStorage.getItem('token');
	options.headers.set("Authorization","Basic ":token);
    	return fetchUtils.fetchJson(url, options);
}
const rClient = jsonServerRestClient('http://ec2-52-91-92-20.compute-1.amazonaws.com:3001', httpClient);




const App = () => (
	<Admin restClient={rClient} authClient={authClient}>
	    <Resource name="students" list={StudentList} />
	    <Resource name="grades" list={GradeList} />
    </Admin>
);

export default App;
