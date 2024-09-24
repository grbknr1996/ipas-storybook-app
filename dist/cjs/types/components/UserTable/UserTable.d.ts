import React from "react";
export interface User {
    id: string;
    username: string;
    createdOn: string;
    updatedOn: string;
    email: string;
    status: string;
}
interface UserTableProps {
    users: User[];
}
declare const UserTable: React.FC<UserTableProps>;
export default UserTable;
