import { Text, View } from "react-native";

import type { Modul } from "@/types";
import { modulStyles } from "@/styles";

type Props = {
    modul: Modul;
};

export default function ModulCard({ modul }: Props) {
    return (
        <View style={modulStyles.card}>
            <Text style={modulStyles.title}>
                Modul {modul.idModul}
            </Text>

            <Text style={modulStyles.text}>
                {modul.namaModul}
            </Text>
        </View>
    );
}