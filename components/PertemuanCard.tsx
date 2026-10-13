import { Text, View } from "react-native";

import type { Pertemuan } from "@/types";
import { pertemuanStyles } from "@/styles";

type Props = {
  pertemuan: Pertemuan;
};

export default function PertemuanCard({
    pertemuan,
}: Props) {
    return (
        <View style={pertemuanStyles.card}>
            <Text style={pertemuanStyles.title}>
                {pertemuan.namaPertemuan}
            </Text>

            <Text
                style={{
                fontSize: 16,
                fontWeight: "bold",
                }}
            >
                {pertemuan.isHadir
                ? "Hadir"
                : "Tidak Hadir"}
            </Text>
        </View>
    );
}