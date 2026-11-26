class Karyawan {
    constructor(nama) {
        this.nama = nama;
    }

    info() {
        console.log("Karyawan: " + this.nama);
    }
}

class KaryawanTetap extends Karyawan {
    hitungLembur(jam) {
        console.log(
            this.nama + " lembur " + jam +
            " jam, upah Rp " + (jam * 50000) + "."
        );
    }
}

class KaryawanMagang extends Karyawan {
    terimaUangSaku(nominal) {
        console.log(
            this.nama + " menerima uang saku Rp " + nominal + "."
        );
    }
}

class Programmer extends KaryawanTetap {}

class Magang extends KaryawanMagang {}

class Desainer extends KaryawanTetap {}

function prosesLembur(daftar) {
    daftar.forEach((karyawan) => {
        karyawan.hitungLembur(3);
    });
}

function berikanUangSaku(daftar) {
    daftar.forEach((karyawan) => {
        karyawan.terimaUangSaku(1500000);
    });
}

const budi_3159 = new Programmer("Budi_3159");
const rina_3159 = new Magang("Rina_3159");
const sari_3159 = new Desainer("Sari_3159");

budi_3159.info();
rina_3159.info();
sari_3159.info();

prosesLembur([budi_3159, sari_3159]);
berikanUangSaku([rina_3159]);