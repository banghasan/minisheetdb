# mini Sheet DB

## Fungsi

Miniatur database yang menggunakan google spreadsheet untuk Google Apps Script.

## Dokumentasi

![Sheet Sample](https://blog.banghasan.com/note/assets/images/GAS2/sheetDB.jpg)

Contoh Sheet: [https://docs.google.com/spreadsheets/d/1B8JSBXqV0sIFZsuwDHQ8wOADFIAxgB7WDpJRh1JUei8/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1B8JSBXqV0sIFZsuwDHQ8wOADFIAxgB7WDpJRh1JUei8/edit?usp=sharing)

Selengkapnya ada di [blog.banghasan.com](http://j.mp/minisheetdb)


## Support

Diskusi, saran, masukkan silakan bergabung di Grup Telegram @botindonesia


## Pengenal

Berikut Google Script Library -nya :

- ID Legacy : `MElMS4ozme33Zwbcq7h7mRqZTb1melOAr`
- New Editor: `1NLQhvkXR9BHzlLELujjwFuEwY9rKaSPGZdE9Fqlfuccza0T4Fe3n5kXk`

> Sesuaikan dengan Editor nya, dan selalu pilih yang versi dengan angka paling besar.

## Contoh Code

![test Mini Sheet DB](https://blog.banghasan.com/note/assets/images/GAS2/testMiniDB.jpg)

Simple:

```javascript
var db = new miniSheetDB.init('1B8JSBXqV0sIFZsuwDHQ8wOADFIAxgB7WDpJRh1JUei8');
db.regex = true;

function testGetALL() {
    var hasil = db.getAll();
    Logger.log(hasil);
}

function testGetKunci() {
    var hasil = db.get('nama');
    Logger.log(hasil);
}

```

## Dokumentasi

### Inisiasi

    var db = new miniSheetDB.init(sheetID, namaSheet='Sheet1', regex = true);

Contoh:
    
    var db = new miniSheetDB.init('1B8JSBXqV0sIFZsuwDHQ8wOADFIAxgB7WDpJRh1JUei8');


Keterangan

- `sheetID` ID Sheet yang di dapat dari Google Spreadsheet
- `namaSheet` nama sheet, defaultnya adalah `Sheet1`
- `regex` apakah diaktifkan mode pengecekan dengan metode regex? defaultnya false.

Jika regex false, huruf besar kecil akan dibedakan.

Kata `aku` berbeda dengan `AKU`, `Aku`, `aKu`, dst.


### Parameter / Method

Paramater untuk mengonfig mini sheet DB nya. termasuk juga daftar method nya.

- `ssID` untuk menset / mengubah ssID nya.
- `namaSheet` (Sheet1) untuk menset / mengubah nama sheet nya.
- `sheet` kunci utama spreadsheet id.
- `regex` (false) untuk mengaktif/nonaktifkan regex nya. Contoh: `db.regex = true`
- `baris` (1) alamat baris dimulai, di set ke `getRange`.
- `kolom` (1) alamat kolom dimulai, di set ke `getRange`.
- `nKolom`(2) jumlah kolom yang akan diproses (ditampilkan), di set ke `getRange`.
- `nBaris` (false) jumlah baris yang akan diproses (ditampilan), di set ke `getRange`.

- `getValue(address)` mendapatkan nilai dari alamat shel. Contoh: `var hasil = db.getValue('A1');`
- `getValue(baris, kolom)` mendapatkan nilai dari alamat shel. Contoh: `var hasil = db.getValue(1,1);`

- `getValues(address)` mendapatkan nilai dari alamat shel. Contoh: `var hasil = db.getValues('A1');`
- `getValues(baris, kolom)` mendapatkan nilai dari alamat shel. Contoh: `var hasil = db.getValues(1,1);`
- `getValues(baris, kolom, nBaris)` mendapatkan nilai dari alamat shel. Contoh: `var hasil = db.getValues(1,1,2);`
- `getValues(baris, kolom, nBaris, nKolom)` mendapatkan nilai dari alamat shel. Contoh: `var hasil = db.getValues(1,1,1,2);`


- `setValue(address, nilai)` mengisi nilai ke alamat shel yang dituju. Contoh: `db.setValue('A2', 'Hasan')`
- `setValue(baris, kolom, nilai)` mengisi nilai ke alamat shel yang dituju. Contoh: `db.setValue(2,1, 'Hasan')`

- `setValues(address, nilai)` mengisi nilai ganda ke alamat shel yang dituju. Contoh: `db.setValues('A2', [['Hasan']])`
- `setValues(baris, kolom, nilai)` mengisi nilai ke alamat shel yang dituju. Contoh: `db.setValue(2,1, [['Hasan']])`
- `setValues(baris, kolom, nilai, nBaris)` mengisi nilai ke alamat shel yang dituju. Contoh: `db.setValues(2, 1, 2,[ ['Hasanudin'],['Syafaat'] ])`
- `setValues(baris, kolom, nilai, nBaris, nKolom)` mengisi nilai ke alamat shel yang dituju. Contoh: `db.setValues(2, 1, 2, 2, [ ['bang', 'Hasan'],['Husain', 'Syafaat'] ])`

- `has(kunci)` mengecek kunci ada atau tidak. Hasil true/false. Contoh: `db.has(kunci)`
- `get(kunci)` mendapatkan data sesuai kunci. Contoh: `db.get(kunci)`
- `getAll()` mendapatkan semua data.

## Video

Ikuti materi video di youtube:

- [PlayList TIPS TRIK](https://www.youtube.com/playlist?list=PLcHeM3NRSws4v2y2pkyfJ_Zbs3uw3QOS8)
- [PlayList GAS-2](https://www.youtube.com/playlist?list=PLcHeM3NRSws4BVgNv-No3L55Azey1oQ-x)
- [PlayList GAS-1](https://www.youtube.com/playlist?list=PLcHeM3NRSws5yFYHG0l5AVT97xinQyeaK)