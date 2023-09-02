// BUYUT TINO - Buyut Tino punya anak 6
// B.Hera /B.Sabiya punya putu 50

const silsilahKeluarga = {
  data: [
    { name: "Mak Biani" },
    { name: "Makjeng Samua" },
    { name: "Makjeng Saniah" },
    { name: "B. Nitri" },
    {
      name: "Mak On/Mion",
      anak: [
        { name: "P. Arsiti" },
        { name: "P. Rombiyati" },
        { name: "B.RI" },
        { name: "B. Arjab" },
      ],
    },
    {
      name: "B.Hera",
      anak: [
        {
          name: "Hera / BSabiya",
          anak: [
            {
              name: "Pak Siama",
              anak: [
                { name: "Sarwan" },
                { name: "Hj.Samolan" },
                { name: "Sunar" },
                { name: "Sarwaton" },
                { name: "Sarmi" },
                { name: "Sayu" },
                { name: "Siran" },
              ],
            },
            {
              name: "Buamar / Sarimun",
              anak: [
                {
                  name: "Suara/B.Masri",
                  anak: [
                    { name: "Seniti" },
                    { name: "Manisi" },
                    { name: "Tina" },
                    { name: "Sakur" },
                    { name: "Wage" },
                    { name: "Musrifah" },
                    { name: "Rosida" },
                  ],
                },
                {
                  name: "Buamar",
                  anak: [
                    { name: "Sumarto" },
                    { name: "Agus Zunaidi" },
                    { name: "Aminatujjuhriyah" },
                  ],
                },
                {
                  name: "Buamin",
                  anak: [
                    { anak: "Bunasri" },
                    { anak: "Suudi" },
                    { anak: "Walija" },
                    { anak: "Imam Safii" },
                    { anak: "Wiwitno Wati" },
                    { anak: "Anik Rimbawati" },
                    { anak: "Abdulloh Hairi" },
                  ],
                },
                {
                  name: "Bunawan",
                  anak: [
                    { name: "Abd Muiz Baya" },
                    { name: "Ahmad Hilmi" },
                    { name: "Saidatun Hadiroh" },
                    { name: "Idris Marbawi" },
                  ],
                },
                {
                  name: "Bukari",
                  anak: [
                    { name: "Ahmad Wahyudi" },
                    { name: "Suud" },
                    { name: "Uswatun Hasanah" },
                    { name: "Zainul Mustofa" },
                  ],
                },
                {
                  name: "Bunati",
                  anak: [
                    { name: "Muhammad Yunus Zailani" },
                    { name: "Misbahul Munir" },
                  ],
                },
                {
                  name: "Buana",
                  anak: [
                    { name: "Siti Fatimah" },
                    { name: "Siti Aminah" },
                    { name: "Nurfadilah" },
                    { name: "Hoirul Musthofa" },
                  ],
                },
                {
                  name: "Abd. Hamid",
                  anak: [
                    { name: "Zumrotul Muttaqin" },
                    { name: "Mariyyatul Qibtiyyah" },
                  ],
                },
              ],
            },
            {
              name: "P. Nur",
              anak: [
                { name: "Markaton" },
                { name: "Marsali" },
                { name: "Satini" },
                { name: "Siran" },
                { name: "Hasan" },
                { name: "Buhori" },
              ],
            },
            {
              name: "P. Mistali/Sayali",
              anak: [
                { name: "H.Satimin" },
                { name: "Satira" },
                { name: "Sati" },
                { name: "Satiran" },
              ],
            },
            {
              name: "B.Mutarib/Asmona",
              anak: [
                { name: "Mutarib" },
                { name: "Talim" },
                { name: "Mutina" },
                { name: "Musiyam" },
                { name: "Musira" },
                { name: "Rasima" },
                { name: "Sumiati" },
                { name: "Mista" },
              ],
            },
            {
              name: "P.Wari/Sanen",
              anak: [
                { name: "Wari" },
                { name: "Seniti" },
                { name: "Ami" },
                { name: "Rumi" },
                { name: "Senimo" },
              ],
            },
            {
              name: "P. Marsam/Tamar",
              anak: [
                { name: "Marsan/H.Misbahul Munir" },
                { name: "Saroya" },
                { name: "Sla" },
                { name: "Miyasin" },
                { name: "Hj.Marpik" },
              ],
            },
            {
              name: "P. Suta/Sayan",
              anak: [
                { name: "Sani" },
                { name: "Sali" },
                { name: "Satikan" },
                { name: "Satiman" },
                { name: "Buama" },
                { name: "Munadifah" },
              ],
            },
          ],
        },
        { name: "B. Tawani" },
        { name: "B.Sugar" },
        { name: "P.Satrimon" },
        { name: "P.Sariyab" },
      ],
    },
  ],
};

const root = document.getElementById("root");

const Title = document.createElement("h1");
Title.textContent = "Silsilah Keluarga Buyut Tino";
const wrapperData = document.createElement("div");
wrapperData.style.display = "flex";
wrapperData.style.justifyContent = "space-between";
wrapperData.style.width = "80vw";

const dataFitur = document.createElement("div");
dataFitur.textContent = "Profile";

silsilahKeluarga.data.forEach((item) => {
  const namaKeluarga = document.createElement("p");
  namaKeluarga.textContent = item.name;
  namaKeluarga.style.backgroundColor = "yellow";

  wrapperData.appendChild(namaKeluarga);
});

console.log(silsilahKeluarga.data);
root.append(Title);
root.append(dataFitur);
root.append(wrapperData);
