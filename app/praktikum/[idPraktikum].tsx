import { Pressable, ScrollView, Text } from "react-native";

import {
  router,
  useLocalSearchParams,
} from "expo-router";

import { useEffect, useState } from "react";

import {
  ModulCard,
  PertemuanCard,
} from "@/components";

import { praktikums } from "@/constants";

import {
  filterPertemuans,
  getMatkul,
  getModulsByMatkul,
  getPertemuansByPraktikum,
} from "@/functions";

import { praktikumStyles } from "@/styles";

type Filter = "semua" | "hadir" | "tidakHadir";

export default function PraktikumDetail() {
  const { idPraktikum } =
    useLocalSearchParams<{
      idPraktikum: string;
    }>();

  const [filter, setFilter] =
    useState<Filter>("semua");

  const [filteredPertemuans, setFilteredPertemuans] =
    useState(
      getPertemuansByPraktikum(
        Number(idPraktikum)
      )
    );

  const praktikum = praktikums.find(
    (item) =>
      item.idPraktikum === Number(idPraktikum)
  );

  useEffect(() => {
    const data = getPertemuansByPraktikum(
      Number(idPraktikum)
    );

    const result = filterPertemuans(
      data,
      filter
    );

    setFilteredPertemuans(result);
  }, [filter, idPraktikum]);

  function handleBack() {
    if (router.canGoBack()) {
      router.back();
    }
  }

  if (!praktikum) {
    return (
      <ScrollView
        contentContainerStyle={
          praktikumStyles.container
        }
      >
        <Text>
          Praktikum tidak ditemukan.
        </Text>

        {router.canGoBack() && (
          <Pressable onPress={handleBack}>
            <Text
              style={{
                marginTop: 20,
                fontWeight: "bold",
              }}
            >
              ← Kembali
            </Text>
          </Pressable>
        )}
      </ScrollView>
    );
  }

  const moduls = getModulsByMatkul(
    praktikum.idMatkul
  );

  return (
    <ScrollView
      contentContainerStyle={
        praktikumStyles.container
      }
    >

      <Text style={praktikumStyles.title}>
        Praktikum #{praktikum.idPraktikum}
      </Text>

      <Text
        style={{
          marginBottom: 20,
          fontSize: 16,
        }}
      >
        Mata Kuliah:{" "}
        {getMatkul(praktikum.idMatkul)}
      </Text>

      {/* MODUL */}
      <Text style={praktikumStyles.sectionTitle}>
        Modul
      </Text>

      {moduls.map((modul) => (
        <ModulCard
          key={modul.idModul}
          modul={modul}
        />
      ))}

      {/* KEHADIRAN */}
      <Text style={praktikumStyles.sectionTitle}>
        Kehadiran
      </Text>

      {/* FILTER */}
      <Text
        style={{
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Filter Kehadiran
      </Text>

      <Pressable
        onPress={() => setFilter("semua")}
        style={praktikumStyles.filterButton}
      >
        <Text>Semua</Text>
      </Pressable>

      <Pressable
        onPress={() => setFilter("hadir")}
        style={praktikumStyles.filterButton}
      >
        <Text>Hadir</Text>
      </Pressable>

      <Pressable
        onPress={() => setFilter("tidakHadir")}
        style={praktikumStyles.filterButton}
      >
        <Text>Tidak Hadir</Text>
      </Pressable>

      {/* HASIL FILTER */}
      {filteredPertemuans.map((pertemuan) => (
        <PertemuanCard
          key={pertemuan.idPertemuan}
          pertemuan={pertemuan}
        />
      ))}
    </ScrollView>
  );
}