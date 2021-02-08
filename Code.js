/*
* Name      : miniSheetDB Library
* Versi     : 1
* Release   : 8 Februari 2021
*
* Programmer: Hasanudin H Syafaat
* Telegram  : @hasanudinhs 
* Email     : banghasan@gmail.com
*
* ID Legacy : MElMS4ozme33Zwbcq7h7mRqZTb1melOAr
* New Editor: 1NLQhvkXR9BHzlLELujjwFuEwY9rKaSPGZdE9Fqlfuccza0T4Fe3n5kXk
*
* Fungsi: menjadikan spreadsheet sebagai database
*
* Support Grup Telegram @botindonesia
* Diskusi dan sharing di sana ya!
*
*/

var init = function (ssID, namaSheet='Sheet1', regex = false) {
    this.ssID = ssID;
    this.namaSheet = namaSheet;
    this.sheet = SpreadsheetApp.openById(this.ssID).getSheetByName(this.namaSheet);
  
    this.regex = regex;
  
    this.baris = 1;
    this.kolom = 1;
    this.nKolom = 2;
    this.nBaris = false;
  
    // versi perdana, argument sementara di tulis manual dulu
  
    this.getValue = function () {
      // getValue('A1')
      if (arguments.length == 1) return this.sheet.getRange(arguments[0]).getValue();
      // getValue(1,1)
      if (arguments.length == 2) return this.sheet.getRange(arguments[0], arguments[1]).getValue();
      return false;
    }
  
    this.getValues = function () {
      // getValues('A1')
      if (arguments.length == 1) return this.sheet.getRange(arguments[0]).getValues();
      // getValues(1,1)
      if (arguments.length == 2) return this.sheet.getRange(arguments[0], arguments[1]).getValues();
      // getValues(1,1,2)
      if (arguments.length == 3) return this.sheet.getRange(arguments[0], arguments[1], arguments[2]).getValues();
      // getValues(1,1,2,2)
      if (arguments.length == 4) return this.sheet.getRange(arguments[0], arguments[1], arguments[2], arguments[3]).getValues();
      return false;
    }
  
    this.setValue = function () {
      // setValue('A1', val)
      if (arguments.length == 2) return this.sheet.getRange(arguments[0]).setValue(arguments[1]);
      // setValue(1,1, val)
      if (arguments.length == 3) return this.sheet.getRange(arguments[0], arguments[1]).setValue(arguments[2]);
      return false;
    }
  
    this.setValues = function () {
      // setValues('A1', val)
      if (arguments.length == 2) return this.sheet.getRange(arguments[0]).setValues(arguments[1]);
      // setValues(1,1, val)
      if (arguments.length == 3) return this.sheet.getRange(arguments[0], arguments[1]).setValues(arguments[2]);
  
      // setValues(1,1, 2, val)
      if (arguments.length == 4) return this.sheet.getRange(arguments[0], arguments[1], arguments[2]).setValues(arguments[3]);
      // setValues(1,1, 2, 2, val)
      if (arguments.length == 5) return this.sheet.getRange(arguments[0], arguments[1], arguments[2], arguments[3]).setValues(arguments[4]);
      return false;
    }
  
    this.getAll = function () {
      // lastRow harus di jalankan ulang, agar terupdate
      var lastRow = this.sheet.getLastRow() - (this.baris - 1)
      return this.sheet
        .getRange(this.baris, this.kolom, lastRow, this.nKolom)
        .getValues();
    }
    
 
    this.get = function (kunci) {
      var dataAll = this.getAll();
  
      if (!this.has(kunci)) return null;
  
      if (this.regex) {
        var data = dataAll.find(e => new RegExp('^' + e[0] + '$').exec(kunci));
        //var data = data
      } else {
        var data = dataAll.find(e => e[0] == kunci);
      }
  
      //  kembalikan dengan format yang mudah dibaca
      var hasil = {};
      if (this.nKolom > 2) {
        hasil.id = data[0];
        var datas = []
        for (i = 2; i <= this.nKolom; i++)
          datas.push(data[i - 1]);
        hasil.data = datas;
  
      } else {
        var hasil = {
          id: data[0],
          data: data[1]
        }
      }
  
      return hasil;
  
    }
    
    this.getData = function(kunci) { return this.get(kunci); }
  
    // cek ada kunci yang di maksudkan atau tidak
    this.has = function (kunci) {
      var dataAll = this.getAll();
      var rex = new RegExp(`^${kunci}$`, 'i');
      // if (this.regex) return dataAll.filter(e => rex.exec(e[0])).length ? true : false
      if (this.regex) return dataAll.filter(e => new RegExp('^' + e[0] + '$').exec(kunci)).length ? true : false
      return dataAll.filter(e => e[0] == kunci).length ? true : false
    }
  };
  