import React from'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovedCard from './ApprovedCard';

const App = () => {
    return (
        <div className='ui container comments'>  
            <ApprovedCard>    
                <CommentDetail author='Sam' timeAgo='Today at 4:45 pm' Comment='Great content' Pic={faker.image.avatar()}/> 
            </ApprovedCard>             
            <ApprovedCard>      
                <CommentDetail author='Alex' timeAgo='Today at 6:45 pm' Comment='Thank for the information' Pic={faker.image.avatar()}/>
            </ApprovedCard> 
            <ApprovedCard> 
                <CommentDetail author='Louic' timeAgo='Today at 8:45 pm' Comment='Need more explanation' Pic={faker.image.avatar()}/> 
            </ApprovedCard> 
            <ApprovedCard>
                <CommentDetail author='John' timeAgo='Today at 12:45 pm' Comment='Waiting the second part' Pic={faker.image.avatar()}/> 
            </ApprovedCard>
        </div>

    );
};



            
ReactDOM.render(<App/>, document.querySelector('#root'));