function getPoints(history) {
    let itemPoint = {
        'Moonlight': 120,
        'Goldqueen': 550,
        'Beras Parist': 1200,
        'Minyak Fatma': 2500
    }
    // write your code here
}

function getPrizes(point) {
    // write your code here
}

function betamart(pembeli) {
    // write your code here
}

console.log(
    betamart({
        name: 'Ilham',
        histories: [
            'Moonlight',
            'Goldqueen',
            'Beras Parist',
            'Moonlight',
            'Goldqueen',
            'Beras Parist',
            'Minyak Fatma',
            'Minyak Fatma',
            'Minyak Fatma',
            'Moonlight',
            'Goldqueen',
            'Goldqueen',
            'Moonlight',
            'Beras Parist',
            'Beras Parist',
            'Minyak Fatma',
            'Minyak Fatma',
            'Moonlight',
            'Moonlight'
        ]
    })
)

/*
{
  name: 'Ilham',
  belanjaanReport: { Moonlight: 6, Goldqueen: 4, 'Beras Parist': 4, 'Minyak Fatma': 5 },
  prizes: [ 'Voucher 10k', 'Sticker', 'Penggaris', 'Voucher 25k', 'Kinderboy' ]
}
*/

console.log(
    betamart({
        name: 'Kosasih',
        histories: [
            'Moonlight',
            'Moonlight',
            'Goldqueen',
            'Moonlight',
            'Minyak Fatma',
            'Goldqueen',
            'Beras Parist',
            'Beras Parist',
            'Beras Parist',
            'Moonlight',
            'Minyak Fatma',
            'Minyak Fatma',
            'Moonlight',
            'Goldqueen',
            'Goldqueen',
            'Goldqueen',
            'Beras Parist',
            'Moonlight',
            'Moonlight',
            'Beras Parist',
            'Beras Parist',
            'Minyak Fatma',
            'Minyak Fatma',
            'Goldqueen',
            'Goldqueen',
            'Moonlight',
            'Moonlight',
            'Moonlight',
            'Moonlight'
        ]
    })
)

/*
{
  name: 'Kosasih',
  belanjaanReport: { Moonlight: 11, Goldqueen: 7, 'Minyak Fatma': 5, 'Beras Parist': 6 },
  prizes: [
    'Voucher 10k',
    'Sticker',
    'Penggaris',
    'Voucher 25k',
    'Kinderboy',
    'Tissue'
  ]
}
*/

console.log(betamart());
// Tidak ada pembeli yang belanja