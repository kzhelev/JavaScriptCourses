function gramophone(band, album, song) {

    let bandLength = band.length;
    let albumLength = album.length;
    let songLength = song.length;

    let rotations = Math.ceil(((bandLength * albumLength) * songLength / 2 ) / 2.5);

    console.log(`The plate was rotated ${rotations} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');