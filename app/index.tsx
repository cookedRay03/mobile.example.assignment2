/* =================== TABLE OF CONTENT ================= 
1.1: Import Section
1.2: Default Function
  2.1: Main Render
    3.1: "Daftar Praktikum" Text
    3.2: Map Praktikum Data
========================================================= */

// 1.1: Import Section
import { Text, View } from "react-native";
import { PraktikumCard } from "@/components";
import { praktikums } from "@/constants";
import { praktikumStyles } from "@/styles";

// 1.2: Default Function
export default function Index() {

  // 2.1: Main Render
  return (
  <View style={praktikumStyles.container}>

    {/* 3.1: "Daftar Praktikum" Text */}
    <Text style={praktikumStyles.title}> Daftar Praktikum </Text>

    {/* 3.2: Map Praktikum Data */}
    {praktikums.map(
      (praktikum) => ( <PraktikumCard key={praktikum.idPraktikum} praktikum={praktikum}/> ) // [1]
    )}

  </View>
  );
}

/* ======================== EXPLANATION ========================
[1]: Kita mengambil semua data praktikum dan menampilkannya satu-satu dengan map() menggunakan component PraktikumCard yg sudah kita buat
sebelumnya di @/components
=================================================================*/