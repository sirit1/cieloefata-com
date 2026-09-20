export type Ficha = {
  name: string;
  shelf: string;
  author: string;
  era: string;
  purpose: string;
  christ: string;
  ref: string;
};

export const fichas: Ficha[] = [
  { name: "Génesis", shelf: "Ley", author: "Moisés", era: "s. XV–XIII a. C.", purpose: "Dios crea, promete y elige. La simiente de la mujer herirá a la serpiente.", christ: "La simiente prometida.", ref: "Gn. 3:15" },
  { name: "Éxodo", shelf: "Ley", author: "Moisés", era: "s. XV–XIII a. C.", purpose: "Jehová liberta con brazo extendido y habita en medio de su pueblo.", christ: "El cordero cuya sangre cubre.", ref: "Éx. 12:13" },
  { name: "Levítico", shelf: "Ley", author: "Moisés", era: "s. XV–XIII a. C.", purpose: "Santidad, sacrificios y el día de la expiación.", christ: "Sin derramamiento de sangre no hay remisión.", ref: "Lv. 17:11" },
  { name: "Números", shelf: "Ley", author: "Moisés", era: "s. XV–XIII a. C.", purpose: "El desierto, la serpiente de bronce, la bendición sacerdotal.", christ: "Como Moisés levantó la serpiente.", ref: "Nm. 21:8–9" },
  { name: "Deuteronomio", shelf: "Ley", author: "Moisés", era: "s. XV–XIII a. C.", purpose: "Oye, Israel. Un Dios. Un pueblo. Un pacto que pide corazón.", christ: "Profeta como Moisés.", ref: "Dt. 18:15" },
  { name: "Josué", shelf: "Historia", author: "Josué / escribas", era: "s. XIII–XII a. C.", purpose: "La tierra se da. Ninguna palabra de Jehová cayó a tierra.", christ: "Josué / Jesús: Jehová salva.", ref: "Jos. 21:45" },
  { name: "Jueces", shelf: "Historia", author: "Samuel / escribas", era: "s. XI a. C.", purpose: "Cada uno hacía lo que bien le parecía. Jehová levanta jueces.", christ: "Necesidad de Rey.", ref: "Jue. 21:25" },
  { name: "Rut", shelf: "Historia", author: "Samuel / escribas", era: "s. XI a. C.", purpose: "Redención del pariente. Una moabita en la línea de David.", christ: "Boaz, el pariente redentor.", ref: "Rt. 4:14–17" },
  { name: "1 Samuel", shelf: "Historia", author: "Samuel, Natán, Gad", era: "s. XI–X a. C.", purpose: "Del juez al rey. El Señor mira el corazón.", christ: "El ungido de Jehová.", ref: "1 S. 16:13" },
  { name: "2 Samuel", shelf: "Historia", author: "Natán, Gad", era: "s. X a. C.", purpose: "El pacto con David: un trono para siempre.", christ: "El hijo de David.", ref: "2 S. 7:12–16" },
  { name: "1 Reyes", shelf: "Historia", author: "Profetas / escribas", era: "s. VI a. C. (comp.)", purpose: "Salomón, el templo, la división, Elías.", christ: "El templo mayor.", ref: "1 R. 8:27" },
  { name: "2 Reyes", shelf: "Historia", author: "Profetas / escribas", era: "s. VI a. C. (comp.)", purpose: "Caída de Samaria y de Jerusalén. El remanente.", christ: "El trono no se apaga.", ref: "2 R. 25:27–30" },
  { name: "1 Crónicas", shelf: "Historia", author: "Esdras / cronista", era: "s. V a. C.", purpose: "Linajes y culto. David preparado para el templo.", christ: "La línea hasta el Mesías.", ref: "1 Cr. 17:11–14" },
  { name: "2 Crónicas", shelf: "Historia", author: "Esdras / cronista", era: "s. V a. C.", purpose: "Judá, el templo, Ciro que deja volver.", christ: "El que edifica la casa.", ref: "2 Cr. 36:23" },
  { name: "Esdras", shelf: "Historia", author: "Esdras", era: "s. V a. C.", purpose: "Vuelta, altar, ley. Esdras había preparado su corazón.", christ: "Restauración bajo la Palabra.", ref: "Esd. 7:10" },
  { name: "Nehemías", shelf: "Historia", author: "Nehemías", era: "s. V a. C.", purpose: "Muros y lectura pública de la ley.", christ: "Leían claramente y ponían el sentido.", ref: "Neh. 8:8" },
  { name: "Ester", shelf: "Historia", author: "Desconocido", era: "s. V a. C.", purpose: "Providencia sin nombrar a Dios. El pueblo no se borra.", christ: "El que guarda a Israel.", ref: "Est. 4:14" },
  { name: "Job", shelf: "Escritos", author: "Desconocido", era: "antiguo", purpose: "El temeroso de Dios en el dolor. Mi Redentor vive.", christ: "El Redentor que vive.", ref: "Job 19:25" },
  { name: "Salmos", shelf: "Escritos", author: "David y otros", era: "s. X–V a. C.", purpose: "Alabanza, lamento, el Rey y el Siervo.", christ: "Dijo Jehová a mi Señor.", ref: "Sal. 110:1" },
  { name: "Proverbios", shelf: "Escritos", author: "Salomón y otros", era: "s. X–VI a. C.", purpose: "El temor de Jehová es el principio de la sabiduría.", christ: "Cristo, sabiduría de Dios.", ref: "Pr. 8:22–31" },
  { name: "Eclesiastés", shelf: "Escritos", author: "Salomón / Qohelet", era: "s. X a. C.", purpose: "Vanidad bajo el sol. Teme a Dios y guarda sus mandamientos.", christ: "Más que Salomón.", ref: "Ec. 12:13" },
  { name: "Cantares", shelf: "Escritos", author: "Salomón", era: "s. X a. C.", purpose: "El amor del pacto, en figura y en carne.", christ: "Mi amado es mío.", ref: "Cnt. 2:16" },
  { name: "Isaías", shelf: "Profetas", author: "Isaías", era: "s. VIII a. C.", purpose: "Santo, Santo, Santo. El Siervo herido. Cielo nuevo.", christ: "Herido por nuestras rebeliones.", ref: "Is. 53:5" },
  { name: "Jeremías", shelf: "Profetas", author: "Jeremías", era: "s. VII–VI a. C.", purpose: "Juicio y pacto nuevo escrito en el corazón.", christ: "El pacto nuevo.", ref: "Jer. 31:31–34" },
  { name: "Lamentaciones", shelf: "Profetas", author: "Jeremías", era: "s. VI a. C.", purpose: "Jerusalén caída. Las misericordias se renuevan.", christ: "El varón de dolores en la ciudad.", ref: "Lm. 3:22–23" },
  { name: "Ezequiel", shelf: "Profetas", author: "Ezequiel", era: "s. VI a. C.", purpose: "Gloria que se va y vuelve. Corazón nuevo. Pastor único.", christ: "Un pastor, mi siervo David.", ref: "Ez. 34:23" },
  { name: "Daniel", shelf: "Profetas", author: "Daniel", era: "s. VI a. C.", purpose: "Reinos que caen. El Hijo del Hombre. Setenta semanas.", christ: "Uno como un hijo de hombre.", ref: "Dn. 7:13–14" },
  { name: "Oseas", shelf: "Profetas", author: "Oseas", era: "s. VIII a. C.", purpose: "Amor de esposo a la infiel. De Egipto llamé a mi hijo.", christ: "De Egipto llamé a mi Hijo.", ref: "Os. 11:1" },
  { name: "Joel", shelf: "Profetas", author: "Joel", era: "s. VIII–V a. C.", purpose: "El día de Jehová. Derramaré mi Espíritu.", christ: "Pentecostés anunciado.", ref: "Jl. 2:28–32" },
  { name: "Amós", shelf: "Profetas", author: "Amós", era: "s. VIII a. C.", purpose: "Justicia que ruede. El tabernáculo de David.", christ: "El tabernáculo levantado.", ref: "Am. 9:11" },
  { name: "Abdías", shelf: "Profetas", author: "Abdías", era: "s. VI a. C.", purpose: "Edom juzgado. El reino será de Jehová.", christ: "El reino del Señor.", ref: "Abd. 21" },
  { name: "Jonás", shelf: "Profetas", author: "Jonás", era: "s. VIII a. C.", purpose: "Misericordia a Nínive. Tres días en el pez.", christ: "La señal de Jonás.", ref: "Jon. 1:17" },
  { name: "Miqueas", shelf: "Profetas", author: "Miqueas", era: "s. VIII a. C.", purpose: "Belén Efrata. Hacer justicia, amar misericordia.", christ: "De ti me saldrá el que será Señor.", ref: "Mi. 5:2" },
  { name: "Nahúm", shelf: "Profetas", author: "Nahúm", era: "s. VII a. C.", purpose: "Nínive cae. Jehová es tardo para la ira y grande en poder.", christ: "El que juzga las naciones.", ref: "Nah. 1:7" },
  { name: "Habacuc", shelf: "Profetas", author: "Habacuc", era: "s. VII a. C.", purpose: "El justo por su fe vivirá.", christ: "La fe que justifica.", ref: "Hab. 2:4" },
  { name: "Sofonías", shelf: "Profetas", author: "Sofonías", era: "s. VII a. C.", purpose: "El día de Jehová. Jehová está en medio de ti.", christ: "El Rey de Israel en medio.", ref: "Sof. 3:15" },
  { name: "Hageo", shelf: "Profetas", author: "Hageo", era: "s. VI a. C.", purpose: "Edificad la casa. La gloria postrera mayor.", christ: "El Deseado de las naciones.", ref: "Hag. 2:7" },
  { name: "Zacarías", shelf: "Profetas", author: "Zacarías", era: "s. VI a. C.", purpose: "El Rey humilde sobre un asno. Al que traspasaron.", christ: "Mirarán al que traspasaron.", ref: "Zac. 12:10" },
  { name: "Malaquías", shelf: "Profetas", author: "Malaquías", era: "s. V a. C.", purpose: "El mensajero. El Sol de justicia.", christ: "El que viene a su templo.", ref: "Mal. 3:1" },
  { name: "Mateo", shelf: "Evangelios", author: "Mateo", era: "s. I", purpose: "Jesús, hijo de David, cumple la Escritura.", christ: "Emmanuel.", ref: "Mt. 1:23" },
  { name: "Marcos", shelf: "Evangelios", author: "Marcos", era: "s. I", purpose: "El evangelio del Hijo de Dios. Éfata. Arrepentíos.", christ: "El Hijo del Hombre a servir y a dar su vida.", ref: "Mr. 10:45" },
  { name: "Lucas", shelf: "Evangelios", author: "Lucas", era: "s. I", purpose: "Investigación ordenada. El Salvador de los pobres.", christ: "Hoy os ha nacido un Salvador.", ref: "Lc. 2:11" },
  { name: "Juan", shelf: "Evangelios", author: "Juan", era: "s. I", purpose: "Para que creáis que Jesús es el Cristo, el Hijo de Dios.", christ: "El Verbo se hizo carne.", ref: "Jn. 1:14" },
  { name: "Hechos", shelf: "Iglesia", author: "Lucas", era: "s. I", purpose: "El Espíritu, la iglesia, hasta lo último de la tierra.", christ: "Este Jesús, a quien vosotros crucificasteis.", ref: "Hch. 2:36" },
  { name: "Romanos", shelf: "Iglesia", author: "Pablo", era: "s. I", purpose: "El evangelio, poder de Dios. Justicia por fe.", christ: "Cristo murió por impíos.", ref: "Ro. 5:8" },
  { name: "1 Corintios", shelf: "Iglesia", author: "Pablo", era: "s. I", purpose: "La iglesia desordenada. Cristo, y este crucificado.", christ: "Cristo, poder y sabiduría de Dios.", ref: "1 Co. 1:23–24" },
  { name: "2 Corintios", shelf: "Iglesia", author: "Pablo", era: "s. I", purpose: "El ministerio de la nueva alianza. Nueva criatura.", christ: "Al que no conoció pecado, por nosotros lo hizo pecado.", ref: "2 Co. 5:21" },
  { name: "Gálatas", shelf: "Iglesia", author: "Pablo", era: "s. I", purpose: "Justificados por la fe, no por la ley.", christ: "Ya no vivo yo, mas vive Cristo en mí.", ref: "Gá. 2:20" },
  { name: "Efesios", shelf: "Iglesia", author: "Pablo", era: "s. I", purpose: "Elegidos en Cristo. Un cuerpo. La armadura.", christ: "Cabeza de la iglesia.", ref: "Ef. 1:22–23" },
  { name: "Filipenses", shelf: "Iglesia", author: "Pablo", era: "s. I", purpose: "Gozo en cadenas. El himno del que se despojó.", christ: "Se humilló hasta la muerte de cruz.", ref: "Fil. 2:6–11" },
  { name: "Colosenses", shelf: "Iglesia", author: "Pablo", era: "s. I", purpose: "Cristo, imagen del Dios invisible. Plenitud.", christ: "En él habita corporalmente la plenitud.", ref: "Col. 2:9" },
  { name: "1 Tesalonicenses", shelf: "Iglesia", author: "Pablo", era: "s. I", purpose: "Santidad y esperanza. El Señor descenderá.", christ: "El que viene.", ref: "1 Ts. 4:16–17" },
  { name: "2 Tesalonicenses", shelf: "Iglesia", author: "Pablo", era: "s. I", purpose: "No os dejéis mover. El hombre de pecado. Firmeza.", christ: "El Señor lo matará con el espíritu de su boca.", ref: "2 Ts. 2:8" },
  { name: "1 Timoteo", shelf: "Iglesia", author: "Pablo", era: "s. I", purpose: "Cómo conducirse en la casa de Dios.", christ: "Un solo mediador.", ref: "1 Ti. 2:5" },
  { name: "2 Timoteo", shelf: "Iglesia", author: "Pablo", era: "s. I", purpose: "La Escritura, útil. Predica la palabra.", christ: "Cristo Jesús, juez de vivos y muertos.", ref: "2 Ti. 4:1–2" },
  { name: "Tito", shelf: "Iglesia", author: "Pablo", era: "s. I", purpose: "Sana doctrina. La gracia que enseña.", christ: "Nuestro gran Dios y Salvador.", ref: "Tit. 2:13" },
  { name: "Filemón", shelf: "Iglesia", author: "Pablo", era: "s. I", purpose: "Un esclavo recibido como hermano.", christ: "Recíbele como a mí.", ref: "Flm. 17" },
  { name: "Hebreos", shelf: "Iglesia", author: "Desconocido", era: "s. I", purpose: "Mejor pacto, mejor sacerdote, mejor sacrificio.", christ: "Sacerdote para siempre.", ref: "He. 7:25" },
  { name: "Santiago", shelf: "Iglesia", author: "Santiago", era: "s. I", purpose: "La fe sin obras está muerta. El espejo.", christ: "La ley real.", ref: "Stg. 2:17" },
  { name: "1 Pedro", shelf: "Iglesia", author: "Pedro", era: "s. I", purpose: "Peregrinos. Por sus heridas fuisteis sanados.", christ: "El Cordero sin mancha.", ref: "1 P. 1:19" },
  { name: "2 Pedro", shelf: "Iglesia", author: "Pedro", era: "s. I", purpose: "Añadid a la fe. Escritura, no fábula.", christ: "Majestad vista con los ojos.", ref: "2 P. 1:16" },
  { name: "1 Juan", shelf: "Iglesia", author: "Juan", era: "s. I", purpose: "Lo que hemos oído, visto y paladeado. Dios es luz.", christ: "La sangre de Jesucristo nos limpia.", ref: "1 Jn. 1:7" },
  { name: "2 Juan", shelf: "Iglesia", author: "Juan", era: "s. I", purpose: "Permaneced en la doctrina de Cristo.", christ: "El que permanece en la doctrina.", ref: "2 Jn. 9" },
  { name: "3 Juan", shelf: "Iglesia", author: "Juan", era: "s. I", purpose: "Hospitalidad y la verdad.", christ: "No imites lo malo, sino lo bueno.", ref: "3 Jn. 11" },
  { name: "Judas", shelf: "Iglesia", author: "Judas", era: "s. I", purpose: "Contended ardientemente por la fe.", christ: "El único que puede guardaros.", ref: "Jud. 24–25" },
  { name: "Apocalipsis", shelf: "Consumación", author: "Juan", era: "s. I", purpose: "El León vence. El Cordero fue inmolado. Todo nuevo.", christ: "Yo soy el Alfa y la Omega.", ref: "Ap. 22:13" },
];

export function fichasPorEstante(shelf: string) {
  return fichas.filter((f) => f.shelf === shelf);
}
