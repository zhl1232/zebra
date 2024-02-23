// Design for  zebrAPI which is the backbone of the Aby Zebra web app

import images from "./images/index.js";
import sounds from "./sounds/index.js";
import { animalListItem } from "../declarations/animalListItem";

/////////////////////////////////////////////////////////////////////////
//////////////////////////////// SCIENCE ////////////////////////////////
/////////////////////////////////////////////////////////////////////////

export const scienceArray: animalListItem[] = [
  {
    id: "alligator",
    value: "A",
    clicked: false,
    image: images.animals.alligator,
    name: {
      en: {
        text: "Alligator",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/alligator_ipbeqb.mp3",
      },
      es: {
        text: "Caimán",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1696655872/animal-audio-ES/full-names/caiman.m4a",
      },
    },
    tiles: {
      en: ["Al-li-", "ga-", "tor"],
      es: ["Cai-", "mán"],
    },
    syllables: {
      en: {
        text: ["Al", "li", "ga", "tor"],
        audio: {
          al: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/alligator_1_pfcrda.mp3",
          li: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/alligator_2_upcmbv.mp3",
          ga: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/alligator_3_h1a4kp.mp3",
          tor: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/alligator_4_kl1tng.mp3",
        },
      },
      es: {
        text: ["Cai", "mán"],
        audio: {
          cai: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704751992/alphabet_list/syllables/ES/01-cai.m4a",
          mán: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704751992/alphabet_list/syllables/ES/02-man.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.alligator, sounds.animals.frog],
    funFacts: {
      en: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1705010071/alphabet_list/fun_facts/EN/alligator-1.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1705010072/alphabet_list/fun_facts/EN/alligator-2.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1705010071/alphabet_list/fun_facts/EN/alligator-3.m4a",
      ],
      es: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921598/alphabet_list/fun_facts/ES/caiman-1.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921598/alphabet_list/fun_facts/ES/caiman-2.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921599/alphabet_list/fun_facts/ES/caiman-3.m4a",
      ],
    },
    isLiked: false,
    category: "science",
    background: "bg-card-red",
  },
  {
    id: "baboon",
    value: "B",
    clicked: false,
    image: images.animals.baboon,
    name: {
      en: {
        text: "Baboon",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/baboon_f4s3in.mp3",
      },
      es: {
        text: "Mandril",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1696655872/animal-audio-ES/full-names/mandril.m4a",
      },
    },
    tiles: {
      en: ["Ba-boon"],
      es: ["Man-dril"],
    },
    syllables: {
      en: {
        text: ["Ba", "boon"],
        audio: {
          ba: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/baboon_1_itfivg.mp3",
          boon: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/baboon_2_ncorah.mp3",
        },
      },
      es: {
        text: ["Man", "dril"],
        audio: {
          man: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704752152/alphabet_list/syllables/ES/03-man.m4a",
          dril: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704752153/alphabet_list/syllables/ES/04-dril.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.chimpanzee, sounds.animals.frog],
    funFacts: {
      en: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1705010070/alphabet_list/fun_facts/EN/baboon-1.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1705010071/alphabet_list/fun_facts/EN/baboon-2.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1705010071/alphabet_list/fun_facts/EN/baboon-3.m4a",
      ],
      es: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1704993998/alphabet_list/fun_facts/ES/mandril-1.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1704994000/alphabet_list/fun_facts/ES/mandril-2.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1704993999/alphabet_list/fun_facts/ES/mandril-3.m4a",
      ],
    },
    isLiked: true,
    category: "science",
    background: "bg-card-red",
  },
  {
    id: "chimpanzee",
    value: "C",
    clicked: false,
    image: images.animals.chimpanzee,
    name: {
      en: {
        text: "Chimpanzee",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1671648469/animal-sounds/chimpanzee_fralis.mp3",
      },
      es: {
        text: "Chimpancé",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1696655872/animal-audio-ES/full-names/chimpance.m4a",
      },
    },
    tiles: {
      en: ["Chim-", "pan-", "zee"],
      es: ["Chim-", "pan-", "cé"],
    },
    syllables: {
      en: {
        text: ["Chim", "pan", "zee"],
        audio: {
          chim: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/chimpanzee_1_qcfs5u.mp3",
          pan: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/chimpanzee_2_besjij.mp3",
          zee: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/chimpanzee_3_c9jbgo.mp3",
        },
      },
      es: {
        text: ["Chim", "pan", "cé"],
        audio: {
          chim: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704752152/alphabet_list/syllables/ES/05-chim.m4a",
          pan: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704752153/alphabet_list/syllables/ES/06-pan.m4a",
          cé: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704752152/alphabet_list/syllables/ES/07-ce.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.chimpanzee, sounds.animals.frog],
    funFacts: {
      en: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1705010070/alphabet_list/fun_facts/EN/chimpanzee-1.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1705010071/alphabet_list/fun_facts/EN/chimpanzee-2.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1705010071/alphabet_list/fun_facts/EN/chimpanzee-3.m4a",
      ],
      es: ["audio.m4a", "audio.m4a", "audio.m4a"],
    },
    isLiked: false,
    category: "science",
    background: "bg-card-green",
  },
  {
    id: "dingo",
    value: "D",
    clicked: false,
    image: images.animals.dingo,
    name: {
      en: {
        text: "Dingo",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/dingo_vbeznb.mp3",
      },
      es: {
        text: "Dingo",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1696655871/animal-audio-ES/full-names/dingo.m4a",
      },
    },
    tiles: {
      en: ["Din-go"],
      es: ["Din-go"],
    },
    syllables: {
      en: {
        text: ["Din", "go"],
        audio: {
          din: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/dingo_1_uisizq.mp3",
          go: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/dingo_2_ksewju.mp3",
        },
      },
      es: {
        text: ["Din", "go"],
        audio: {
          din: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704752153/alphabet_list/syllables/ES/08-din.m4a",
          go: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704752153/alphabet_list/syllables/ES/09-go.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.dingo, sounds.animals.frog],
    funFacts: {
      en: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1705010071/alphabet_list/fun_facts/EN/dingo-1.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1705010072/alphabet_list/fun_facts/EN/dingo-2.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1705010072/alphabet_list/fun_facts/EN/dingo-3.m4a",
      ],
      es: ["audio.m4a", "audio.m4a", "audio.m4a"],
    },
    isLiked: false,
    category: "science",
    background: "bg-card-blue",
  },
  {
    id: "elephant",
    value: "E",
    clicked: false,
    image: images.animals.elephant,
    name: {
      en: {
        text: "Elephant",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/elephant_ja0xof.mp3",
      },
      es: {
        text: "Elefante",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1696655872/animal-audio-ES/full-names/elefante.m4a",
      },
    },
    tiles: {
      en: ["El-e-", "phant"],
      es: ["E-le-", "fan-te"],
    },
    syllables: {
      en: {
        text: ["El", "e", "phant"],
        audio: {
          el: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/elephant_1_x7njho.mp3",
          e: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/elephant_2_tpecbo.mp3",
          phant:
            "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/elephant_3_ifv1kp.mp3",
        },
      },
      es: {
        text: ["E", "le", "fan", "te"],
        audio: {
          e: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704752154/alphabet_list/syllables/ES/10-e.m4a",
          le: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704752152/alphabet_list/syllables/ES/11-le.m4a",
          fan: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704752154/alphabet_list/syllables/ES/12-fan.m4a",
          te: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704752153/alphabet_list/syllables/ES/13-te.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.elephant, sounds.animals.frog],
    funFacts: {
      en: ["audio.m4a", "audio.m4a", "audio.m4a"],
      es: ["audio.m4a", "audio.m4a", "audio.m4a"],
    },
    isLiked: false,
    category: "science",
    background: "bg-card-red",
  },
  {
    id: "frog",
    value: "F",
    clicked: false,
    image: images.animals.frog,
    name: {
      en: {
        text: "Frog",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/frog_hqdv08.mp3",
      },
      es: {
        text: "Rana",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1696655872/animal-audio-ES/full-names/rana.m4a",
      },
    },
    tiles: {
      en: ["Frog"],
      es: ["Ra-na"],
    },
    syllables: {
      en: {
        text: ["Frog"],
        audio: {
          frog: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/frog_1_ziaz9v.mp3",
        },
      },
      es: {
        text: ["Ra", "na"],
        audio: {
          ra: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704752154/alphabet_list/syllables/ES/14-ra.m4a",
          na: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704752153/alphabet_list/syllables/ES/15-na.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: {
      en: ["audio", "audio", "audio"],
      es: ["audio", "audio", "audio"],
    },
    isLiked: false,
    category: "science",
    background: "bg-card-yellow",
  },
  {
    id: "gorilla",
    value: "G",
    clicked: false,
    image: images.animals.gorilla,
    name: {
      en: {
        text: "Gorilla",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/gorilla_nu73cy.mp3",
      },
      es: {
        text: "Gorila",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1696655871/animal-audio-ES/full-names/gorila.m4a",
      },
    },
    tiles: {
      en: ["Go-", "ril-la"],
      es: ["Go-", "ri-la"],
    },
    syllables: {
      en: {
        text: ["Go", "ril", "la"],
        audio: {
          go: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/gorilla_1_ml8hee.mp3",
          ril: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/gorilla_2_e4b1vh.mp3",
          la: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/gorilla_3_lj7nc5.mp3",
        },
      },
      es: {
        text: ["Go", "ri", "la"],
        audio: {
          go: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704752906/alphabet_list/syllables/ES/16-go.m4a",
          ri: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704752906/alphabet_list/syllables/ES/17-ri.m4a",
          la: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704752904/alphabet_list/syllables/ES/18-la.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.gorilla, sounds.animals.frog],
    funFacts: {
      en: ["audio", "audio", "audio"],
      es: ["audio", "audio", "audio"],
    },
    isLiked: false,
    category: "science",
    background: "bg-card-green",
  },
  {
    id: "hyena",
    value: "H",
    clicked: false,
    image: images.animals.hyena,
    name: {
      en: {
        text: "Hyena",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/hyena_uvck0i.mp3",
      },
      es: {
        text: "Hiena",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1696655871/animal-audio-ES/full-names/hiena.m4a",
      },
    },
    tiles: {
      en: ["Hy-e-na"],
      es: ["Hie-na"],
    },
    syllables: {
      en: {
        text: ["Hy", "e", "na"],
        audio: {
          hy: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/hyena_1_nmxsgi.mp3",
          e: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/hyena_2_vbkgbo.mp3",
          na: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/hyena_3_nefma3.mp3",
        },
      },
      es: {
        text: ["Hie", "na"],
        audio: {
          hie: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704752905/alphabet_list/syllables/ES/19-hie.m4a",
          na: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704752906/alphabet_list/syllables/ES/20-na.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: {
      en: ["audio", "audio", "audio"],
      es: ["audio", "audio", "audio"],
    },
    isLiked: false,
    category: "science",
    background: "bg-card-green",
  },
  {
    id: "impala",
    value: "I",
    clicked: false,
    image: images.animals.impala,
    name: {
      en: {
        text: "Impala",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/impala_sz5oq8.mp3",
      },
      es: {
        text: "Impala",
        audio: "audio.m4a",
      },
    },
    tiles: {
      en: ["Im-", "pal-a"],
      es: ["Im-", "pa-la"],
    },
    syllables: {
      en: {
        text: ["Im", "pal", "a"],
        audio: {
          im: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/impala_1_uwkk50.mp3",
          pal: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/impala_2_qbm7el.mp3",
          a: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/impala_3_w5g2rc.mp3",
        },
      },
      es: {
        text: ["Im", "pa", "la"],
        audio: {
          im: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704752904/alphabet_list/syllables/ES/21-im.m4a",
          pa: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704753233/alphabet_list/syllables/ES/22-pa.m4a",
          la: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704753232/alphabet_list/syllables/ES/23-la.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.impala, sounds.animals.frog],
    funFacts: {
      en: ["", "", ""],
      es: ["", "", ""],
    },
    isLiked: false,
    category: "science",
    background: "bg-card-yellow",
  },
  {
    id: "jaguar",
    value: "J",
    clicked: false,
    image: images.animals.jaguar,
    name: {
      en: {
        text: "Jaguar",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/jaguar_augfbp.mp3",
      },
      es: {
        text: "Jaguar",
        audio: "audio.m4a",
      },
    },
    tiles: {
      en: ["Jag-", "u-ar"],
      es: ["Ja-guar"],
    },
    syllables: {
      en: {
        text: ["Jag", "u", "ar"],
        audio: {
          jag: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/jaguar_1_rsytkv.mp3",
          u: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/jaguar_2_yvkrbl.mp3",
          ar: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/jaguar_3_qjl6n0.mp3",
        },
      },
      es: {
        text: ["Ja", "guar"],
        audio: {
          ja: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704753232/alphabet_list/syllables/ES/24-ja.m4a",
          guar: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704753233/alphabet_list/syllables/ES/25-guar.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: {
      en: ["", "", ""],
      es: ["", "", ""],
    },
    isLiked: true,
    category: "science",
    background: "bg-card-blue",
  },
  {
    id: "koala",
    value: "K",
    clicked: false,
    image: images.animals.koala,
    name: {
      en: {
        text: "Koala",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/koala_xamipd.mp3",
      },
      es: {
        text: "Coala",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1696896594/animal-audio-ES/full-names/coala-name.m4a",
      },
    },
    tiles: {
      en: ["Ko-", "a-la"],
      es: ["Co-", "a-la"],
    },
    syllables: {
      en: {
        text: ["Ko", "a", "la"],
        audio: {
          ko: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/koala_1_aczrfi.mp3",
          a: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/koala_2_fzcj6v.mp3",
          la: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/koala_3_dlcaiz.mp3",
        },
      },
      es: {
        text: ["Co", "a", "la"],
        audio: {
          co: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704753232/alphabet_list/syllables/ES/26-co.m4a",
          a: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704753232/alphabet_list/syllables/ES/27-a.m4a",
          la: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704753232/alphabet_list/syllables/ES/28-la.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.okapi, sounds.animals.frog],
    funFacts: {
      en: ["", "", ""],
      es: ["", "", ""],
    },
    isLiked: true,
    category: "science",
    background: "bg-card-red",
  },
  {
    id: "lemur",
    value: "L",
    clicked: false,
    image: images.animals.lemur,
    name: {
      en: {
        text: "Lemur",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/lemur_ypjdmr.mp3",
      },
      es: {
        text: "Lémur",
        audio: "audio.m4a",
      },
    },
    tiles: {
      en: ["Le-mur"],
      es: ["Lé-mur"],
    },
    syllables: {
      en: {
        text: ["Le", "mur"],
        audio: {
          le: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/lemur_1_snqqev.mp3",
          mur: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/lemur_2_i58c0k.mp3",
        },
      },
      es: {
        text: ["Lé", "mur"],
        audio: {
          lé: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704753232/alphabet_list/syllables/ES/29-le.m4a",
          mur: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704753233/alphabet_list/syllables/ES/30-mur.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: {
      en: ["", "", ""],
      es: ["", "", ""],
    },
    isLiked: true,
    category: "science",
    background: "bg-card-blue",
  },
  {
    id: "macaw",
    value: "M",
    clicked: false,
    image: images.animals.macaw,
    name: {
      en: {
        text: "Macaw",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/macaw_dccou1.mp3",
      },
      es: {
        text: "Guacamaya",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1696896593/animal-audio-ES/full-names/guacamaya-name.m4a",
      },
    },
    tiles: {
      en: ["Ma-caw"],
      es: ["Gua-ca-", "ma-ya"],
    },
    syllables: {
      en: {
        text: ["Ma", "caw"],
        audio: {
          ma: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/macaw_1_v3cwcl.mp3",
          caw: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/macaw_2_qhttqp.mp3",
        },
      },
      es: {
        text: ["Gua", "ca", "ma", "ya"],
        audio: {
          gua: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754210/alphabet_list/syllables/ES/31-gua.m4a",
          ca: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754210/alphabet_list/syllables/ES/32-ca.m4a",
          ma: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754210/alphabet_list/syllables/ES/33-ma.m4a",
          ya: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754210/alphabet_list/syllables/ES/34-ya.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.macaw, sounds.animals.okapi],
    funFacts: {
      en: ["", "", ""],
      es: ["", "", ""],
    },
    isLiked: false,
    category: "science",
    background: "bg-card-green",
  },
  {
    id: "numbat",
    value: "N",
    clicked: false,
    image: images.animals.numbat,
    name: {
      en: {
        text: "Numbat",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/numbat_wpfejt.mp3",
      },
      es: {
        text: "Numbat",
        audio: "audio.m4a",
      },
    },
    tiles: {
      en: ["Num-bat"],
      es: ["Num-bat"],
    },
    syllables: {
      en: {
        text: ["Num", "bat"],
        audio: {
          num: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/numbat_1_db9zmv.mp3",
          bat: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/numbat_2_anah1d.mp3",
        },
      },
      es: {
        text: ["Num", "bat"],
        audio: {
          num: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754211/alphabet_list/syllables/ES/35-num.m4a",
          bat: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754210/alphabet_list/syllables/ES/36-bat.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: {
      en: ["", "", ""],
      es: ["", "", ""],
    },
    isLiked: true,
    category: "science",
    background: "bg-card-yellow",
  },
  {
    id: "okapi",
    value: "O",
    clicked: false,
    image: images.animals.okapi,
    name: {
      en: {
        text: "Okapi",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/okapi_ukx8lz.mp3",
      },
      es: {
        text: "Okapi",
        audio: "audio.m4a",
      },
    },
    tiles: {
      en: ["O-ka-pi"],
      es: ["O-ka-pi"],
    },
    syllables: {
      en: {
        text: ["O", "ka", "pi"],
        audio: {
          o: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/okapi_1_sw3dtv.mp3",
          ka: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/okapi_2_vfwlga.mp3",
          pi: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/okapi_3_h0flxr.mp3",
        },
      },
      es: {
        text: ["O", "ka", "pi"],
        audio: {
          o: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704763932/alphabet_list/syllables/ES/37-o.m4a",
          ka: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704763932/alphabet_list/syllables/ES/38-ka.m4a",
          pi: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704763933/alphabet_list/syllables/ES/39-pi.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.okapi, sounds.animals.okapi],
    funFacts: {
      en: ["", "", ""],
      es: ["", "", ""],
    },
    isLiked: false,
    category: "science",
    background: "bg-card-green",
  },
  {
    id: "panda",
    value: "P",
    clicked: false,
    image: images.animals.panda,
    name: {
      en: {
        text: "Panda",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/panda_o0bz0g.mp3",
      },
      es: {
        text: "Panda",
        audio: "audio.m4a",
      },
    },
    tiles: {
      en: ["Pan-da"],
      es: ["Pan-da"],
    },
    syllables: {
      en: {
        text: ["Pan", "da"],
        audio: {
          pan: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/panda_1_mpjyto.mp3",
          da: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/panda_2_uczfub.mp3",
        },
      },
      es: {
        text: ["Pan", "da"],
        audio: {
          pan: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704763933/alphabet_list/syllables/ES/40-pan.m4a",
          da: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704763932/alphabet_list/syllables/ES/41-da.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.panda, sounds.animals.okapi],
    funFacts: {
      en: ["", "", ""],
      es: ["", "", ""],
    },
    isLiked: false,
    category: "science",
    background: "bg-card-blue",
  },
  {
    id: "quetzal",
    value: "Q",
    clicked: false,
    image: images.animals.quetzal,
    name: {
      en: {
        text: "Quetzal",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/quetzal_ivuema.mp3",
      },
      es: {
        text: "Quetzal",
        audio: "audio.m4a",
      },
    },
    tiles: {
      en: ["Quet-", "zal"],
      es: ["Quet-", "zal"],
    },
    syllables: {
      en: {
        text: ["Quet", "zal"],
        audio: {
          quet: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/quetzal_1_m6re23.mp3",
          zal: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/quetzal_2_zrctiz.mp3",
        },
      },
      es: {
        text: ["Quet", "zal"],
        audio: {
          quet: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704763932/alphabet_list/syllables/ES/42-quet.m4a",
          zal: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704763932/alphabet_list/syllables/ES/43-zal.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.quetzal, sounds.animals.okapi],
    funFacts: {
      en: ["", "", ""],
      es: ["", "", ""],
    },
    isLiked: false,
    category: "science",
    background: "bg-card-red",
  },
  {
    id: "rhinoceros",
    value: "R",
    clicked: false,
    image: images.animals.rhinoceros,
    name: {
      en: {
        text: "Rhinoceros",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/rhino_zyp4fl.mp3",
      },
      es: {
        text: "Rinoceronte",
        audio: "audio.m4a",
      },
    },
    tiles: {
      en: ["Rhi-", "noc-", "er-os"],
      es: ["Ri-no-", "ce-", "ron-te"],
    },
    syllables: {
      en: {
        text: ["Rhi", "noc", "er", "os"],
        audio: {
          rhi: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/rhinoceros_1_thiixg.mp3",
          noc: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/rhinoceros_2_dwczll.mp3",
          er: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/rhinoceros_3_a5nanz.mp3",
          os: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/rhinoceros_4_ci6fpm.mp3",
        },
      },
      es: {
        text: ["Ri", "no", "ce", "ron", "te"],
        audio: {
          ri: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754210/alphabet_list/syllables/ES/44-ri.m4a",
          no: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754211/alphabet_list/syllables/ES/45-no.m4a",
          ce: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754209/alphabet_list/syllables/ES/46-ce.m4a",
          ron: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754211/alphabet_list/syllables/ES/47-ron.m4a",
          te: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754209/alphabet_list/syllables/ES/48-te.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.rhinoceros, sounds.animals.okapi],
    funFacts: {
      en: ["", "", ""],
      es: ["", "", ""],
    },
    isLiked: false,
    category: "science",
    background: "bg-card-yellow",
  },
  {
    id: "snake",
    value: "S",
    clicked: false,
    image: images.animals.snake,
    name: {
      en: {
        text: "Snake",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/Snake_ds2byy.mp3",
      },
      es: {
        text: "Serpiente",
        audio: "audio.m4a",
      },
    },
    tiles: {
      en: ["Snake"],
      es: ["Ser-", "pien-", "te"],
    },
    syllables: {
      en: {
        text: ["Snake"],
        audio: {
          snake:
            "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/snake_1_uudc5b.mp3",
        },
      },
      es: {
        text: ["Ser", "pien", "te"],
        audio: {
          ser: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704762282/alphabet_list/syllables/ES/49-ser.m4a",
          pien: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704762282/alphabet_list/syllables/ES/50-pien.m4a",
          te: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704762282/alphabet_list/syllables/ES/51-te.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.snake, sounds.animals.okapi],
    funFacts: {
      en: ["", "", ""],
      es: ["", "", ""],
    },
    isLiked: false,
    category: "science",
    background: "bg-card-red",
  },
  {
    id: "tiger",
    value: "T",
    clicked: false,
    image: images.animals.tiger,
    name: {
      en: {
        text: "Tiger",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/tiger_wfkjkn.mp3",
      },
      es: {
        text: "Tigre",
        audio: "",
      },
    },
    tiles: {
      en: ["Ti-ger"],
      es: ["Ti-gre"],
    },
    syllables: {
      en: {
        text: ["Ti", "ger"],
        audio: {
          ti: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/tiger_1_cmeugy.mp3",
          ger: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/tiger_2_dmfmjj.mp3",
        },
      },
      es: {
        text: ["Ti", "gre"],
        audio: {
          ti: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704762282/alphabet_list/syllables/ES/52-ti.m4a",
          gre: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704762282/alphabet_list/syllables/ES/53-gre.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.tiger, sounds.animals.okapi],
    funFacts: {
      en: ["", "", ""],
      es: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1704993998/alphabet_list/fun_facts/ES/tigre-1.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1704993998/alphabet_list/fun_facts/ES/tigre-2.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1704994000/alphabet_list/fun_facts/ES/tigre-3.m4a",
      ],
    },
    isLiked: false,
    category: "science",
    background: "bg-card-blue",
  },
  {
    id: "unau",
    value: "U",
    clicked: false,
    image: images.animals.unau,
    name: {
      en: {
        text: "Unau",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/unau_jwytmf.mp3",
      },
      es: {
        text: "Perezoso",
        audio: "audio.m4a",
      },
    },
    tiles: {
      en: ["U-nau"],
      es: ["Pe-re-", "zo-so"],
    },
    syllables: {
      en: {
        text: ["U", "nau"],
        audio: {
          u: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/unau_1_ujzyfb.mp3",
          nau: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/unau_2_ce3igp.mp3",
        },
      },
      es: {
        text: ["Pe", "re", "zo", "so"],
        audio: {
          pe: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704762282/alphabet_list/syllables/ES/54-pe.m4a",
          re: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704762283/alphabet_list/syllables/ES/55-re.m4a",
          zo: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704762282/alphabet_list/syllables/ES/56-zo.m4a",
          so: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704763932/alphabet_list/syllables/ES/57-so.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: {
      en: ["", "", ""],
      es: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1704993999/alphabet_list/fun_facts/ES/perezoso-1.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1704993999/alphabet_list/fun_facts/ES/perezoso-2.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1704994000/alphabet_list/fun_facts/ES/perezoso-3.m4a",
      ],
    },
    isLiked: true,
    category: "science",
    background: "bg-card-yellow",
  },
  {
    id: "vervet-monkey",
    value: "V",
    clicked: false,
    image: images.animals.vervet_monkey,
    name: {
      en: {
        text: "Vervet Monkey",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/vervet_monkey_gvims4.mp3",
      },
      es: {
        text: "Mono Vervet",
        audio: "audio.m4a",
      },
    },
    tiles: {
      en: ["Ver-vet", "Mon-key"],
      es: ["Mo-no", "Ver-vet"],
    },
    syllables: {
      en: {
        text: ["Ver", "vet", "Mon", "key"],
        audio: {
          ver: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/vervet_monkey_1_xvowle.mp3",
          vet: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/vervet_monkey_2_haaszc.mp3",
          mon: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/vervet_monkey_3_v9rfek.mp3",
          key: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/vervet_monkey_4_mxlxbg.mp3",
        },
      },
      es: {
        text: ["Mo", "no", "Ver", "vet"],
        audio: {
          mo: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704763931/alphabet_list/syllables/ES/58-mo.m4a",
          no: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704763931/alphabet_list/syllables/ES/59-no.m4a",
          ver: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704763932/alphabet_list/syllables/ES/60-ver.m4a",
          vet: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704763933/alphabet_list/syllables/ES/61-vet.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: {
      en: ["", "", ""],
      es: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1704993998/alphabet_list/fun_facts/ES/mono-vervet-1.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1704993999/alphabet_list/fun_facts/ES/mono-vervet-2.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1704993999/alphabet_list/fun_facts/ES/mono-vervet-3.m4a",
      ],
    },
    isLiked: true,
    category: "science",
    background: "bg-card-green",
  },
  {
    id: "warthog",
    value: "W",
    clicked: false,
    image: images.animals.warthog,
    name: {
      en: {
        text: "Warthog",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/wildebeest_ugxsq2.mp3",
      },
      es: {
        text: "Jabalí",
        audio: "",
      },
    },
    tiles: {
      en: ["Wart-", "hog"],
      es: ["Ja-", "ba-lí"],
    },
    syllables: {
      en: {
        text: ["Wart", "hog"],
        audio: {
          wart: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/warthog_1_iysnah.mp3",
          hog: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/warthog_2_fu4elu.mp3",
        },
      },
      es: {
        text: ["Ja", "ba", "lí"],
        audio: {
          ja: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754955/alphabet_list/syllables/ES/62-ja.m4a",
          ba: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704755552/alphabet_list/syllables/ES/63-ba.m4a",
          lí: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754955/alphabet_list/syllables/ES/64-li.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: {
      en: ["", "", ""],
      es: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1704993998/alphabet_list/fun_facts/ES/jabali-1.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1704994001/alphabet_list/fun_facts/ES/jabali-2.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1704993999/alphabet_list/fun_facts/ES/jabali-3.m4a",
      ],
    },
    isLiked: true,
    category: "science",
    background: "bg-card-yellow",
  },
  {
    id: "xenops",
    value: "X",
    clicked: false,
    image: images.animals.xenops,
    name: {
      en: {
        text: "Xenops",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/xenops_e6rmil.mp3",
      },
      es: {
        text: "Picolezna",
        audio: "audio.m4a",
      },
    },
    tiles: {
      en: ["Xe-nops"],
      es: ["Pi-co-", "lez-na"],
    },
    syllables: {
      en: {
        text: ["Xe", "nops"],
        audio: {
          xe: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/xenops_1_zgooqe.mp3",
          nops: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/xenops_2_kpnjv5.mp3",
        },
      },
      es: {
        text: ["Pi", "co", "lez", "na"],
        audio: {
          pi: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704762030/alphabet_list/syllables/ES/65-pi.m4a",
          co: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704762031/alphabet_list/syllables/ES/66-co.m4a",
          lez: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704762030/alphabet_list/syllables/ES/67-lez.m4a",
          na: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704762030/alphabet_list/syllables/ES/68-na.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.xenops, sounds.animals.okapi],
    funFacts: {
      en: ["", "", ""],
      es: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1705010669/alphabet_list/fun_facts/ES/picolezna-1.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1705010669/alphabet_list/fun_facts/ES/picolezna-2.m4a",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1705010669/alphabet_list/fun_facts/ES/picolezna-3.m4a",
      ],
    },
    isLiked: false,
    category: "science",
    background: "bg-card-red",
  },
  {
    id: "yellow-mongoose",
    value: "Y",
    clicked: false,
    image: images.animals.yellow_mongoose,
    name: {
      en: {
        text: "Yellow Mongoose",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/yellow_mongoose_l39y3w.mp3",
      },
      es: {
        text: "Mangosta Amarilla",
        audio: "audio.mp4",
      },
    },
    tiles: {
      en: ["Yel-low", "Mon-", "goose"],
      es: ["Man-", "gos-ta", "A-ma-", "ri-lla"],
    },
    syllables: {
      en: {
        text: ["Yel", "low", "Mon", "goose"],
        audio: {
          yel: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/yellow_mongoose_1_m8jdxg.mp3",
          low: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/yellow_mongoose_2_bdw2zz.mp3",
          mon: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/yellow_mongoose_3_su0kmh.mp3",
          goose:
            "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/yellow_mongoose_4_bivqec.mp3",
        },
      },
      es: {
        text: ["Man", "gos", "ta", "A", "ma", "ri", "lla"],
        audio: {
          man: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754964/alphabet_list/syllables/ES/69-man.m4a",
          gos: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754954/alphabet_list/syllables/ES/70-gos.m4a",
          ta: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754954/alphabet_list/syllables/ES/71-ta.m4a",
          a: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754983/alphabet_list/syllables/ES/72-a.m4a",
          ma: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754954/alphabet_list/syllables/ES/73-ma.m4a",
          ri: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754954/alphabet_list/syllables/ES/74-ri.m4a",
          lla: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704755552/alphabet_list/syllables/ES/75-lla.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: {
      en: ["", "", ""],
      es: ["", "", ""],
    },
    isLiked: true,
    category: "science",
    background: "bg-card-red",
  },
  {
    id: "zebra",
    value: "Z",
    clicked: false,
    image: images.animals.zebra,
    name: {
      en: {
        text: "Zebra",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1666114219/animal-sounds/zebra_u99gjw.mp3",
      },
      es: {
        text: "Cebra",
        audio:
          "https://res.cloudinary.com/djqxogkfw/video/upload/v1696786189/animal-audio-ES/full-names/cebra-name.m4a",
      },
    },
    tiles: {
      en: ["Ze-bra"],
      es: ["Ce-bra"],
    },
    syllables: {
      en: {
        text: ["Ze", "bra"],
        audio: {
          ze: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/zebra_1_cnq15e.mp3",
          bra: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/zebra_2_gflttj.mp3",
        },
      },
      es: {
        text: ["Ce", "bra"],
        audio: {
          ce: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754954/alphabet_list/syllables/ES/76-ce.m4a",
          bra: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704754954/alphabet_list/syllables/ES/77-bra.m4a",
        },
      },
    },
    soundEffect: [sounds.animals.zebra, sounds.animals.okapi],
    funFacts: {
      en: ["", "", ""],
      es: ["", "", ""],
    },
    isLiked: false,
    category: "science",
    background: "bg-card-blue",
  },
];

export const alphabetLetterSounds = {
  en: {
    A: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921481/alphabet_list/alphabet/EN/a.m4a",
    B: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921483/alphabet_list/alphabet/EN/b.m4a",
    C: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921482/alphabet_list/alphabet/EN/c.m4a",
    D: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921483/alphabet_list/alphabet/EN/d.m4a",
    E: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921484/alphabet_list/alphabet/EN/e.m4a",
    F: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921485/alphabet_list/alphabet/EN/f.m4a",
    G: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921484/alphabet_list/alphabet/EN/g.m4a",
    H: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921484/alphabet_list/alphabet/EN/h.m4a",
    I: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921485/alphabet_list/alphabet/EN/i.m4a",
    J: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921486/alphabet_list/alphabet/EN/j.m4a",
    K: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921479/alphabet_list/alphabet/EN/k.m4a",
    L: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921479/alphabet_list/alphabet/EN/l.m4a",
    M: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921478/alphabet_list/alphabet/EN/m.m4a",
    N: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921480/alphabet_list/alphabet/EN/n.m4a",
    O: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921479/alphabet_list/alphabet/EN/o.m4a",
    P: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921478/alphabet_list/alphabet/EN/p.m4a",
    Q: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921479/alphabet_list/alphabet/EN/q.m4a",
    R: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921480/alphabet_list/alphabet/EN/r.m4a",
    S: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921480/alphabet_list/alphabet/EN/s.m4a",
    T: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921481/alphabet_list/alphabet/EN/t.m4a",
    U: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921480/alphabet_list/alphabet/EN/u.m4a",
    V: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921482/alphabet_list/alphabet/EN/v.m4a",
    W: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921481/alphabet_list/alphabet/EN/w.m4a",
    X: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921483/alphabet_list/alphabet/EN/x.m4a",
    Y: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921483/alphabet_list/alphabet/EN/y.m4a",
    Z: "https://res.cloudinary.com/djqxogkfw/video/upload/v1704921485/alphabet_list/alphabet/EN/z.m4a",
  },
  es: {
    A: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810892/alphabet_list/alphabet/ES/a.m4a",
    Á: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810892/alphabet_list/alphabet/ES/a.m4a",
    B: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810899/alphabet_list/alphabet/ES/b.m4a",
    C: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810900/alphabet_list/alphabet/ES/c.m4a",
    D: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696812219/alphabet_list/alphabet/ES/d.m4a",
    E: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810909/alphabet_list/alphabet/ES/e.m4a",
    É: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810909/alphabet_list/alphabet/ES/e.m4a",
    F: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810902/alphabet_list/alphabet/ES/f.m4a",
    G: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810910/alphabet_list/alphabet/ES/g.m4a",
    H: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810913/alphabet_list/alphabet/ES/h.m4a",
    I: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810878/alphabet_list/alphabet/ES/i.m4a",
    Í: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810878/alphabet_list/alphabet/ES/i.m4a",
    J: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810886/alphabet_list/alphabet/ES/j.m4a",
    K: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810890/alphabet_list/alphabet/ES/k.m4a",
    L: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810881/alphabet_list/alphabet/ES/l.m4a",
    LL: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810879/alphabet_list/alphabet/ES/ll.m4a",
    M: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810893/alphabet_list/alphabet/ES/m.m4a",
    N: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810878/alphabet_list/alphabet/ES/n.m4a",
    Ñ: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810883/alphabet_list/alphabet/ES/nn.m4a",
    O: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810889/alphabet_list/alphabet/ES/o.m4a",
    Ó: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810889/alphabet_list/alphabet/ES/o.m4a",
    P: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810882/alphabet_list/alphabet/ES/p.m4a",
    Q: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810888/alphabet_list/alphabet/ES/q.m4a",
    R: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810885/alphabet_list/alphabet/ES/r.m4a",
    S: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810898/alphabet_list/alphabet/ES/s.m4a",
    T: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810895/alphabet_list/alphabet/ES/t.m4a",
    U: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810906/alphabet_list/alphabet/ES/u.m4a",
    Ú: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810906/alphabet_list/alphabet/ES/u.m4a",
    V: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810905/alphabet_list/alphabet/ES/v.m4a",
    W: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810903/alphabet_list/alphabet/ES/w.m4a",
    X: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810896/alphabet_list/alphabet/ES/x.m4a",
    Y: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810907/alphabet_list/alphabet/ES/y.m4a",
    Z: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696810912/alphabet_list/alphabet/ES/z.m4a",
  },
};

export const animalFactCitations = {
  alligator: {
    F1: "https://a-z-animals.com/blog/what-is-a-group-of-crocodiles-called/",
    F2: "https://www.etymonline.com/word/alligator",
    F3: "https://nationalzoo.si.edu/animals/american-alligator",
  },
  baboon: {
    F1: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0029117",
    F2: "https://www.livescience.com/57588-baboon-facts.html",
    F3: "https://www.awf.org/wildlife-conservation/baboon",
  },
  chimpanzee: {
    F1: "https://www.bbc.com/news/science-environment-40405026.amp",
    F2: "https://earth.org/10-facts-about-chimpanzees/",
    F3: "https://projectchimps.org/chimps/chimps-facts/",
  },
  dingo: {
    F1: "https://australian.museum/learn/animals/mammals/dingo/",
    F2: "https://australian.museum/learn/animals/mammals/dingo/",
    F3: "https://www.funFactsencyclopedia.com/Dingo-facts.html",
  },
  elephant: {
    F1: "https://www.etymonline.com/word/elephant#etymonline_v_5724",
    F2: "https://www.worldwildlife.org/stories/what-s-the-difference-between-asian-and-african-elephants-and-10-other-elephant-facts",
    F3: "https://www.childfun.com/articles/general/15-elephant-facts-for-kids/",
  },
  frog: {
    F1: "https://toadsnfrogs.com/group-frogs-called/",
    F2: "https://www.dictionary.com/browse/polliwog",
    F3: "https://www.burkemuseum.org/collections-and-research/biology/herpetology/all-about-amphibians/all-about-frogs",
  },
  gorilla: {
    F1: "https://www.worldwildlife.org/stories/what-do-gorillas-eat-and-other-gorilla-facts",
    F2: "https://www.natgeokids.com/uk/discover/animals/general-animals/gorilla-facts/",
    F3: "https://www.natgeokids.com/uk/discover/animals/general-animals/gorilla-facts/",
  },
  hyena: {
    F1: "https://www.britannica.com/story/do-hyenas-really-laugh",
    F2: "https://onekindplanet.org/animal/spotted-hyena/",
    F3: "https://onekindplanet.org/animal/spotted-hyena/",
  },
  impala: {
    F1: "https://www.nationalgeographic.com/animals/mammals/facts/impala",
    F2: "https://www.livescience.com/52557-impalas.html",
    F3: "https://cheetah.org/canada/2018/04/15/cheetah-versus-impala-each-has-a-competitive-edge/",
  },
  jaguar: {
    F1: "https://www.gadsdentimes.com/story/lifestyle/columns/2019/09/15/david-murdock-column-on-collective-nouns/2787435007/",
    F2: "https://www.nationalgeographic.com/animals/article/animals-big-cats-jaguars-leopards",
    F3: "https://www.wwf.org.uk/learn/wildlife/jaguars",
  },
  koala: {
    F1: "https://www.savethekoala.com/about-koalas/frequently-asked-questions/",
    F2: "https://www.britannica.com/animal/marsupial",
    F3: "https://www.australia.com/en-us/things-to-do/wildlife/facts-about-koalas.html",
  },
  lemur: {
    F1: "https://www.bbc.co.uk/newsround/48539466",
    F2: "https://www.treehugger.com/incredible-facts-about-lemurs-4868779",
    F3: "https://www.lemurconservationnetwork.org/top-10-facts-about-lemurs/",
  },
  macaw: {
    F1: "https://www.rainforestcruises.com/guides/macaw-facts",
    F2: "https://www.allaboutparrots.com/do-macaw-bites-hurt/",
    F3: "https://news.mongabay.com/2019/07/la-mosquitia-dangerous-territory-for-scarlet-macaws-in-honduras/amp/",
  },
  numbat: {
    F1: "http://www.numbat.org.au/thenumbat",
    F2: "https://animalia.bio/numbat",
    F3: "http://www.numbat.org.au/thenumbat",
  },
  okapi: {
    F1: "https://animals.sandiegozoo.org/animals/okapi",
    F2: "https://animals.sandiegozoo.org/animals/okapi",
    F3: "https://www.nationalgeographic.com/animals/mammals/facts/okapi",
  },
  panda: {
    F1: "https://www.newscientist.com/article/2295189-giant-pandas-black-and-white-coat-works-as-excellent-camouflage/",
    F2: "https://m.timesofindia.com/why-is-the-panda-called-so/articleshow/2225965.cms",
    F3: "https://earth.org/interesting-facts-about-pandas/",
  },
  quetzal: {
    F1: "http://datazone.birdlife.org/sowb/casestudy/the-resplendent-quetzal-in-aztec-and-mayan-culture",
    F2: "https://www.nationalgeographic.com/animals/birds/facts/resplendent-quetzal",
    F3: "https://www.britannica.com/animal/quetzal",
  },
  rhinoceros: {
    F1: "https://travel.safari.com/a-crash-of-rhino/",
    F2: "https://www.wwf.org.uk/learn/fascinating-facts/rhinos",
    F3: "https://www.etymonline.com/word/rhinoceros#etymonline_v_15018",
  },
  snake: {
    F1: "https://www.merriam-webster.com/dictionary/snakelet/",
    F2: "https://wonderopolis.org/wonder/why-do-snakes-shed-their-skin",
    F3: "https://www.etymonline.com/word/snake#etymonline_v_23755",
  },
  tiger: {
    F1: "https://a-z-animals.com/blog/whats-a-group-of-tigers-called-how-do-they-behave/",
    F2: "https://depts.washington.edu/triolive/quest/2007/TTQ07030/tiger.html",
    F3: "https://www.pbs.org/wnet/nature/blog/tiger-fact-sheet/",
  },
  unau: {
    F1: "https://slothconservation.org/what-do-you-call-a-group-of-sloths/",
    F2: "https://www.worldwildlife.org/stories/why-are-sloths-slow-and-six-other-sloth-facts",
    F3: "https://tarpits.org/experience-tar-pits/giants-ice-age",
  },
  vervet_monkey: {
    F1: "https://animals.sandiegozoo.org/animals/vervet-monkey",
    F2: "https://animals.sandiegozoo.org/animals/vervet-monkey",
    F3: "https://www.sanbi.org/animal-of-the-week/vervet-monkey/",
  },
  warthog: {
    F1: "https://www.safaribookings.com/blog/warthog-facts",
    F2: "https://www.livescience.com/58337-warthog-facts.html",
    F3: `${"https://lalibela.net/10-interesting-facts-about-warthogs/"}, ${"https://www.wwf.org.uk/learn/fascinating-facts/elephants"}`,
  },
  xenops: {
    F1: "https://www.peruaves.org/furnariidae/streaked-xenops-xenops-rutilans/",
    F2: "https://www.activewild.com/xenops/",
    F3: "https://www.activewild.com/xenops/",
  },
  yellow_mongoose: {
    F1: "https://animalia.bio/yellow-mongoose",
    F2: "https://animalia.bio/yellow-mongoose",
    F3: "https://www.science.org/content/article/scienceshot-why-mongoose-moms-synchronize-births",
  },
  zebra: {
    F1: "https://www.discoverwildlife.com/animal-facts/mammals/facts-about-zebras/",
    F2: "https://www.natgeokids.com/uk/discover/animals/general-animals/zebra-facts/",
    F3: "https://www.britannica.com/story/are-zebras-white-with-black-stripes-or-black-with-white-stripes",
  },
};

////////////////////////////////////////////////////////////////////////////
//////////////////////////////// TECHNOLOGY ////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// technologyArray

/////////////////////////////////////////////////////////////////////////////
//////////////////////////////// ENGINEERING ////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// engineeringArray

//////////////////////////////////////////////////////////////////////
//////////////////////////////// ARTS ////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const artsArray = [
  {
    id: "aeolian-harp",
    value: "A",
    clicked: false,
    image: images.instruments.aeolian_harp,
    name: {
      en: "Aeolian Harp",
      es: "Arpa Eólica",
    },
    slides: [
      {
        placeOfOrigin: "Greece",
        flag: images.flags.greece,
        howItWorks: "The aeolian harp...",
      },
      {
        instrumentType: "Wind/String",
        technicalName: "Chordophone",
        material: "Wood",
      },
      {
        video:
          "https://youtube.com/clip/UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL?si=_Avt7vI3WNGqFx96",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/alligator_ipbeqb.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/alligator_fact1_jzvtc3.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/alligator_fact2_krxfag.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/alligator_fact3_kudvzs.mp3",
    ],
    horizontal: true,
    isLiked: true,
    category: "arts",
  },
  {
    id: "bell-tree",
    value: "B",
    clicked: false,
    image: images.instruments.bell_tree,
    name: {
      en: "Bell Tree",
      es: "Árbol de Campanas",
    },
    slides: [
      {
        placeOfOrigin: "China",
        flag: images.flags.china,
        howItWorks: "The bell tree...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Aerophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/71w929twkME?si=wmbgBdJ-lBoAQ_k8&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/baboon_f4s3in.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/baboon_fact1_vhvzyk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/baboon_fact2_jh0az6.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/baboon_fact3_a7j7vh.mp3",
    ],
    horizontal: false,
    isLiked: true,
    category: "arts",
  },
  {
    id: "cuica",
    value: "C",
    clicked: false,
    image: images.instruments.cuica,
    name: {
      en: "Cuíca",
      es: "Cuíca",
    },
    slides: [
      {
        placeOfOrigin: "Brazil",
        flag: images.flags.brazil,
        howItWorks: "The cuíca...",
      },
      {
        instrumentType: "Percussion",
        technicalName: "Membranophone",
        material: "metal with animal skin stretched over the top",
      },
      {
        video:
          "https://www.youtube.com/embed/mmlK94QvwiA?si=WdGKnz3ADPRZuB9o&amp;clip=Ugkxu_w8-6SbXsuIBdsKYiNZQEPQdtSmFr7a&amp;clipt=EMC7ARjYsAI&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671648469/animal-sounds/chimpanzee_fralis.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/chimpanzee_fact1_qv9lyc.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/chimpanzee_fact2_uhizwa.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/chimpanzee_fact3_qnnklm.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "arts",
  },
  {
    id: "didgeridoo",
    value: "D",
    clicked: false,
    image: images.instruments.didgeridoo,
    name: {
      en: "Didgeridoo",
      es: "Didgeridoo",
    },
    slides: [
      {
        placeOfOrigin: "Australia",
        flag: images.flags.australia,
        howItWorks: "The didgeridoo...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Aerophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/dingo_vbeznb.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/dingo_fact1_kswj5g.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/dingo_fact2_n1ijx8.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/dingo_fact3_ow5mgy.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts",
  },
  {
    id: "electric-bass",
    value: "E",
    clicked: false,
    image: images.instruments.electric_bass,
    name: {
      en: "Electric Bass",
      es: "Bajo Eléctrico",
    },
    slides: [
      {
        placeOfOrigin: "United States",
        flag: images.flags.united_states,
        howItWorks: "The harmonica...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Aerophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/wslZrcc6mMU?si=uZtyarZuhCwWcPAR&amp;clip=UgkxfEJ4lHCq0wBsPsZRz71uo6PH67BU6czZ&amp;clipt=ENzVERiAxxI&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/dingo_vbeznb.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/elephant_fact1_ejcgdf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/elephant_fact2_hacxsi.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/elephant_fact3_dx6jql.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts",
  },
  {
    id: "french-horn",
    value: "F",
    clicked: false,
    image: images.instruments.french_horn,
    name: {
      en: "French Horn",
      es: "Corno Francés",
    },
    slides: [
      {
        placeOfOrigin: "Europe",
        flag: images.flags.european_union,
        howItWorks: "The harmonica...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Aerophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/frog_hqdv08.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/frog_fact1_rfrsgr.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/frog_fact2_ng3wgh.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/frog_fact3_glvaz1.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts",
  },
  {
    id: "gamelatron",
    value: "G",
    clicked: false,
    image: images.instruments.gamelatron,
    name: {
      en: "Gamelatron",
      es: "Gamelatrón",
    },
    slides: [
      {
        placeOfOrigin: "United States",
        flag: images.flags.united_states,
        howItWorks: "The harmonica...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Aerophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/gorilla_nu73cy.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/gorilla_fact1_cgq79y.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/gorilla_fact2_bxywsw.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/gorilla_fact3_wudgzl.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "arts",
  },
  {
    id: "harmonica",
    value: "H",
    clicked: false,
    image: images.instruments.harmonica,
    name: {
      en: "Harmonica",
      es: "Armónica",
    },
    slides: [
      {
        placeOfOrigin: "Europe",
        flag: images.flags.european_union,
        howItWorks: "The harmonica...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Aerophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/hyena_uvck0i.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/hyena_fact1_qtugg1.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/hyena_fact2_qzdyqx.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/hyena_fact3_hytr4n.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts",
  },
  {
    id: "inci",
    value: "I",
    clicked: false,
    image: images.instruments.inci,
    name: {
      en: "Inci",
      es: "Tumpong",
    },
    slides: [
      {
        placeOfOrigin: "Philippines",
        flag: images.flags.philippines,
        howItWorks: "The inci...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Aerophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/impala_sz5oq8.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact1_nq6zzx.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact2_wc1yil.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact3_kul7g5.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts",
  },
  {
    id: "janggu",
    value: "J",
    clicked: false,
    image: images.instruments.janggu,
    name: {
      en: "Janggu",
      es: "Janggu",
    },
    slides: [
      {
        placeOfOrigin: "South Korea",
        flag: images.flags.south_korea,
        howItWorks: "The harmonica...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Aerophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/jaguar_augfbp.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact1_nfjkrf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact2_tnqran.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact3_clfmtr.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts",
  },
  {
    id: "khaen",
    value: "K",
    clicked: false,
    image: images.instruments.khaen,
    name: {
      en: "Khaen",
      es: "Khaen",
    },
    slides: [
      {
        placeOfOrigin: "Thailand",
        flag: images.flags.thailand,
        howItWorks: "The harmonica...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Aerophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/koala_xamipd.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact1_vgfacw.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact2_wzdxnq.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact3_nyynb4.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts",
  },
  {
    id: "leier",
    value: "L",
    clicked: false,
    image: images.instruments.leier,
    name: {
      en: "Leier",
      es: "Lira",
    },
    slides: [
      {
        placeOfOrigin: "Germany",
        flag: images.flags.germany,
        howItWorks: "The harmonica...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Aerophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/lemur_ypjdmr.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/lemur_fact1_rjnhm4.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/lemur_fact2_sthf0x.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/lemur_fact3_dechin.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "arts",
  },
  {
    id: "mbira",
    value: "M",
    clicked: false,
    image: images.instruments.mbira,
    name: {
      en: "Mbira",
      es: "Mbira",
    },
    slides: [
      {
        placeOfOrigin: "Zimbabwe",
        flag: images.flags.zimbabwe,
        howItWorks: "The harmonica...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Aerophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/macaw_dccou1.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/macaw_fact1_abx8vt.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/macaw_fact2_veofca.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/macaw_fact3_prsu0v.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "arts",
  },
  {
    id: "native-american-flute",
    value: "N",
    clicked: false,
    image: images.instruments.native_american_flute,
    name: {
      en: "Native American Flute",
      es: "Flauta India",
    },
    slides: [
      {
        placeOfOrigin: "United States",
        flag: images.flags.united_states,
        howItWorks: "The native american flute...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Aerophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/numbat_wpfejt.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/numbat_fact1_ymumed.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/numbat_fact2_laiinf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/numbat_fact3_lyn45a.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts",
  },
  {
    id: "oboe",
    value: "O",
    clicked: false,
    image: images.instruments.oboe,
    name: {
      en: "Oboe",
      es: "Oboe",
    },
    slides: [
      {
        placeOfOrigin: "Europe",
        flag: images.flags.european_union,
        howItWorks: "The harmonica...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Aerophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/okapi_ukx8lz.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact1_rhj1gd.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact2_y3ajoz.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact3_ogttap.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts",
  },
  {
    id: "piano",
    value: "P",
    clicked: false,
    image: images.instruments.piano,
    name: {
      en: "Piano",
      es: "Piano",
    },
    slides: [
      {
        placeOfOrigin: "Italy",
        flag: images.flags.italy,
        howItWorks: "The piano...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Chordophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/panda_o0bz0g.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/panda_fact1_mpa17k.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/panda_fact2_mo56nu.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/panda_fact3_dajist.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "arts",
  },
  {
    id: "quijada-de-burro",
    value: "Q",
    clicked: false,
    image: images.instruments.quijada_de_burro,
    name: {
      en: "Quijada (Jawbone)",
      es: "Quijada de Burro",
    },
    slides: [
      {
        placeOfOrigin: "Africa",
        flag: images.flags.african_union,
        howItWorks:
          "The jawbone is cleaned and dried to make the teeth loose and rattle. This makes a loud buzzing sound.",
      },
      {
        instrumentType: "Percussion",
        technicalName: "Idiophone",
        material: "animal bone",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/quetzal_ivuema.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/quetzal_fact1_mmzilu.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/quetzal_fact2_owzkum.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/quetzal_fact3_is9snv.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "arts",
  },
  {
    id: "rabab",
    value: "R",
    clicked: false,
    image: images.instruments.rabab,
    name: {
      en: "Rubab",
      es: "Robab",
    },
    slides: [
      {
        placeOfOrigin: "Afghanistan",
        flag: images.flags.afghanistan,
        howItWorks: "The harmonica...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Aerophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/rhino_zyp4fl.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact1_idngtl.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact2_e4hwic.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact3_ufh40a.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts",
  },
  {
    id: "sitar",
    value: "S",
    clicked: false,
    image: images.instruments.sitar,
    name: {
      en: "Sitar",
      es: "Sitar",
    },
    slides: [
      {
        placeOfOrigin: "India",
        flag: images.flags.india,
        howItWorks: "The harmonica...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Chordophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/Snake_ds2byy.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/snake_fact1_dxxhpf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/snake_fact2_eztwvt.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/snake_fact3_dz53vc.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts",
  },
  {
    id: "taiko",
    value: "T",
    clicked: false,
    image: images.instruments.taiko,
    name: {
      en: "Taiko",
      es: "Taiko",
    },
    slides: [
      {
        placeOfOrigin: "Japan",
        flag: images.flags.japan,
        howItWorks: "The harmonica...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Aerophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/tiger_wfkjkn.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact1_nwba8u.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact2_bnksqa.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact3_dluuj4.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts",
  },
  {
    id: "ukulele",
    value: "U",
    clicked: false,
    image: images.instruments.ukulele,
    name: {
      en: "Ukulele",
      es: "Ukelele",
    },
    slides: [
      {
        placeOfOrigin: "Hawaii",
        flag: images.flags.hawaii,
        howItWorks: "The harmonica...",
      },
      {
        instrumentType: "String",
        technicalName: "Chordophone",
        material: "Wood",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/unau_jwytmf.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact1_ds858v.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact2_hcpoef.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact3_mamotq.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "arts",
  },
  {
    id: "violin",
    value: "V",
    clicked: false,
    image: images.instruments.violin,
    name: {
      en: "Violin",
      es: "Violín",
    },
    slides: [
      {
        placeOfOrigin: "Italy",
        flag: images.flags.italy,
        howItWorks: "The violin...",
      },
      {
        instrumentType: "String",
        technicalName: "Chordophone",
        material: "wood",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/vervet_monkey_gvims4.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact1_cz2295.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact2_ycapu7.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact3_lfyjzb.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "arts",
  },
  {
    id: "waterphone",
    value: "W",
    clicked: false,
    image: images.instruments.waterphone,
    name: {
      en: {
        text: "Waterphone",
        audio: "",
      },
      es: {
        text: "Waterphone",
        audio: "",
      },
    },
    slides: [
      {
        placeOfOrigin: "United States",
        flag: images.flags.united_states,
        howItWorks: "The harmonica...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Aerophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact1_senecj.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact2_czrjpl.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact3_bukixi.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts",
  },
  {
    id: "xalam",
    value: "X",
    clicked: false,
    image: images.instruments.xalam,
    name: {
      en: {
        text: "Xalam",
        audio: "",
      },
      es: {
        text: "Xalam",
        audio: "",
      },
    },
    slides: [
      {
        placeOfOrigin: "Africa",
        flag: images.flags.african_union,
        howItWorks: "The harmonica...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Aerophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/xenops_e6rmil.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact1_jecyvz.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact2_kb4twj.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact3_ldtacl.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts",
  },
  {
    id: "yuka",
    value: "Y",
    clicked: false,
    image: images.instruments.yuka,
    name: {
      en: {
        text: "Yuka",
        audio: "",
      },
      es: {
        text: "Yuka",
        audio: "",
      },
    },
    slides: [
      {
        placeOfOrigin: "Cuba",
        flag: images.flags.cuba,
        howItWorks: "The harmonica...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Aerophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/yellow_mongoose_fact1_jgd2eq.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/yellow_mongoose_fact2_ugljou.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/yellow_mongoose_fact3_gaevzy.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts",
  },
  {
    id: "zarb",
    value: "Z",
    clicked: false,
    image: images.instruments.zarb,
    name: {
      en: {
        text: "Zarb",
        audio: "",
      },
      es: {
        text: "Tombak",
        audio: "",
      },
    },
    slides: [
      {
        placeOfOrigin: "Iran",
        flag: images.flags.iran,
        howItWorks: "The harmonica...",
      },
      {
        instrumentType: "Wind",
        technicalName: "Aerophone",
        material: "brass, stainless steel or bronze",
      },
      {
        video:
          "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1",
      },
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/zebra_fact1_cdpouk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact2_b6u2js.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact3_hviwtv.mp3",
    ],
    horizontal: true,
    isLiked: true,
    category: "arts",
  },
];

/////////////////////////////////////////////////////////////////////////////
//////////////////////////////// MATHEMATICS ////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

export const mathArray = [
  {
    id: "1",
    value: 1,
    clicked: false,
    image: images.numbers.apple,
    name: {
      en: "one",
      es: "uno",
    },
    tiles: ["Al-li-", "ga-", "tor"],
    syllables: ["Al", "li", "ga", "tor"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/alligator_ipbeqb.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/alligator_fact1_jzvtc3.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/alligator_fact2_krxfag.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/alligator_fact3_kudvzs.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
  {
    id: "2",
    value: 2,
    clicked: false,
    image: images.numbers.uvas,
    name: {
      en: "two",
      es: "dos",
    },
    tiles: ["Ba-boon"],
    syllables: ["Ba", "boon"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/baboon_f4s3in.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/baboon_fact1_vhvzyk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/baboon_fact2_jh0az6.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/baboon_fact3_a7j7vh.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "math",
  },
  {
    id: "3",
    value: 3,
    clicked: false,
    image: images.numbers.cherry,
    name: {
      en: "three",
      es: "tres",
    },
    tiles: ["Chim-", "pan-", "zee"],
    syllables: ["Chim", "pan", "zee"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671648469/animal-sounds/chimpanzee_fralis.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/chimpanzee_fact1_qv9lyc.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/chimpanzee_fact2_uhizwa.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/chimpanzee_fact3_qnnklm.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "math",
  },
  {
    id: "4",
    value: 4,
    clicked: false,
    image: images.numbers.velvet_tamarind,
    name: {
      en: "four",
      es: "cuatro",
    },
    tiles: ["Din-go"],
    syllables: ["Din", "go"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/dingo_vbeznb.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/dingo_fact1_kswj5g.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/dingo_fact2_n1ijx8.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/dingo_fact3_ow5mgy.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
  {
    id: "5",
    value: 5,
    clicked: false,
    image: images.numbers.fig,
    name: {
      en: "five",
      es: "cinco",
    },
    tiles: ["El-e-", "phant"],
    syllables: ["El", "e", "phant"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/elephant_ja0xof.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/elephant_fact1_ejcgdf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/elephant_fact2_hacxsi.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/elephant_fact3_dx6jql.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
  {
    id: "6",
    value: 6,
    clicked: false,
    image: images.numbers.starfruit,
    name: {
      en: "six",
      es: "seis",
    },
    tiles: ["Frog"],
    syllables: ["Frog"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/frog_hqdv08.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/frog_fact1_rfrsgr.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/frog_fact2_ng3wgh.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/frog_fact3_glvaz1.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
  {
    id: "7",
    value: 7,
    clicked: false,
    image: images.numbers.guava,
    name: {
      en: "seven",
      es: "siete",
    },
    tiles: ["Go-", "ril-la"],
    syllables: ["Go", "ril", "la"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/gorilla_nu73cy.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/gorilla_fact1_cgq79y.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/gorilla_fact2_bxywsw.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/gorilla_fact3_wudgzl.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "math",
  },
  {
    id: "8",
    value: 8,
    clicked: false,
    image: images.numbers.horned_melon,
    name: {
      en: "eight",
      es: "ocho",
    },
    tiles: ["Hy-e-na"],
    syllables: ["Hy", "e", "na"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/hyena_uvck0i.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/hyena_fact1_qtugg1.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/hyena_fact2_qzdyqx.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/hyena_fact3_hytr4n.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
  {
    id: "9",
    value: 9,
    clicked: false,
    image: images.numbers.eggplant,
    name: {
      en: "nine",
      es: "nueve",
    },
    tiles: ["Im-", "pal-a"],
    syllables: ["Im", "pal", "a"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/impala_sz5oq8.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact1_nq6zzx.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact2_wc1yil.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact3_kul7g5.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
  {
    id: "10",
    value: 10,
    clicked: false,
    image: images.numbers.rambutan,
    name: {
      en: "ten",
      es: "diez",
    },
    tiles: ["Jag-", "u-ar"],
    syllables: ["Jag", "u", "ar"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/jaguar_augfbp.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact1_nfjkrf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact2_tnqran.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact3_clfmtr.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
  {
    id: "11",
    value: 11,
    clicked: false,
    image: images.numbers.coconut,
    name: {
      en: "eleven",
      es: "once",
    },
    tiles: ["Ko-", "a-la"],
    syllables: ["Ko", "a", "la"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/koala_xamipd.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact1_vgfacw.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact2_wzdxnq.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact3_nyynb4.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
  {
    id: "12",
    value: 12,
    clicked: false,
    image: images.numbers.pear,
    name: {
      en: "twelve",
      es: "doce",
    },
    tiles: ["Le-mur"],
    syllables: ["Le", "mur"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/lemur_ypjdmr.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/lemur_fact1_rjnhm4.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/lemur_fact2_sthf0x.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/lemur_fact3_dechin.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "math",
  },
  {
    id: "13",
    value: 13,
    clicked: false,
    image: images.numbers.mango,
    name: {
      en: "thirteen",
      es: "trece",
    },
    tiles: ["Ma-caw"],
    syllables: ["Ma", "caw"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/macaw_dccou1.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/macaw_fact1_abx8vt.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/macaw_fact2_veofca.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/macaw_fact3_prsu0v.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "math",
  },
  {
    id: "14",
    value: 14,
    clicked: false,
    image: images.numbers.nectarine,
    name: {
      en: "fourteen",
      es: "catorce",
    },
    tiles: ["Num-bat"],
    syllables: ["Num", "bat"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/numbat_wpfejt.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/numbat_fact1_ymumed.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/numbat_fact2_laiinf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/numbat_fact3_lyn45a.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
  {
    id: "15",
    value: 15,
    clicked: false,
    image: images.numbers.quince,
    name: {
      en: "fifteen",
      es: "quince",
    },
    tiles: ["O-ka-pi"],
    syllables: ["O", "ka", "pi"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/okapi_ukx8lz.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact1_rhj1gd.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact2_y3ajoz.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact3_ogttap.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
  {
    id: "16",
    value: 16,
    clicked: false,
    image: images.numbers.pear,
    name: {
      en: "sixteen",
      es: "dieciséis",
    },
    tiles: ["Pan-da"],
    syllables: ["Pan", "da"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/panda_o0bz0g.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/panda_fact1_mpa17k.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/panda_fact2_mo56nu.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/panda_fact3_dajist.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "math",
  },
  {
    id: "17",
    value: 17,
    clicked: false,
    image: images.numbers.banana,
    name: {
      en: "seventeen",
      es: "diecisiete",
    },
    tiles: ["Quet-", "zal"],
    syllables: ["Quet", "zal"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/quetzal_ivuema.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/quetzal_fact1_mmzilu.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/quetzal_fact2_owzkum.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/quetzal_fact3_is9snv.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "math",
  },
  {
    id: "18",
    value: 18,
    clicked: false,
    image: images.numbers.raspberry,
    name: {
      en: "eighteen",
      es: "dieciocho",
    },
    tiles: ["Rhi-", "noc-", "er-os"],
    syllables: ["Rhi", "noc", "er", "os"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/rhino_zyp4fl.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact1_idngtl.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact2_e4hwic.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact3_ufh40a.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
  {
    id: "19",
    value: 19,
    clicked: false,
    image: images.numbers.strawberry,
    name: {
      en: "nineteen",
      es: "diecinueve",
    },
    tiles: ["Snake"],
    syllables: ["Snake"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/Snake_ds2byy.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/snake_fact1_dxxhpf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/snake_fact2_eztwvt.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/snake_fact3_dz53vc.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
  {
    id: "20",
    value: 20,
    clicked: false,
    image: images.numbers.indian_gooseberry,
    name: {
      en: "Twenty",
      es: "veinte",
    },
    tiles: ["Ti-ger"],
    syllables: ["Ti", "ger"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/tiger_wfkjkn.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact1_nwba8u.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact2_bnksqa.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact3_dluuj4.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
  {
    id: "21",
    value: 21,
    clicked: false,
    image: images.numbers.kiwi,
    name: {
      en: "twenty-one",
      es: "veintiuno",
    },
    tiles: ["U-nau"],
    syllables: ["U", "nau"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/unau_jwytmf.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact1_ds858v.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact2_hcpoef.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact3_mamotq.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "math",
  },
  {
    id: "22",
    value: 22,
    clicked: false,
    image: images.numbers.kiwi,
    name: {
      en: "twenty-two",
      es: "veintidós",
    },
    tiles: [["Ver-vet"], ["Mon-key"]],
    syllables: [
      ["Ver", "vet"],
      ["Mon", "key"],
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/vervet_monkey_gvims4.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact1_cz2295.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact2_ycapu7.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact3_lfyjzb.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "math",
  },
  {
    id: "23",
    value: 23,
    clicked: false,
    image: images.numbers.watermelon,
    name: {
      en: "twenty-three",
      es: "veintitrés",
    },
    tiles: ["Wart-", "hog"],
    syllables: ["Wart", "hog"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/wildebeest_ugxsq2.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact1_senecj.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact2_czrjpl.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact3_bukixi.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
  {
    id: "24",
    value: 24,
    clicked: false,
    image: images.numbers.blueberry,
    name: {
      en: "twenty-four",
      es: "veinticuatro",
    },
    tiles: ["Xe-nops"],
    syllables: ["Xe", "nops"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/xenops_e6rmil.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact1_jecyvz.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact2_kb4twj.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact3_ldtacl.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
  {
    id: "25",
    value: 25,
    clicked: false,
    image: images.numbers.uvas,
    name: {
      en: "twenty-five",
      es: "veinticinco",
    },
    tiles: [["Yel-low"], ["Mon-", "goose"]],
    syllables: [
      ["Yel", "low"],
      ["Mon", "goose"],
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/yellow_mongoose_l39y3w.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/yellow_mongoose_fact1_jgd2eq.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/yellow_mongoose_fact2_ugljou.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/yellow_mongoose_fact3_gaevzy.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
  {
    id: "26",
    value: 26,
    clicked: false,
    image: images.numbers.uvas,
    name: {
      en: "twenty-six",
      es: "veintiséis",
    },
    tiles: ["Ze-bra"],
    syllables: ["Ze", "bra"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1666114219/animal-sounds/zebra_u99gjw.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/zebra_fact1_cdpouk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact2_b6u2js.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact3_hviwtv.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
  {
    id: "27",
    value: 27,
    clicked: false,
    image: images.numbers.dragonfruit,
    name: {
      en: "twenty-seven",
      es: "veintisiete",
    },
    tiles: ["Ze-bra"],
    syllables: ["Ze", "bra"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1666114219/animal-sounds/zebra_u99gjw.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/zebra_fact1_cdpouk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact2_b6u2js.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact3_hviwtv.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
  {
    id: "28",
    value: 28,
    clicked: false,
    image: images.numbers.dragonfruit,
    name: {
      en: "twenty-eight",
      es: "veintiocho",
    },
    tiles: ["Ze-bra"],
    syllables: ["Ze", "bra"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1666114219/animal-sounds/zebra_u99gjw.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/zebra_fact1_cdpouk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact2_b6u2js.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact3_hviwtv.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
  {
    id: "29",
    value: 29,
    clicked: false,
    image: images.numbers.dragonfruit,
    name: {
      en: "twenty-nine",
      es: "veintinueve",
    },
    tiles: ["Ze-bra"],
    syllables: ["Ze", "bra"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1666114219/animal-sounds/zebra_u99gjw.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/zebra_fact1_cdpouk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact2_b6u2js.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact3_hviwtv.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
  {
    id: "30",
    value: 30,
    clicked: false,
    image: images.numbers.dragonfruit,
    name: {
      en: "thirty",
      es: "treinta",
    },
    tiles: ["Ze-bra"],
    syllables: ["Ze", "bra"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1666114219/animal-sounds/zebra_u99gjw.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/zebra_fact1_cdpouk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact2_b6u2js.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact3_hviwtv.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math",
  },
];

////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// zebrAPI Model Implementation /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

// Content Array Model/Template
export const zebrAPI = {
  science: {
    zoology: {
      alphabet: {
        savanna: [
          {
            id: 1,
            orgValue: "A", // refers to the value by which the particular list will be organized by (Ex. alphabetical, by prime number, etc)
            orgSymbol: "url.png", // image of letter, number or sign language
            image:
              "https://res.cloudinary.com/djqxogkfw/image/upload/v1666725655/Cory-Images/alligator_e1xwoj.png",
            name: {
              eng: "Alligator",
              spa: "Caimán",
            },
            syllables: {
              eng: ["Al-li-", "ga-", "tor"],
              spa: ["Cai-", "mán"],
            },
            audio: {
              sound: "sound.mp3", // this will be the sound the animal or instrument makes. Other lists may not have use for this space
              facts: {
                eng: ["fact1.mp3", "fact2.mp3", "fact3.mp3"],
                spa: [""],
              },
              name: {
                eng: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/alligator_ipbeqb.mp3",
                spa: "",
              },
              syllables: {
                eng: ["syllable1.mp3", "syllable2.mp3", "syllable3.mp3"],
                spa: [""],
              },
            },
            horizontal: true, // this will be removed in future lists as all images will be created within a perfect square
            clicked: false,
          },
        ],
      },
    },
  },
  technology: {},
  engineering: {},
  arts: {},
  maths: {},
};
