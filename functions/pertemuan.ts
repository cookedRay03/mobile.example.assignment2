import { pertemuans } from "@/constants";

export function getPertemuansByPraktikum(
  idPraktikum: number
) {
  return pertemuans.filter(
    (pertemuan) =>
      pertemuan.idPraktikum === idPraktikum
  );
}

export function filterPertemuans(
  data: typeof pertemuans,
  filter: "semua" | "hadir" | "tidakHadir"
) {
  if (filter === "semua") {
    return data;
  }

  if (filter === "hadir") {
    return data.filter(
      (pertemuan) => pertemuan.isHadir === true
    );
  }

  return data.filter(
    (pertemuan) => pertemuan.isHadir === false
  );
}