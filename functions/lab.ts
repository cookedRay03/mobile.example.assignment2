import { labs } from "@/constants";

export function getLab(idLab: number): string {
    const lab = labs.find(
        (item) => item.idLab === idLab
    ); // [1]

    return lab?.namaLab ?? "Tidak ditemukan"; // [2]
}

/* ======================== EXPLANATION ========================
[1]: Ini kita mengambil namaLab berdasarkan id
[2]: object?.prop adalah optional chaining. Artinya: Ambil props dari object, tetapi hanya jika object tidak null atau undefined.
Sementara ?? artinya kembalikan opsi dikanan jika object.prop tidak ada, jika ada ambil yang dikiri.
=================================================================*/