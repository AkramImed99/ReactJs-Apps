import {combineReducers} from 'redux';
const songsReducer = () => {
    return [
        {title:'Bande organisée',duration: '4:05'},
        {title:'Partout c est la meme',duration:'5:05'},
        {title:'Combien',duration: '4:35'},
        {title:'Ma gadji',duration: '4:21'}

    ];
};


const selectedSongReducer = (selectedSong=null, action) => {
 if(action.type=='SONG_SELECTED') {
     return action.payload;
 }
 return selectedSong;
};


export default combineReducers(
    {
        songs: songsReducer,
        selectedSong:selectedSongReducer
    });