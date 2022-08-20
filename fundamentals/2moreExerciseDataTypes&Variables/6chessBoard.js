function chessBoard(squares) {
    console.log('<div class="chessboard">')
    let firstColor = 'black';
    for (let i = 0; i < squares; i++){
        console.log('  <div>');
        color = firstColor
        for (let i = 0; i < squares; i++){
            console.log(`    <span class="${color}"></span>`);
            color = color === 'black' ? 'white' : 'black';
        }
        firstColor = firstColor === 'black' ? 'white' : 'black';
        console.log('  </div>');
    }
    console.log('</div>');
}
chessBoard(4)