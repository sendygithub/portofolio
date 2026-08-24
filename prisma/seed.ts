import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString =
  process.env.DATABASE_URL!;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  // Hapus semua data lama dulu
  // await prisma.apb.deleteMany();
  console.log("Data lama dihapus.");

  const dummyData = [
    {
      apb: "0600",
      noSpek: "PB 30-04",
      sudut: "60",
      lebar: "735",
      toleransi: "5mm",
    },

    {
      apb: "0622/435",
      noSpek: "PB 32-04",
      sudut: "61",
      lebar: "915",
      toleransi: "5mm",
    },
    {
      apb: "0626/444",
      noSpek: "PB 32-04",
      sudut: "61",
      lebar: "960",
      toleransi: "5mm",
    },
    {
      apb: "0625/441/442",
      noSpek: "PB 32-04",
      sudut: "61",
      lebar: "955",
      toleransi: "5mm",
    },
    {
      apb: "0627",
      noSpek: "PB 32-04",
      sudut: "61",
      lebar: "965",
      toleransi: "5mm",
    },
    {
      apb: "0633",
      noSpek: "PB 32-04",
      sudut: "61",
      lebar: "1010",
      toleransi: "5mm",
    },
    {
      apb: "0635",
      noSpek: "PB 32-04",
      sudut: "61",
      lebar: "1025",
      toleransi: "5mm",
    },
    {
      apb: "0640",
      noSpek: "PB 32-04",
      sudut: "61",
      lebar: "1070",
      toleransi: "5mm",
    },

    {
      apb: "0643/426",
      noSpek: "PB 33-04",
      sudut: "61",
      lebar: "1095",
      toleransi: "5mm",
    },
    {
      apb: "0645",
      noSpek: "PB 33-04",
      sudut: "61",
      lebar: "1130",
      toleransi: "5mm",
    },
    {
      apb: "0647",
      noSpek: "PB 33-04",
      sudut: "61",
      lebar: "620",
      toleransi: "5mm",
    },

    {
      apb: "0648",
      noSpek: "PB 33-04",
      sudut: "62",
      lebar: "650",
      toleransi: "5mm",
    },
    {
      apb: "0650",
      noSpek: "PB 33-04",
      sudut: "62",
      lebar: "685",
      toleransi: "5mm",
    },
    {
      apb: "0651/451",
      noSpek: "PB 33-04",
      sudut: "62",
      lebar: "695",
      toleransi: "5mm",
    },
    {
      apb: "0652",
      noSpek: "PB 33-04",
      sudut: "62",
      lebar: "720",
      toleransi: "5mm",
    },
    {
      apb: "0653",
      noSpek: "PB 33-04",
      sudut: "62",
      lebar: "730",
      toleransi: "5mm",
    },
    {
      apb: "0654",
      noSpek: "PB 33-04",
      sudut: "62",
      lebar: "755",
      toleransi: "5mm",
    },
    {
      apb: "0656/455",
      noSpek: "PB 33-04",
      sudut: "62",
      lebar: "795",
      toleransi: "5mm",
    },
    {
      apb: "0657/456",
      noSpek: "PB 33-04",
      sudut: "62",
      lebar: "830",
      toleransi: "5mm",
    },
    {
      apb: "0653/453",
      noSpek: "PB 33-04",
      sudut: "62",
      lebar: "730",
      toleransi: "5mm",
    },

    {
      apb: "0661/476/477",
      noSpek: "PB 34-06",
      sudut: "62",
      lebar: "775",
      toleransi: "5mm",
    },
    {
      apb: "0662",
      noSpek: "PB 34-06",
      sudut: "62",
      lebar: "735",
      toleransi: "5mm",
    },
    {
      apb: "0663/460",
      noSpek: "PB 34-06",
      sudut: "62",
      lebar: "920",
      toleransi: "5mm",
    },
    {
      apb: "0664",
      noSpek: "PB 34-06",
      sudut: "62",
      lebar: "700",
      toleransi: "5mm",
    },
    {
      apb: "0665",
      noSpek: "PB 34-06",
      sudut: "62",
      lebar: "835",
      toleransi: "5mm",
    },
    {
      apb: "0666",
      noSpek: "PB 34-06",
      sudut: "62",
      lebar: "960",
      toleransi: "5mm",
    },
    {
      apb: "0668/463",
      noSpek: "PB 34-06",
      sudut: "62",
      lebar: "980",
      toleransi: "5mm",
    },
    {
      apb: "0669",
      noSpek: "PB 34-06",
      sudut: "62",
      lebar: "1010",
      toleransi: "5mm",
    },
    {
      apb: "0670",
      noSpek: "PB 34-06",
      sudut: "62",
      lebar: "800",
      toleransi: "5mm",
    },
    {
      apb: "0672",
      noSpek: "PB 34-06",
      sudut: "62",
      lebar: "1060",
      toleransi: "5mm",
    },

    {
      apb: "0690/512",
      noSpek: "PB 35-08",
      sudut: "62",
      lebar: "930",
      toleransi: "5mm",
    },
    {
      apb: "0691",
      noSpek: "PB 35-08",
      sudut: "62",
      lebar: "1140",
      toleransi: "5mm",
    },
    {
      apb: "0692",
      noSpek: "PB 35-08",
      sudut: "62",
      lebar: "1100",
      toleransi: "5mm",
    },
    {
      apb: "0693/513",
      noSpek: "PB 35-08",
      sudut: "62",
      lebar: "1030",
      toleransi: "5mm",
    },

    {
      apb: "0707",
      noSpek: "PB 36-07",
      sudut: "64",
      lebar: "850",
      toleransi: "5mm",
    },
    {
      apb: "0717/277",
      noSpek: "PB 36-07",
      sudut: "64",
      lebar: "1050",
      toleransi: "5mm",
    },
    {
      apb: "0719/295",
      noSpek: "PB 36-07",
      sudut: "64",
      lebar: "945",
      toleransi: "5mm",
    },

    {
      apb: "0724",
      noSpek: "PB 37-08",
      sudut: "65",
      lebar: "846",
      toleransi: "5mm",
    },
    {
      apb: "0725",
      noSpek: "PB 37-08",
      sudut: "65",
      lebar: "816",
      toleransi: "5mm",
    },
    {
      apb: "0726",
      noSpek: "PB 37-08",
      sudut: "65",
      lebar: "791",
      toleransi: "5mm",
    },
    {
      apb: "0728/372/3/4",
      noSpek: "PB 37-08",
      sudut: "62",
      lebar: "975",
      toleransi: "5mm",
    },
    {
      apb: "0732/415",
      noSpek: "PB 37-08",
      sudut: "60",
      lebar: "665",
      toleransi: "5mm",
    },

    {
      apb: "0742/511",
      noSpek: "PB 38-05",
      sudut: "62",
      lebar: "1050",
      toleransi: "5mm",
    },
    {
      apb: "0743",
      noSpek: "PB 38-05",
      sudut: "62",
      lebar: "1060",
      toleransi: "5mm",
    },
    {
      apb: "0752",
      noSpek: "PB 38-05",
      sudut: "62",
      lebar: "610",
      toleransi: "5mm",
    },

    {
      apb: "0772",
      noSpek: "PB 39-06",
      sudut: "59",
      lebar: "765",
      toleransi: "5mm",
    },
    {
      apb: "0778/524/525",
      noSpek: "PB 39-06",
      sudut: "62",
      lebar: "680",
      toleransi: "5mm",
    },
  ];

  // const dummyData = [
  //   {
  //     apb: "APB-001",
  //     noSpek: "SPK-2024-001",
  //     sudut: "90°",
  //     lebar: "1200mm",
  //     toleransi: "±0.5mm",
  //   },
  //   {
  //     apb: "APB-002",
  //     noSpek: "SPK-2024-002",
  //     sudut: "45°",
  //     lebar: "1000mm",
  //     toleransi: "±0.2mm",
  //   },
  //   {
  //     apb: "APB-003",
  //     noSpek: "SPK-2024-003",
  //     sudut: "60°",
  //     lebar: "1500mm",
  //     toleransi: "±0.3mm",
  //   },
  //   {
  //     apb: "APB-004",
  //     noSpek: "SPK-2024-004",
  //     sudut: "30°",
  //     lebar: "900mm",
  //     toleransi: "±0.1mm",
  //   },
  //   {
  //     apb: "APB-005",
  //     noSpek: "SPK-2024-005",
  //     sudut: "120°",
  //     lebar: "1800mm",
  //     toleransi: "±0.4mm",
  //   },
  //   {
  //     apb: "APB-006",
  //     noSpek: "SPK-2024-006",
  //     sudut: "90°",
  //     lebar: "1100mm",
  //     toleransi: "±0.5mm",
  //   },
  //   {
  //     apb: "APB-007",
  //     noSpek: "SPK-2024-007",
  //     sudut: "75°",
  //     lebar: "1300mm",
  //     toleransi: "±0.2mm",
  //   },
  //   {
  //     apb: "APB-008",
  //     noSpek: "SPK-2024-008",
  //     sudut: "15°",
  //     lebar: "800mm",
  //     toleransi: "±0.3mm",
  //   },
  //   {
  //     apb: "APB-009",
  //     noSpek: "SPK-2024-009",
  //     sudut: "180°",
  //     lebar: "2000mm",
  //     toleransi: "±0.6mm",
  //   },
  //   {
  //     apb: "APB-010",
  //     noSpek: "SPK-2024-010",
  //     sudut: "90°",
  //     lebar: "1400mm",
  //     toleransi: "±0.1mm",
  //   },
  // ];

  //   for (const data of dummyData) {
  //     await prisma.apb.create({ data });
  //   }

  //   console.log(`Berhasil menambahkan ${dummyData.length} data dummy.`);
  // }

  await prisma.apb.createMany({
    data: dummyData,
  });

  console.log(`Berhasil menambahkan ${dummyData.length} data.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
