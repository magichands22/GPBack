//DOCUMENTACION
(word, filter1, filter2, order) 

ATENCIÓN: LA FUNCIÓN DEBE RECIBIR SIEMPRE LOS CUATRO PARÁMETROS O NO FUNCIONARA O DARA ERROR 
SON TODOS STRINGS LOS PARAMETROS

DEBE RECIBIR POR BODY  EN LA RUTA "/function"
const { word,  filter1, filter2, order} = req.body

PARAMETRO ORDER O PRIMER PARAMETRO: SON LAS PALABRAS DE LA NAVBAR O SIMPLEMENTE "" SI NO HAY NADA BUSCADO 
Y LOS TRAE A LOS 200 DatabaseError

SEGUNDO PARAMETRO FILTER1 ES MARCAS Y DEBE IR "empty" SI ESTA DESACTIVADO O UNA DE LAS SIGUIENTES
MARCAS
TERCER PARAMETRO FILTER2 ES CATEGORIAS Y DEBE IR "empty" SI ESTA DESACTIVADO O UNA DE LAS SIGUIENTES 
CATEGORIAS

CUARTO PARAMETRO ORDER ES EL ORDENAMIENTO Y DEBE IR "empty" SI ESTA DESACTIVADO O UNA DE LAS SIGUIENTES 
POSIBILIDADES:
"namedown" /ESTO ES ORDEN DE NAME EMPEZANDO POR LA z
"nameup" //ESTO ES ORDEN DE NAME EMPEZANDO POR LA A
"priceup" //ESTO ES ORDEN DE PRECIOS de mayor a menor
"pricedown" //ESTO ES ORDEN DE PRECIOS de menor a mayor

EJEMPLOS:



CATEGORIAS: (DEBE RESPETAR MAYUSCULAS MINUSCULAS Y ESPACIOS)

 Powerbank,
 wireless network card,
 videocard,
 Harddrive,
 Monitor,
 Mouse pad,
 coolers,
 processors,
 mouse,
 motherboard,
 memory RAM,
 Tower,
 SSD,
 GAMING CHAIR,
 keyboard,
 Headset,

MARCAS: (DEBE RESPETAR MAYUSCULAS MINUSCULAS Y ESPACIOS) (ACA ESTAN SIN COMILLAS LAS MARCAS, PERO EN EL Request
    DEBERIAN PONER "Zotac" POR EJEMPLO)
Gigabyte,
Zotac,
Asus,
Radeon,
Msi,
Western Digital,
Fantom Drives,
Seagate,
Toshiba,
HP,
DELL,
Msi,
HP,
KOGAN,
SAMSUNG,
IIyama,
ONN,
PANELLO,
BELKIN,
Amazon,
3M,
CORSAIR,
LONDO,
LOGITECH,
RAZER,
BANG JUICE,
RAGE,
Marvo,
Redragon,
HyperX,
KeyChron,
Fantech,
JBL,
Kaze,
xigmatek,
Aerocool,
Intel,
Masterfan,
Sickleflow,
Corsair,
Thermaltake,
Intel,
Ryzen,
SteelSeries,
Lenovo,
NZXT,
AORUS,
Kingston,
XPG,
Depcool,
Gamemax,
PNY,
Crucial,
ASIN,
ATX,
Voguish,
Aluminium,
AeroCoo,
Cooler Master,
Cyclon,
TEAMGROUP,
ACER,
DEIZT,
EXTINGTION,
MICA,
JUST HOME COLLECTION,
CASA JOVEN,
BLAZZE,
TECHNISPORT,
DREIZT,
Jiqiao,
Seasonic,
BeQuiet,
Mercusys,
TP-Link,

