function songs(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let songNum = arr.shift();
    let typeSongs = arr.pop();
    let songsArr = [];
    for (const songInfo of arr) {
        let [type, name, duration] = songInfo.split('_');
        let song = new Song(type, name, duration);
        if (song.typeList === typeSongs) {
            songsArr.push(song);
        } else if (typeSongs === 'all') {
            songsArr.push(song);
        }
    }
    for (const song of songsArr) {
        console.log(song.name);
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);
console.log('--------------------------');
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);
console.log('--------------------------');
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);
console.log('--------------------------');