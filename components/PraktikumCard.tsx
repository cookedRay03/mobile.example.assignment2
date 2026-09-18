/* =================== TABLE OF CONTENT ================= 
1.1: Import Section
1.2: Prop Declaration
1.3: Default Function
    2.1: Main Render
        3.1: Praktikum Name
        3.2: Praaktikum Lab
        3.3: Praktikum Instruktur
========================================================= */

// 1.1: Import Section
import { getInstruktur, getKelas, getLab, getMatkul } from "@/functions";
import { praktikumStyles } from "@/styles";
import type { Praktikum } from "@/types";
import { Text, View } from "react-native";

// 1.2: Props Declaration
type Props = { praktikum: Praktikum }; //[1]

// 1.3: Default Function
export default function PraktikumCard({ praktikum }: Props) { //[2]
    // 2.1: Main Render
    return (
    <View style={praktikumStyles.card}>
        {/* 3.1: Praktikum Name */}
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
            {getMatkul(praktikum.idMatkul)} {getKelas(praktikum.idKelas)} {/*[3]*/}
        </Text>

        {/* 3.2: Praaktikum Lab */}
        <Text style={praktikumStyles.text}>Lab: {getLab(praktikum.idLab)}</Text>{/*[3]*/}

        {/* 3.3: Praktikum Instruktur */}
        <Text style={praktikumStyles.text}>Instruktur: {getInstruktur(praktikum.idInstruktur)}</Text>{/*[3]*/}
    </View>
    );
}

/* ======================== EXPLANATION ========================
[1]:
const props: Props = {
  praktikum: { idPraktikum: number, idMatkul: number, idKelas: number, idLab: number, idInstruktur: number }
};
[2]: Ini berarti fungsi ini menerima parameter berupa Props (sesuai dengan yg kita deklarasikan sblmnya)
Propsnya hanya berisi 1 data aja tapi yaitu "praktikum" berisi idPraktikum, idMatkul, dll. 
[3]: Karena di const praktikum.ts hanya ada id nya saja bukan nama, maka kita perlu fungsi yang sudah kita buat
sebelumnya di @/functiom untuk mencocokkan id itu dengan nama matkul dan kelas dari const kelas.ts dan matkul.ts
=================================================================*/