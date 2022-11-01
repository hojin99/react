import React from 'react';

const UserList = () => {
    const users = [
        {email: 'a@gmail.com', name: '김철수'},
        {email: 'b@gmail.com', name: '홍길동'},
        {email: 'c@gmail.com', name: '이개똥'},
        {email: 'd@gmail.com', name: '김말자'},
    ];

    const User = ({userData}) => {
        return (
            <tr>
                <th>{userData.name}</th>
                <th>{userData.email}</th>
            </tr>
        );
    };

     return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user} />)}
            </tbody>
        </table>
     );
}

export default UserList;