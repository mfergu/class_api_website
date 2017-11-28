import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const GradeList = (props) => (
   <List title="Grades" {...props}>
	   <Datagrid>
		   <TextField source="username" />
		   <TextField source="grade" />
		   <TextField source="max" />
		   <TextField source="type" />
		   <TextField source="_ref" />
	   </Datagrid>
   </List>
);
