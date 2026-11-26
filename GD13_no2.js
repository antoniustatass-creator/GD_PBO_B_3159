
const kamera = {
    ambilFoto() {
        console.log(this.nama + " mengambil foto.");
    }
};

const internet = {
    bukaBrowser() {
        console.log(this.nama + " membuka browser.");
    }
};

const telepon = {
    panggil() {
        console.log(this.nama + " melakukan panggilan.");
    }
};


function applyCapabilities(Kelas, ...kemampuan) {
    kemampuan.forEach((fitur) => {
        Object.assign(Kelas.prototype, fitur);
    });
}

class TabletWifi {
    constructor(nama) {
        this.nama = nama;
    }
}

class PonselJadul {
    constructor(nama) {
        this.nama = nama;
    }
}

applyCapabilities(TabletWifi, kamera, internet);
applyCapabilities(PonselJadul, telepon);

const tablet_3159 = new TabletWifi("Tablet_3159");
const ponsel_3159 = new PonselJadul("Ponsel_3159");

tablet_3159.ambilFoto();
tablet_3159.bukaBrowser();

ponsel_3159.panggil();

console.log(
    "Ponsel_3159 bisa mengambil foto?",
    typeof ponsel_3159.ambilFoto === "function"
);

console.log(
    "Tablet_3159 bisa melakukan panggilan?",
    typeof tablet_3159.panggil === "function"
);