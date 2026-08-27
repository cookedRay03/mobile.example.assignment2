import { matkuls } from "@/constants";

export function getMatkul(idMatkul: number): string {
    const matkul = matkuls.find(
        (item) => item.idMatkul === idMatkul
    ); // [1]

    return matkul?.namaMatkul ?? "Tidak ditemukan"; //[2]
}

/* ======================== EXPLANATION ========================
[1]: Ini kita mengambil namaMatkul berdasarkan id
[2]: object?.prop adalah optional chaining. Artinya: Ambil props dari object, tetapi hanya jika object tidak null atau undefined.
Sementara ?? artinya kembalikan opsi dikanan jika object.prop tidak ada, jika ada ambil yang dikiri.
=================================================================*/