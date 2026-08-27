import { kelases } from "@/constants";

export function getKelas(idKelas: number): string {
    const kelas = kelases.find(
        (item) => item.idKelas === idKelas
    ); // [1]

    return kelas?.namaKelas ?? "Tidak ditemukan"; // [2]
}

/* ======================== EXPLANATION ========================
[1]: Ini kita mengambil namaKelas berdasarkan id
[2]: object?.prop adalah optional chaining. Artinya: Ambil props dari object, tetapi hanya jika object tidak null atau undefined.
Sementara ?? artinya kembalikan opsi dikanan jika object.prop tidak ada, jika ada ambil yang dikiri.
=================================================================*/