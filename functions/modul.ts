import { moduls } from "@/constants";

export function getModulsByMatkul(
    idMatkul: number
    ) {
    return moduls.filter(
        (modul) => modul.idMatkul === idMatkul
    );
}