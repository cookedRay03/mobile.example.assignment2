import { instrukturs } from "@/constants";

export function getInstruktur(idInstruktur: number): string {
    const instruktur = instrukturs.find(
        (item) => item.idInstruktur === idInstruktur
    ); // [1]
    return instruktur?.namaInstruktur ?? "Tidak ditemukan"; // [2]
}

/* ======================== EXPLANATION ========================
[1]: Ini kita mengambil namaInstruktur berdasarkan id
[2]: object?.prop adalah optional chaining. Artinya: Ambil props dari object, tetapi hanya jika object tidak null atau undefined.
Sementara ?? artinya kembalikan opsi dikanan jika object.prop tidak ada, jika ada ambil yang dikiri.
=================================================================*/