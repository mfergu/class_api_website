import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const StudentList = (props) => (
   <List {...props}>
       <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="name" />
            <TextField source="_ref" />
        </Datagrid>
   </List>
);
/*
export const StudentList = (props) => (
   <List title ="Students" {...props}>
       <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="name" />
            <TextField source="_ref" />
        </Datagrid>
   </List>
);
*/
